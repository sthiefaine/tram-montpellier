/*
  Warnings:

  - You are about to drop the column `tramsImpactedSupposed` on the `Incident` table. All the data in the column will be lost.
  - You are about to drop the column `tramsImpactedSupposedAccuracy` on the `Incident` table. All the data in the column will be lost.
  - Added the required column `tweetId` to the `Incident` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Incident" DROP COLUMN "tramsImpactedSupposed",
DROP COLUMN "tramsImpactedSupposedAccuracy",
ADD COLUMN     "tweetId" TEXT NOT NULL;
