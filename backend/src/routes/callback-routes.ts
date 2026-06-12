import { Router } from "express";
import axios from "axios";
import env from "../config/env.js";

const router = Router();

router.get("/", async (req, res) => {
  const code = req.query.code as string;

  if (!code) {
    return res.status(400).json({
      success: false,
      message: "No code received from Spotify",
    });
  }

  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      new URLSearchParams({
        grant_type: "authorization_code",
        code,
        redirect_uri: env.SPOTIFY_REDIRECT_URI as string,
      }),
      {
        headers: {
          Authorization:
            "Basic " +
            Buffer.from(
              `${env.SPOTIFY_CLIENT_ID}:${env.SPOTIFY_CLIENT_SECRET}`,
            ).toString("base64"),
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
    );

    return res.json({
      access_token: response.data.access_token,
      refresh_token: response.data.refresh_token,
    });
  } catch (err: any) {
    console.error(err.response?.data || err);
    return res.status(500).json({
      success: false,
      message: "Callback failed",
    });
  }
});

export default router;
