/*
  Warnings:

  - Added the required column `keyTweetIdIncident` to the `Incident` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Incident" ADD COLUMN     "keyTweetIdIncident" TEXT NOT NULL;
