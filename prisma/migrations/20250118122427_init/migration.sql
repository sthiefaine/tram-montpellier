/*
  Warnings:

  - The primary key for the `_LineStops` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[A,B]` on the table `_LineStops` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "_LineStops" DROP CONSTRAINT "_LineStops_AB_pkey";

-- CreateIndex
CREATE UNIQUE INDEX "_LineStops_AB_unique" ON "_LineStops"("A", "B");
