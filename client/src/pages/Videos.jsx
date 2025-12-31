import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/videos.css";
import { FaPlayCircle } from "react-icons/fa";

export default function Video() {
  const [videos, setVideos] = useState([]);
  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/videos")
      .then((res) => setVideos(res.data))
      .catch((err) => console.log(err));
  }, []); // ✅ runs once

  return (
    <div className="videos-page">
      <h1>Latest Farming Videos</h1>

      <div className="video-grid">
        {videos.map((vid) => (
          <div
            className="video-card"
            key={vid._id}
            onClick={() => setActiveVideo(vid.videoUrl)}
          >
            <img src={vid.thumbnail} alt={vid.title} />
            <div className="play-btn">
              <FaPlayCircle />
            </div>
            <p>{vid.title}</p>
          </div>
        ))}
      </div>

      {/* VIDEO MODAL */}
      {activeVideo && (
        <div className="video-modal" onClick={() => setActiveVideo(null)}>
          <div className="video-box" onClick={(e) => e.stopPropagation()}>
            <iframe
              src={activeVideo}
              title="video"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
}
