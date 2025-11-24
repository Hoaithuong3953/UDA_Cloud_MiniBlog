const express = require("express");
const router = express.Router();
const Post = require("../models/postModel");
// Trang chủ hiển thị danh sách bài viết
router.get("/", async (req, res) => {
    try {
        const posts = await Post.getAll();
        res.render("index", { title: "Trang chủ", posts });
    } catch (err) {
        console.error(err);
        res.status(500).send("Lỗi server");
    }
});

// Thêm bài viết
router.get("/posts/add", (req, res) => {
    res.render("addPost", { title: "Thêm bài viết" });
});
//edit
router.get("/posts/editPost/:id", async (req, res) => {
    try {
        const postId = req.params.id;
        const post = await Post.getById(postId); // tạo hàm getById trong postModel.js
        if (!post) return res.status(404).send("Bài viết không tồn tại");
        res.render("editPost", { title: "Chỉnh sửa bài viết", post, postId });
    } catch (err) {
        console.error(err);
        res.status(500).send("Lỗi server");
    }
});
router.get("/posts/delete/:id", async (req, res) => {
  try {
    const deleted = await Post.delete(req.params.id);
    if (!deleted) return res.status(404).send("Bài viết không tồn tại");
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("Lỗi server");
  }
});

// Tìm kiếm
router.get("/posts/search", async (req, res) => {
    const q = (req.query.q || "").trim();
    let results = [];
    if (q) {
        results = await Post.search(q); 
    }
    res.render("search", {
        title: "Tìm kiếm bài viết",
        query: q,
        posts: results,
        results
    });
});
module.exports = router;
