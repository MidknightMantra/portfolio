import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const projectRouter = Router();

// Get all projects
projectRouter.get("/", async (_req, res) => {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: "desc" },
  });
  res.json(projects);
});
