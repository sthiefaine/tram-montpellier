/*
  Warnings:

  - You are about to drop the column `estimatedBackNormalTime` on the `Incident` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Incident` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Incident" DROP COLUMN "estimatedBackNormalTime",
ADD COLUMN     "allDay" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "estimatedEndTime" TIMESTAMP(3),
ADD COLUMN     "estimatedStartTime" TIMESTAMP(3),
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
