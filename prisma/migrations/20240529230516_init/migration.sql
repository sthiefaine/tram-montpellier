/*
  Warnings:

  - A unique constraint covering the columns `[tweetId]` on the table `Incident` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Incident_tweetId_key" ON "Incident"("tweetId");
