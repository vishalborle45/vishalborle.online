import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import spotifyRoutes from "./routes/spotify-routes.js";
import contactRoutes from "./routes/contact-routes.js";
import resumeRoutes from "./routes/resume-routes.js";
import loginRoutes from "./routes/login-routes.js";
import callbackRoutes from "./routes/callback-routes.js";
import env from "./config/env.js";
dotenv.config();

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://127.0.0.1:5173",
      "https://vishalborle.online",
    ],
    credentials: true,
  }),
);

app.use(express.json());

// health check
app.get("/health", (_req, res) => {
  res.json({ message: "System is up and running" });
});

app.use("/callback", callbackRoutes);
app.use("/login", loginRoutes);
app.use("/spotify-track", spotifyRoutes);
app.use("/contact", contactRoutes);
app.use("/resume", resumeRoutes);

const PORT = env.PORT;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
