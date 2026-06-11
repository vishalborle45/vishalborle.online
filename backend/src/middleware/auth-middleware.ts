import { type Request, type Response, type NextFunction } from "express";
import env from "../config/env.js";

export const simpleAuth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers["auth-token"];

  if (!token) {
    return res.status(401).json({
      message: "No auth token provided",
    });
  }

  const secret = env.AUTH_SECRET;

  if (!secret) {
    return res.status(500).json({
      message: "Server auth secret not configured",
    });
  }

  // normalize token to string
  const tokenStr = Array.isArray(token) ? token[0] : token;

  if (tokenStr !== secret) {
    return res.status(403).json({
      message: "Invalid auth token",
    });
  }

  next();
};
