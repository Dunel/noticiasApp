/*
  Warnings:

  - You are about to drop the column `content` on the `New` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "New" DROP COLUMN "content",
ADD COLUMN     "body" TEXT;
