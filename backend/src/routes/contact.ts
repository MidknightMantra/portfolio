import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const contactRouter = Router();

contactRouter.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const saved = await prisma.message.create({
      data: { name, email, message }
    });
    res.status(201).json(saved);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to send message" });
  }
});
