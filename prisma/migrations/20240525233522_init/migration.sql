-- CreateTable
CREATE TABLE "Incident" (
    "id" SERIAL NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "incidentType" TEXT NOT NULL,
    "incidentDescription" TEXT NOT NULL,
    "tramsImpacted" TEXT[],
    "tramsImpactedAccuracy" DOUBLE PRECISION NOT NULL,
    "tramsImpactedSupposed" TEXT[],
    "tramsImpactedSupposedAccuracy" DOUBLE PRECISION NOT NULL,
    "localisationIncident" TEXT[],
    "impactedStation" TEXT[],
    "impactedStationAccuracy" DOUBLE PRECISION NOT NULL,
    "estimatedBackNormalTime" TIMESTAMP(3),
    "incidentTerminated" BOOLEAN NOT NULL DEFAULT false,
    "incidentDuration" INTEGER,

    CONSTRAINT "Incident_pkey" PRIMARY KEY ("id")
);
