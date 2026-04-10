-- Course creator: User -> Admin (FK to admin.id).

-- 1) New column (nullable until backfilled)
ALTER TABLE "courses" ADD COLUMN "createdByAdminId" TEXT;

-- 2) Staff who created courses must have an admin row (covers seeded SUPER_ADMIN without profile)
INSERT INTO "admin" ("id", "userId", "name", "createdAt", "updatedAt")
SELECT gen_random_uuid()::text, u."id", u."name", NOW(), NOW()
FROM "user" u
WHERE u."id" IN (SELECT DISTINCT "createdByUserId" FROM "courses")
  AND NOT EXISTS (SELECT 1 FROM "admin" a WHERE a."userId" = u."id");

-- 3) Point each course at the creator's admin profile
UPDATE "courses" c
SET "createdByAdminId" = a."id"
FROM "admin" a
WHERE a."userId" = c."createdByUserId";

-- 4) Enforce NOT NULL and swap FK
ALTER TABLE "courses" ALTER COLUMN "createdByAdminId" SET NOT NULL;

ALTER TABLE "courses" DROP CONSTRAINT "courses_createdByUserId_fkey";

ALTER TABLE "courses" DROP COLUMN "createdByUserId";

ALTER TABLE "courses" ADD CONSTRAINT "courses_createdByAdminId_fkey" FOREIGN KEY ("createdByAdminId") REFERENCES "admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
