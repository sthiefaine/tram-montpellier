/*
  Warnings:

  - You are about to drop the `_LineStops` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `tramwayLineId` to the `Stop` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_LineStops" DROP CONSTRAINT "_LineStops_A_fkey";

-- DropForeignKey
ALTER TABLE "_LineStops" DROP CONSTRAINT "_LineStops_B_fkey";

-- AlterTable
ALTER TABLE "Stop" ADD COLUMN     "tramwayLineId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_LineStops";

-- AddForeignKey
ALTER TABLE "Stop" ADD CONSTRAINT "Stop_tramwayLineId_fkey" FOREIGN KEY ("tramwayLineId") REFERENCES "TramwayLine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
