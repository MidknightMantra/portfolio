import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { projectRouter } from "./routes/projects.js";
import { contactRouter } from "./routes/contact.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// API routes
app.use("/api/projects", projectRouter);
app.use("/api/contact", contactRouter);

// ✅ Render dynamically provides the port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Backend running on port ${PORT}`));
