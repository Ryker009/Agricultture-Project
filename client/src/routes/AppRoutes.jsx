import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Blogs from "../pages/Blogs";
import BlogSingle from "../pages/BlogSingle";
import Videos from "../pages/Videos";
import Categories from "../pages/Categories";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Privacy from "../pages/Privacy";
import Terms from "../pages/Terms";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blogs/:id" element={<BlogSingle />} />
      <Route path="/videos" element={<Videos />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/privacy-policy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
    </Routes>
  );
}
