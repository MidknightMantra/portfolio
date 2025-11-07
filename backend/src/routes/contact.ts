import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const contactRouter = Router();

// Create a new contact message
contactRouter.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message)
      return res.status(400).json({ error: "Missing fields" });

    const saved = await prisma.message.create({
      data: { name, email, message },
    });

    res.status(201).json(saved);
  } catch (err) {
    console.error("Error saving message:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});
