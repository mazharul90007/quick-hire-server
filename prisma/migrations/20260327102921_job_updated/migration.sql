-- CreateEnum
CREATE TYPE "JobStatus" AS ENUM ('ACTIVE', 'PAUSED', 'DELETED');

-- AlterTable
ALTER TABLE "jobs" ADD COLUMN     "status" "JobStatus" NOT NULL DEFAULT 'ACTIVE';
