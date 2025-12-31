import "../styles/about.css";

export default function About() {
  return (
    <div className="about-page">
      {/* HERO BANNER */}
      <section className="about-hero">
        <div className="about-hero-overlay">
          <h1 style={{ fontSize: "60px" }}>About AgriFather</h1>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="about-section">
        <div className="about-text">
          <h2 style={{ fontSize: "40px" }}>Who We Are</h2>
          <p>
            AgriFather is a modern digital agriculture platform built to empower
            farmers with reliable knowledge, advanced technology, and smart
            farming solutions. We aim to simplify agriculture by combining
            traditional farming wisdom with modern innovations.
          </p>
          <p>
            Our platform provides curated blogs, expert insights, machinery
            guides, AI-based tools, and educational videos to help farmers make
            informed decisions.
          </p>
        </div>

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
            alt="Farming field"
          />
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="about-section reverse">
        <div className="about-text">
          <h2 style={{ fontSize: "40px" }}>Our Mission & Vision</h2>
          <p>
            Our mission is to bridge the gap between farmers and technology by
            providing accessible, practical, and actionable agricultural
            knowledge.
          </p>
          <ul>
            <li>✔ Promote sustainable farming practices</li>
            <li>✔ Encourage smart and AI-driven agriculture</li>
            <li>✔ Support farmers with trusted information</li>
          </ul>
        </div>

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
            alt="Mission farming"
          />
        </div>
      </section>

      {/* GLOBAL FARMERS */}
      {/* <section className="about-global">
        <h2 style={{ fontSize: "60px" }}>Connecting Global Farmers</h2>
        <p>
          AgriFather connects farmers across regions, enabling knowledge
          sharing, innovation, and collaboration to build a stronger global
          agricultural community.
        </p>

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
          alt="Global map"
        />
      </section> */}

      <section className="about-global">
        <div className="about-overlay">
          <h2>Connecting Global Farmers</h2>
          <p>
            AgriFather connects farmers across regions, enabling knowledge
            sharing, innovation, and collaboration to build a stronger global
            agricultural community.
          </p>
        </div>
      </section>
    </div>
  );
}
