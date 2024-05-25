-- CreateTable
CREATE TABLE "XSession" (
    "id" TEXT NOT NULL,
    "cookie" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "XSession_pkey" PRIMARY KEY ("id")
);
