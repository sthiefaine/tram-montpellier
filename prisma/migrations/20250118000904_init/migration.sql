-- AlterTable
ALTER TABLE "_LineStops" ADD CONSTRAINT "_LineStops_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_LineStops_AB_unique";
