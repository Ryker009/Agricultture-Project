import express from "express";
import Comment from "../models/Comment.js";
import User from "../models/User.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

/* GET COMMENTS (public) */
router.get("/:blogId", async (req, res) => {
  const comments = await Comment.find({ blogId: req.params.blogId })
    .populate("userId", "name")
    .sort({ createdAt: -1 });

  res.json(comments);
});

/* ADD COMMENT (logged-in users only) */
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { blogId, message } = req.body;

    const comment = await Comment.create({
      blogId,
      userId: req.user.id,
      message,
    });

    res.status(201).json(comment);
  } catch (err) {
    res.status(400).json({ message: "Failed to add comment" });
  }
});

export default router;
