const express = require("express");
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");

const postsRoutes = require("./routes/postRoutes"); // API + HTML routes
const viewRoutes = require("./routes/viewRoutes");   // HTML pages
const errorHandler = require("./middlewares/errorHandler");

const app = express();

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());

// Static files
app.use(express.static(path.join(__dirname, '..', 'public')));

// View engine
app.set("view engine", "ejs");
app.set("views", [
    path.join(__dirname, "views", "pages"),
    path.join(__dirname, "views")
]);

// ROUTES – SỬA CHỈ 1 DÒNG NÀY!
app.use("/posts", postsRoutes);  // ← ĐÃ SỬA: từ "/api/posts" → "/posts"
app.use("/", viewRoutes);        // Trang chủ, etc.

// Error handler
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));