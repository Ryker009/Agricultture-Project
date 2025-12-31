# 🌱 AgriFather

AgriFather is a full-stack agriculture knowledge-sharing web platform designed to empower farmers with modern farming techniques, tools, and technology-driven insights. The platform provides blogs, videos, and category-based content with a clean, responsive, and user-friendly interface.

---

## 🚀 Features

- 🔐 **User Authentication**
  - Secure login & registration using JWT
  - Password hashing with bcrypt
  - Authentication-aware navbar (Login / Logout)

- 📰 **Blogs Module**
  - Blog listing with search and category filters
  - Individual blog detail pages
  - Clean, readable content layout

- 🎥 **Videos Module**
  - Category-based video exploration
  - YouTube video integration with popup modal
  - Separate video categories (Machinery, Seeds, AI Tools, Crop Care)

- 🧭 **Categories**
  - Central hub to explore agriculture topics
  - Easy navigation to relevant blogs and videos

- 📱 **Responsive UI**
  - Modern fixed navbar with hamburger menu
  - Mobile-first responsive design
  - Smooth hover effects and transitions

- 🛡️ **Backend Architecture**
  - RESTful APIs built with Express.js
  - MongoDB database using Mongoose
  - Middleware-based route protection

---

## 🛠️ Tech Stack

### Frontend
- React.js (Vite)
- React Router DOM
- Context API (Authentication state)
- Plain CSS (Responsive & modern UI)

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (Authentication)
- bcryptjs (Password hashing)

---

## 📂 Project Structure

```txt
agrifather/
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── styles/
│   │   └── main.jsx
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
│
└── README.md
