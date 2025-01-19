-- CreateTable
CREATE TABLE "XSession" (
    "id" TEXT NOT NULL,
    "cookie" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "XSession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tweet" (
    "id" TEXT NOT NULL,
    "tweetId" TEXT NOT NULL,
    "textContent" TEXT NOT NULL,
    "TweetCreatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tweet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Incident" (
    "id" SERIAL NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "tweetId" TEXT NOT NULL,
    "keyTweetIdIncident" TEXT NOT NULL,
    "incidentType" TEXT NOT NULL,
    "incidentDescription" TEXT NOT NULL,
    "tramsImpacted" TEXT[],
    "tramsImpactedAccuracy" DOUBLE PRECISION NOT NULL,
    "localisationIncident" TEXT NOT NULL,
    "impactedStation" TEXT[],
    "impactedStationAccuracy" DOUBLE PRECISION NOT NULL,
    "estimatedStartTime" TIMESTAMP(3),
    "estimatedEndTime" TIMESTAMP(3),
    "incidentTerminated" BOOLEAN NOT NULL DEFAULT false,
    "incidentDuration" INTEGER,
    "allDay" BOOLEAN NOT NULL DEFAULT false,
    "incidentEnd" BOOLEAN DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Incident_pkey" PRIMARY KEY ("id")
);

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
    "lat" TEXT,
    "lng" TEXT,
    "accessible" BOOLEAN,
    "direction" BOOLEAN NOT NULL,
    "logical_stop" TEXT NOT NULL,
    "isTerminus" BOOLEAN NOT NULL,
    "order" INTEGER NOT NULL,

    CONSTRAINT "Stop_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LastFetchTweet" (
    "id" INTEGER NOT NULL,
    "lastFetch" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LastFetchTweet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LastReport" (
    "id" INTEGER NOT NULL,
    "lastReport" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LastReport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_LineStops" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Tweet_tweetId_key" ON "Tweet"("tweetId");

-- CreateIndex
CREATE UNIQUE INDEX "Incident_tweetId_key" ON "Incident"("tweetId");

-- CreateIndex
CREATE UNIQUE INDEX "TramwayLine_externalCode_key" ON "TramwayLine"("externalCode");

-- CreateIndex
CREATE UNIQUE INDEX "Stop_logical_stop_key" ON "Stop"("logical_stop");

-- CreateIndex
CREATE UNIQUE INDEX "LastFetchTweet_id_key" ON "LastFetchTweet"("id");

-- CreateIndex
CREATE UNIQUE INDEX "LastReport_id_key" ON "LastReport"("id");

-- CreateIndex
CREATE UNIQUE INDEX "_LineStops_AB_unique" ON "_LineStops"("A", "B");

-- CreateIndex
CREATE INDEX "_LineStops_B_index" ON "_LineStops"("B");

-- AddForeignKey
ALTER TABLE "_LineStops" ADD CONSTRAINT "_LineStops_A_fkey" FOREIGN KEY ("A") REFERENCES "Stop"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LineStops" ADD CONSTRAINT "_LineStops_B_fkey" FOREIGN KEY ("B") REFERENCES "TramwayLine"("id") ON DELETE CASCADE ON UPDATE CASCADE;
