import mongoose from "mongoose";

const videoSchema = new mongoose.Schema(
  {
    title: String,
    videoUrl: String,
    thumbnail: String,
  },
  {
    timestamps: true // 🔥 adds createdAt & updatedAt
  }
);

export default mongoose.model("Video", videoSchema);
