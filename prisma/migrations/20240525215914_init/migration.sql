-- CreateTable
CREATE TABLE "Tweet" (
    "id" TEXT NOT NULL,
    "textContent" TEXT NOT NULL,
    "TweetCreatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tweet_pkey" PRIMARY KEY ("id")
);
