import status from "http-status";
import { prisma } from "../../../lib/prisma";
import ApiError from "../../errors/ApiErrors";
import { auth } from "../../../lib/auth";
import { ICreateApplicant } from "./auth.interface";

//=====================Create Applicant=====================
const createApplicant = async (payload: ICreateApplicant) => {
  const { email, password, applicant } = payload;

  //check user exist
  const isUserExist = await prisma.user.findUnique({
    where: { email },
  });

  if (isUserExist) {
    throw new ApiError(status.CONFLICT, "User with this email already exists!");
  }

  //create user via auth
  const userData = await auth.api.signUpEmail({
    body: {
      email,
      password,
      name: applicant.name || "",
    },
  });

  if (!userData.user) {
    throw new ApiError(status.BAD_REQUEST, "Failed to register user!");
  }

  const userId = userData.user.id;

  //create applicant
  try {
    const result = await prisma.applicant.create({
      data: {
        ...applicant,
        userId: userId,
      },
      include: {
        user: {
          select: {
            email: true,
            name: true,
            image: true,
            emailVerified: true,
            address: true,
            role: true,
            status: true,
            needPasswordChange: true,
          },
        },
      },
    });

    return result;
  } catch (error) {
    console.error("Applicant creation failed, rolling back user:", error);
    await prisma.user.delete({
      where: { id: userId },
    });

    throw new ApiError(
      status.INTERNAL_SERVER_ERROR,
      "Failed to complete applicant registration. Please try again.",
    );
  }
};

//====================Create Admin====================
const createAdmin = async (payload: any) => {
  const { password, admin } = payload;

  // Create User via better-auth with needPasswordChange: true
  const userData = await auth.api.signUpEmail({
    body: {
      email: admin.email,
      password,
      name: admin.name || "",
      role: "ADMIN",
      needPasswordChange: true,
    },
  });
  if (!userData.user)
    throw new ApiError(status.BAD_REQUEST, "Failed to create user!");
  const userId = userData.user.id;
  try {
    // Create Admin profile record
    const { email: _, ...adminData } = admin;
    const result = await prisma.admin.create({
      data: { ...adminData, userId },
    });
    return result;
  } catch (error) {
    await prisma.user.delete({ where: { id: userId } });
    throw new ApiError(status.INTERNAL_SERVER_ERROR, "Admin creation failed!");
  }
};

//====================Forget Password==================
const forgetPassword = async (payload: { email: string }) => {
  const { email } = payload;

  // 1. Check if user is verified before sending a reset email
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (user && !user.emailVerified) {
    throw new ApiError(
      status.FORBIDDEN,
      "Please verify your email address first!",
    );
  }

  return await (auth.api as any).requestPasswordReset({
    body: {
      email,
      redirectTo: `${process.env.APP_URL}/reset-password`,
    },
  });
};

//====================Reset Password=====================
const resetPassword = async (payload: any) => {
  const { newPassword, token } = payload;

  // 1. In Better-Auth v1, the reset token is stored in the 'identifier' with a prefix
  // and the 'value' field contains the User ID.
  const verification = await prisma.verification.findFirst({
    where: { identifier: `reset-password:${token}` },
  });

  if (!verification) {
    throw new ApiError(status.BAD_REQUEST, "Invalid or expired reset token!");
  }

  const userId = verification.value;

  // 2. Perform the reset via Better-Auth
  const result = await auth.api.resetPassword({
    body: { newPassword, token },
  });

  // Check 'status'
  if (!result.status) {
    throw new ApiError(status.BAD_REQUEST, "Password reset failed");
  }

  // 3. Clear the needPasswordChange flag using the userId we found
  await prisma.user.update({
    where: { id: userId },
    data: { needPasswordChange: false },
  });

  return result;
};

export const AuthService = {
  createApplicant,
  createAdmin,
  forgetPassword,
  resetPassword,
};
