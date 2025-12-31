import express from "express";
import Video from "../models/Video.js";

const router = express.Router();

/* GET ALL VIDEOS (LATEST FIRST) */
router.get("/", async (req, res) => {
  const videos = await Video.find().sort({ createdAt: -1 });
  res.json(videos);
});

/* ADD VIDEO */
router.post("/", async (req, res) => {
  const video = new Video(req.body);
  await video.save();
  res.status(201).json(video);
});

export default router;
