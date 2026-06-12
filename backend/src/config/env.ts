import dotenv from "dotenv";
dotenv.config();

const env = {
  PORT: process.env.PORT || "3000",
  EMAIL_USER: process.env.EMAIL_USER || "",
  EMAIL_PASS: process.env.EMAIL_PASS || "",
  SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID || "",
  SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET || "",
  SPOTIFY_REDIRECT_URI:
    process.env.SPOTIFY_REDIRECT_URI || "http://127.0.0.1:3000/callback",
  SPOTIFY_REFRESH_TOKEN: process.env.SPOTIFY_REFRESH_TOKEN || "",
  AUTH_SECRET: process.env.AUTH_SECRET || "",
};

export default env;
