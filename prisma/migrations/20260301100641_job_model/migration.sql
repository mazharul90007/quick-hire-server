-- CreateEnum
CREATE TYPE "EmploymentType" AS ENUM ('FULL_TIME', 'PART_TIME', 'CONTRACTUAL', 'INTERNSHIP', 'FREELANCE');

-- AlterTable
ALTER TABLE "job" ADD COLUMN     "companyLogo" TEXT,
ADD COLUMN     "employmentType" "EmploymentType" NOT NULL DEFAULT 'FULL_TIME',
ALTER COLUMN "jobType" SET DEFAULT 'ONSITE';
