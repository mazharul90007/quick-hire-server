-- Copy role-specific avatar URLs into user.image when user has no image yet
UPDATE "user" u
SET "image" = a."profilePhoto"
FROM "applicants" a
WHERE u.id = a."userId"
  AND a."profilePhoto" IS NOT NULL
  AND TRIM(a."profilePhoto") <> ''
  AND (u."image" IS NULL OR TRIM(u."image") = '');

UPDATE "user" u
SET "image" = adm."profilePhoto"
FROM "admin" adm
WHERE u.id = adm."userId"
  AND adm."profilePhoto" IS NOT NULL
  AND TRIM(adm."profilePhoto") <> ''
  AND (u."image" IS NULL OR TRIM(u."image") = '');

UPDATE "user" u
SET "image" = r."recruiterPhoto"
FROM "recruiters" r
WHERE u.id = r."userId"
  AND r."recruiterPhoto" IS NOT NULL
  AND TRIM(r."recruiterPhoto") <> ''
  AND (u."image" IS NULL OR TRIM(u."image") = '');

ALTER TABLE "admin" DROP COLUMN "profilePhoto";
ALTER TABLE "applicants" DROP COLUMN "profilePhoto";
ALTER TABLE "recruiters" DROP COLUMN "recruiterPhoto";
