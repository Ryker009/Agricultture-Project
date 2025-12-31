import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

/* SEND CONTACT MESSAGE */
router.post("/", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject|| !message) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // 🔥 EMAIL VALIDATION
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        message: "Invalid email address",
      });
    }

    const contact = new Contact({
      name,
      email,
      subject,
      message,
    });

    await contact.save();

    res.status(201).json({
      message: "Message sent successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: "Failed to send message",
    });
  }
});

export default router;
