import axios from "axios";
import "../styles/blogSingle.css";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import { FiShare2, FiCopy } from "react-icons/fi";
import { FaWhatsapp, FaTwitter } from "react-icons/fa";

export default function BlogSingle() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [blog, setBlog] = useState(null);
  const [comments, setComments] = useState([]);
  const [message, setMessage] = useState("");

  const blogUrl = window.location.href;

  const copyLink = () => {
    navigator.clipboard.writeText(blogUrl);
    alert("Link copied to clipboard!");
  };

  /* FETCH BLOG */
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/blogs/${id}`)
      .then((res) => setBlog(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  /* FETCH COMMENTS */
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/comments/${id}`)
      .then((res) => setComments(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  /* ADD COMMENT */
  const handleComment = async () => {
    if (!message) return;

    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login to comment");
      return;
    }

    await axios.post(
      "http://localhost:5000/api/comments",
      {
        blogId: id,
        message,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setMessage("");

    const res = await axios.get(`http://localhost:5000/api/comments/${id}`);
    setComments(res.data);
  };

  if (!blog) return <p>Loading...</p>;

  return (
    <div className="blog-single">
      <button className="back-btn" onClick={() => navigate(-1)}>
        <FiArrowLeft />
        <span>Back</span>
      </button>
      <h2>{blog.title}</h2>

      

      <div className="blog-content">{blog.content}</div>

      <hr className="blog-divider" />

      <div className="share-box">
        <span className="share-label">
          <FiShare2 /> Share:
        </span>

        <a
          href={`https://wa.me/?text=${encodeURIComponent(blogUrl)}`}
          target="_blank"
          rel="noreferrer"
          className="share-btn whatsapp"
        >
          <FaWhatsapp />
        </a>

        <a
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
            blogUrl
          )}&text=${encodeURIComponent(blog.title)}`}
          target="_blank"
          rel="noreferrer"
          className="share-btn twitter"
        >
          <FaTwitter />
        </a>

        <button className="share-btn copy" onClick={copyLink}>
          <FiCopy />
        </button>
      </div>

      <hr className="blog-divider" />

      <div className="comments">
        <h3>Comments</h3>

        {comments.map((c) => (
          <div key={c._id} className="comment">
            <strong>{c.userId?.name}</strong>
            <p>{c.message}</p>
          </div>
        ))}

        {localStorage.getItem("token") ? (
          <div className="comment-form">
            <textarea
              placeholder="Write a comment"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={handleComment}>Post Comment</button>
          </div>
        ) : (
          <p style={{ color: "#777" }}>Please login to add a comment.</p>
        )}
      </div>
    </div>
  );
}
