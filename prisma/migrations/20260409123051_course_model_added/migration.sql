-- CreateEnum
CREATE TYPE "CoursePurchaseStatus" AS ENUM ('PENDING', 'PAID', 'FAILED', 'REFUNDED', 'CANCELED');

-- CreateEnum
CREATE TYPE "CourseAccessDuration" AS ENUM ('MONTHS_6', 'MONTHS_12', 'UNLIMITED');

-- CreateTable
CREATE TABLE "courses" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "priceAmount" INTEGER NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'bdt',
    "accessDuration" "CourseAccessDuration" NOT NULL DEFAULT 'UNLIMITED',
    "stripeProductId" TEXT,
    "stripePriceId" TEXT,
    "thumbnailUrl" TEXT,
    "isPublished" BOOLEAN NOT NULL DEFAULT false,
    "createdByUserId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "courses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "course_purchases" (
    "id" TEXT NOT NULL,
    "applicantId" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    "status" "CoursePurchaseStatus" NOT NULL DEFAULT 'PENDING',
    "amount" INTEGER NOT NULL,
    "currency" TEXT NOT NULL,
    "stripeCheckoutSessionId" TEXT,
    "stripePaymentIntentId" TEXT,
    "paidAt" TIMESTAMP(3),
    "accessExpiresAt" TIMESTAMP(3),
    "receiptNumber" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "course_purchases_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "courses_slug_key" ON "courses"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "course_purchases_stripeCheckoutSessionId_key" ON "course_purchases"("stripeCheckoutSessionId");

-- CreateIndex
CREATE UNIQUE INDEX "course_purchases_stripePaymentIntentId_key" ON "course_purchases"("stripePaymentIntentId");

-- CreateIndex
CREATE UNIQUE INDEX "course_purchases_receiptNumber_key" ON "course_purchases"("receiptNumber");

-- CreateIndex
CREATE INDEX "course_purchases_applicantId_idx" ON "course_purchases"("applicantId");

-- CreateIndex
CREATE INDEX "course_purchases_courseId_idx" ON "course_purchases"("courseId");

-- CreateIndex
CREATE INDEX "course_purchases_status_idx" ON "course_purchases"("status");

-- AddForeignKey
ALTER TABLE "courses" ADD CONSTRAINT "courses_createdByUserId_fkey" FOREIGN KEY ("createdByUserId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "course_purchases" ADD CONSTRAINT "course_purchases_applicantId_fkey" FOREIGN KEY ("applicantId") REFERENCES "applicants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "course_purchases" ADD CONSTRAINT "course_purchases_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
