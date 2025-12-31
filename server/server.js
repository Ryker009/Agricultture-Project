import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";

import blogRoutes from "./routes/blogRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";
import videoRoutes from "./routes/videoRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";


const app = express();

// 🔥 CONNECT DATABASE
connectDB();

// 🔥 MIDDLEWARES
app.use(cors());
app.use(express.json());

// 🔥 ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/contact", contactRoutes);


app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
