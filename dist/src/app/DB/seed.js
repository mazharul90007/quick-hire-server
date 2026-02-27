import { UserRole } from "../../../generated/prisma/enums";
import { prisma } from "../../lib/prisma";
const superAdminData = {
    name: "Super Admin",
    email: "superadmin@gmail.com",
    password: "pass123456",
    role: UserRole.SUPER_ADMIN,
    emailVerified: true,
};
export const seedSuperAdmin = async () => {
    try {
        //first check if any super admin is there or not
        const isSuperAdminExist = await prisma.user.findFirst({
            where: {
                role: UserRole.SUPER_ADMIN,
            },
        });
        if (!isSuperAdminExist) {
            await prisma.user.create({
                data: superAdminData,
            });
            console.log("Super Admin seeded successfully!");
        }
    }
    catch (error) {
        console.error("Error sedding Super Admin: ", error);
    }
};
//# sourceMappingURL=seed.js.map