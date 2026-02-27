import { UserRole } from "../../../generated/prisma/enums";
import { prisma } from "../../lib/prisma";
import { auth } from "../../lib/auth";

export const seedSuperAdmin = async () => {
  try {
    //first check if any super admin is there or not
    const isSuperAdminExist = await prisma.user.findFirst({
      where: {
        role: UserRole.SUPER_ADMIN,
      },
    });

    if (!isSuperAdminExist) {
      await auth.api.signUpEmail({
        body: {
          name: "Super Admin",
          email: "superadmin@gmail.com",
          password: "pass123456",
          role: UserRole.SUPER_ADMIN,
        },
      });

      // Mark email as verified manually for the Super Admin
      await prisma.user.update({
        where: { email: "superadmin@gmail.com" },
        data: { emailVerified: true },
      });

      console.log("Super Admin seeded successfully!");
    }
  } catch (error) {
    console.error("Error sedding Super Admin: ", error);
  }
};
