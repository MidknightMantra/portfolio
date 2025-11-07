import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { projectRouter } from "./routes/projects";
import { contactRouter } from "./routes/contact";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/projects", projectRouter);
app.use("/api/contact", contactRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Backend running on port ${PORT}`));
