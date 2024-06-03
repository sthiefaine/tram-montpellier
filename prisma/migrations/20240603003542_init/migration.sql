-- CreateTable
CREATE TABLE "LastFetchTweet" (
    "id" INTEGER NOT NULL DEFAULT 1,
    "lastFetch" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LastFetchTweet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LastReport" (
    "id" INTEGER NOT NULL DEFAULT 1,
    "lastReport" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LastReport_pkey" PRIMARY KEY ("id")
);
