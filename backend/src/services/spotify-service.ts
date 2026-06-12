import axios from "axios";
import env from "../config/env.js";

function assertEnv(name: string, value: string | undefined) {
  if (!value) throw new Error(`Missing env variable: ${name}`);
  return value;
}

async function getAccessToken(): Promise<string> {
  const clientId = assertEnv("SPOTIFY_CLIENT_ID", env.SPOTIFY_CLIENT_ID);
  const clientSecret = assertEnv(
    "SPOTIFY_CLIENT_SECRET",
    env.SPOTIFY_CLIENT_SECRET,
  );
  const refreshToken = assertEnv(
    "SPOTIFY_REFRESH_TOKEN",
    env.SPOTIFY_REFRESH_TOKEN,
  );

  const response = await axios.post(
    "https://accounts.spotify.com/api/token",
    new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
    {
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(`${clientId}:${clientSecret}`).toString("base64"),
        "Content-Type": "application/x-www-form-urlencoded",
      },
    },
  );

  return response.data.access_token;
}

// 🔥 reusable formatter
function formatTrack(track: any, isNowPlaying: boolean) {
  return {
    song: track?.name ?? "Unknown",
    artist: track?.artists?.map((a: any) => a.name).join(", ") ?? "Unknown",
    album: track?.album?.name ?? "Unknown",
    cover: track?.album?.images?.[0]?.url ?? null,
    url: track?.external_urls?.spotify ?? null,
    nowPlaying: isNowPlaying,
  };
}

export async function getSpotifyTrack() {
  const accessToken = await getAccessToken();

  // =========================
  // NOW PLAYING
  // =========================
  try {
    const current = await axios.get(
      "https://api.spotify.com/v1/me/player/currently-playing",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        validateStatus: (status) => status < 500,
      },
    );

    if (current.status === 200 && current.data?.item) {
      return formatTrack(current.data.item, true);
    }
  } catch (err) {
    console.error("Currently playing error:", err);
  }

  // =========================
  // RECENTLY PLAYED FALLBACK
  // =========================
  try {
    const recent = await axios.get(
      "https://api.spotify.com/v1/me/player/recently-played?limit=1",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    const item = recent.data?.items?.[0]?.track;

    if (!item) {
      throw new Error("No recently played track found");
    }

    return formatTrack(item, false);
  } catch (err) {
    console.error("Recently played error:", err);
    throw new Error("Failed to fetch Spotify track");
  }
}
