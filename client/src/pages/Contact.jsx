import "../styles/contacts.css";
import { useState } from "react";
import axios from "axios";

import {
  FiUser,
  FiMail,
  FiMessageSquare,
  FiGlobe,
  FiPhone,
} from "react-icons/fi";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const emailRegex =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = async () => {
    if (!name || !email || !subject || !message) {
      alert("Please fill all fields");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/contact", {
        name,
        email,
        subject,
        message,
      });

      setSuccess("Message sent successfully!");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err) {
      alert("Failed to send message");
    }
  };

  return (
    <div className="contact-page">
      {/* HERO */}
      <div className="contact-hero"></div>

      {/* CONTACT CARD */}
      <div className="contact-wrapper">
        {/* LEFT INFO */}
        <div className="contact-info">
          <h1 style={{ marginBottom: "20px", color: "darkGreen" }}>
            Contact Page
          </h1>
          <ul>
            <li>
              <span>
                <FiUser />
              </span>
              <p>Your Name</p>
            </li>
            <li>
              <span>
                <FiMail />
              </span>
              <p>Your Email</p>
            </li>
            <li>
              <span>
                <FiMessageSquare />
              </span>
              <p>Enter feedback or errors</p>
            </li>
            <li>
              <span>
                <FiGlobe />
              </span>
              <p>Standard Site System</p>
            </li>
            <li>
              <span>
                <FiPhone />
              </span>
              <p>Your Details</p>
            </li>
          </ul>

          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noreferrer"
            className="whatsapp-btn"
          >
            WhatsApp Us
          </a>
        </div>

        {/* RIGHT FORM */}
        <div className="contact-form">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />

          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button className="send-btn" onClick={handleSubmit}>
            Send Message
          </button>
          {success && (
            <p style={{ color: "green", marginTop: "10px" }}>{success}</p>
          )}
        </div>
      </div>
    </div>
  );
}
