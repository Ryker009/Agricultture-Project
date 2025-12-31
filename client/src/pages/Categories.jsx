import { useNavigate } from "react-router-dom";
import "../styles/categories.css";

export default function Categories() {
  const navigate = useNavigate();

  const categories = [
    {
      title: "Machinery",
      desc: "Tractors, harvesters, modern farming machines and reviews.",
      img: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8",
      path: "/blogs?category=machines",
    },
    {
      title: "Seeds",
      desc: "Seed selection, treatment, storage and yield improvement tips.",
      img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
      path: "/blogs?category=seeds",
    },
    {
      title: "AI Tools",
      desc: "Smart farming tools powered by artificial intelligence.",
      img: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8",
      path: "/blogs?category=aitools",
    },
    {
      title: "Crop Care",
      desc: "Crop protection, fertilizers, pest control and best practices.",
      img: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8",
      path: "/blogs?category=cropcare",
    },
  ];

  return (
    <div className="categories-page">

      {/* HERO */}
      <section className="categories-hero">
        <h1>Explore Categories</h1>
        <p>
          Discover knowledge, tools, and techniques across different areas of
          modern agriculture.
        </p>
      </section>

      {/* CATEGORY GRID */}
      <section className="categories-grid">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="category-card"
            onClick={() => navigate(cat.path)}
          >
            <img src={cat.img} alt={cat.title} />
            <div className="category-overlay">
              <h2>{cat.title}</h2>
              <p>{cat.desc}</p>
              <button>Explore</button>
            </div>
          </div>
        ))}
      </section>

    </div>
  );
}
