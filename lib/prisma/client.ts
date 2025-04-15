// lib/prisma/client.ts
import { PrismaClient } from "./generated";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["query"], // optional: log queries for dev
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
