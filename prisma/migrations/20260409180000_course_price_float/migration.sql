-- AlterTable: course list price supports decimals (major currency units)
ALTER TABLE "courses" ALTER COLUMN "priceAmount" TYPE DOUBLE PRECISION USING ("priceAmount"::double precision);
