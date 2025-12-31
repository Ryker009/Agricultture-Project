import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  try {
    // 1️⃣ Get token from header
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];

    // 2️⃣ Verify token
    const decoded = jwt.verify(token, "SECRET_KEY");

    // 3️⃣ Attach user to request
    req.user = decoded;

    next();
  } catch (error) {
    console.error("AUTH MIDDLEWARE ERROR:", error);
    res.status(401).json({ message: "Invalid or expired token" });
  }
};

export default authMiddleware;
