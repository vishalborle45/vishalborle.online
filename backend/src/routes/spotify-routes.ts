import { Router } from "express";
import { getSpotifyTrack } from "../services/spotify-service.js";

const router = Router();

// 🔥 main endpoint
router.get("/", async (_req, res) => {
  try {
    const track = await getSpotifyTrack();
    return res.status(200).json(track);
  } catch (error) {
    console.error("Spotify route error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch Spotify track",
    });
  }
});

export default router;
