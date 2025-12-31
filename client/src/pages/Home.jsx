import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/home.css";

import { FaPlayCircle } from "react-icons/fa";

export default function Home() {
  const navigate = useNavigate();
  const [videoUrl, setVideoUrl] = useState(null);
  const [latestVideos, setLatestVideos] = useState([]);
  const [trendingBlogs, setTrendingBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/blogs?trending=true")
      .then((res) => setTrendingBlogs(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/videos")
      .then((res) => {
        // take only latest 3 videos
        setLatestVideos(res.data.slice(0, 3));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>
              Empowering Farmers <br />
              <span>with Knowledge & Technology</span>
            </h1>

            <div className="hero-actions">
              <button onClick={() => navigate("/blogs")}>Explore Blogs</button>
              <button onClick={() => navigate("/videos")}>Watch Videos</button>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="categories">
        {[
          { title: "Crop Care", img: "/images/crop.webp" },
          { title: "Machines", img: "/images/machine.webp" },
          { title: "Seeds", img: "/images/seed.webp" },
          { title: "AI Tools", img: "/images/ai.webp" },
          { title: "Fertilizers", img: "/images/fertilizers.webp" },
        ].map((cat) => (
          <div key={cat.title} className="category-card">
            <div className="imgBox" onClick={() => navigate("/categories")}>
              <img src={cat.img} alt={cat.title} />
            </div>
            <p>{cat.title}</p>
          </div>
        ))}
      </section>

      {/* TRENDING BLOGS */}
      <section className="blogs">
        <h2 style={{ fontSize: "40px", marginBottom: "20px" }}>
          Trending Blogs
        </h2>

        <div className="blog-grid">
          {trendingBlogs.map((blog) => (
            <BlogCard
              key={blog._id}
              title={blog.title}
              desc={blog.content.slice(0, 100) + "..."}
              img={blog.thumbnail}
              onClick={() => navigate(`/blogs/${blog._id}`)}
            />
          ))}
        </div>
      </section>

      {/* VIDEOS */}
      <section className="videos">
        <h2 style={{ fontSize: "40px", marginBottom: "20px" }}>
          Latest Videos
        </h2>

        <div className="video-grid">
          {latestVideos.map((video) => (
            <VideoCard
              key={video._id}
              img={video.thumbnail}
              onClick={() => setVideoUrl(video.videoUrl)}
            />
          ))}
        </div>
      </section>

      {/* VIDEO MODAL */}
      {videoUrl && (
        <div className="video-modal" onClick={() => setVideoUrl(null)}>
          <div className="video-box" onClick={(e) => e.stopPropagation()}>
            <iframe src={videoUrl} title="video" allowFullScreen></iframe>
          </div>
        </div>
      )}

    </div>
  );
}

/* SMALL COMPONENTS */
function BlogCard({ title, desc, img, onClick }) {
  return (
    <div className="blog-card" onClick={onClick}>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{desc}</p>
      <span>Read More →</span>
    </div>
  );
}

function VideoCard({ img, onClick }) {
  return (
    <div className="video-card" onClick={onClick}>
      <img src={img} alt="video" />
      <div className="play-btn">
        <FaPlayCircle />
      </div>
    </div>
  );
}
