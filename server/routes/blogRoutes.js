import express from "express";
import Blog from "../models/Blog.js";

const router = express.Router();

/* GET ALL BLOGS */
router.get("/", async (req, res) => {
  try {
    const { category, trending } = req.query;

    let filter = {};
    if (category) filter.category = category;
    if (trending) filter.isTrending = true;

    const blogs = await Blog.find(filter).sort({ createdAt: -1 });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch blogs" });
  }
});

/* GET SINGLE BLOG */
router.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.json(blog);
  } catch {
    res.status(404).json({ message: "Blog not found" });
  }
});

/* CREATE BLOG (Admin) */
router.post("/", async (req, res) => {
  try {
    const blog = new Blog(req.body);
    await blog.save();
    res.status(201).json(blog);
  } catch {
    res.status(400).json({ message: "Blog creation failed" });
  }
});

export default router;
