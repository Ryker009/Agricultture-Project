import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/blogs.css";
import { AiOutlineSearch } from "react-icons/ai";

export default function Blogs() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [blogs, setBlogs] = useState([]);
  const [trendingBlogs, setTrendingBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let url = "http://localhost:5000/api/blogs";

    if (filter !== "All") {
      url = `http://localhost:5000/api/blogs?category=${filter}`;
    }

    axios
      .get(url)
      .then((res) => setBlogs(res.data))
      .catch((err) => console.log(err));
  }, [filter]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/blogs?trending=true")
      .then((res) => setTrendingBlogs(res.data))
      .catch((err) => console.log(err));
  }, []);

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="blogs-page">
      {/* PAGE TITLE */}
      <div className="blogs-hero">
        <h1>Blog Listing</h1>
      </div>

      <div className="blogs-container">
        {/* LEFT CONTENT */}
        <div className="blogs-main">
          {/* FILTER BAR */}
          <div className="filter-bar">
            {["All", "Machines", "Crop Care", "AI Tools"].map((cat) => (
              <button
                key={cat}
                className={filter === cat ? "active" : ""}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* BLOG LIST */}
          {filteredBlogs.map((blog) => (
            <div
              key={blog._id}
              className="blog-row"
              onClick={() => navigate(`/blogs/${blog._id}`)}
            >
              <img src={blog.thumbnail} alt={blog.title} />
              <div className="blog-info">
                <h3>{blog.title}</h3>
                <p>{blog.content.slice(0, 120)}...</p>
                <div className="blog-meta">
                  <span>{blog.author}</span>
                  <button>Read More</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="blogs-sidebar">
          {/* SEARCH */}
          <div className="sidebar-box">
            <h3>Search</h3>
            <div className="search-box">
              <input
                placeholder="Search blog..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button>
                <AiOutlineSearch />
              </button>
            </div>
          </div>

          {/* BLOG THE PAGE */}
          <h2>Trending Blogs</h2>
          {trendingBlogs.map((blog) => (
            <div key={blog._id}>
              <h3>{blog.title}</h3>
            </div>
          ))}

          {/* DIG THE PAGE */}
          {/* <div className="sidebar-box">
            <h3>Dig the Page</h3>
            <SmallBlog title="Seed to Harvest" />
            <SmallBlog title="How AI Helps" />
          </div> */}
        </aside>
      </div>
    </div>
  );
}

function SmallBlog({ title }) {
  return (
    <div className="small-blog">
      <img
        src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
        alt=""
      />
      <p>{title}</p>
    </div>
  );
}
