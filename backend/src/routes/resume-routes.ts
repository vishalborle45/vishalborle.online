import { Router } from "express";
import path from "path";
import { fileURLToPath } from "url";

const router = Router();

router.get("/", (_req, res) => {
  const filePath = path.resolve(
    process.cwd(),
    "public",
    "vishal-borle-resume.pdf",
  );

  res.download(filePath);
});

export default router;
