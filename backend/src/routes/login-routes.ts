import { Router } from "express";
import qs from "querystring";
import env from "../config/env.js";

const router = Router();

router.get("/", (_req, res) => {
  const scope = [
    "user-read-currently-playing",
    "user-read-playback-state",
    "user-read-recently-played",
  ].join(" ");

  const url =
    "https://accounts.spotify.com/authorize?" +
    qs.stringify({
      response_type: "code",
      client_id: env.SPOTIFY_CLIENT_SECRET,
      scope,
      redirect_uri: env.SPOTIFY_REDIRECT_URI,
    });

  res.redirect(url);
});

export default router;
