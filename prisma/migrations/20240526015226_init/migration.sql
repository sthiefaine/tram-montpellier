-- CreateTable
CREATE TABLE "TramwayLine" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "couleur" TEXT NOT NULL,
    "externalCode" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "commercialId" TEXT NOT NULL,

    CONSTRAINT "TramwayLine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Stop" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "direction" BOOLEAN NOT NULL,
    "logical_stop" TEXT NOT NULL,
    "isTerminus" BOOLEAN NOT NULL,
    "order" INTEGER NOT NULL,

    CONSTRAINT "Stop_pkey" PRIMARY KEY ("id")
);

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
