const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const postsRoutes = require("./routes/postRoutes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());

app.use("/api/posts", postsRoutes);

// Middleware xử lý lỗi
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
