/*
  Warnings:

  - You are about to drop the column `tramwayLineId` on the `Stop` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Stop" DROP CONSTRAINT "Stop_tramwayLineId_fkey";

-- AlterTable
ALTER TABLE "Stop" DROP COLUMN "tramwayLineId";

-- CreateTable
CREATE TABLE "_LineStops" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_LineStops_AB_unique" ON "_LineStops"("A", "B");

-- CreateIndex
CREATE INDEX "_LineStops_B_index" ON "_LineStops"("B");

-- AddForeignKey
ALTER TABLE "_LineStops" ADD CONSTRAINT "_LineStops_A_fkey" FOREIGN KEY ("A") REFERENCES "Stop"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LineStops" ADD CONSTRAINT "_LineStops_B_fkey" FOREIGN KEY ("B") REFERENCES "TramwayLine"("id") ON DELETE CASCADE ON UPDATE CASCADE;
