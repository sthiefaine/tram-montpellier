/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `LastFetchTweet` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `LastReport` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "LastFetchTweet" ALTER COLUMN "id" DROP DEFAULT;

-- AlterTable
ALTER TABLE "LastReport" ALTER COLUMN "id" DROP DEFAULT;

-- CreateIndex
CREATE UNIQUE INDEX "LastFetchTweet_id_key" ON "LastFetchTweet"("id");

-- CreateIndex
CREATE UNIQUE INDEX "LastReport_id_key" ON "LastReport"("id");
