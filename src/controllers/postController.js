const { success, error } = require("../utils/response");
const Post = require("../models/postModel");

// CREATE - Thêm bài viết mới
exports.createPost = async (req, res) => {
    try {
        const { title, content, author, authorName } = req.body;  // ← THÊM "author"

        // DÙ FORM GỬI author HOẶC authorName ĐỀU ĐƯỢC
        const finalAuthor = author || authorName || "Khuyết danh";

        if (!title || !content) {
            return error(res, "INVALID_REQUEST", "Vui lòng nhập tiêu đề và nội dung", 400);
        }

        await Post.create({ 
            title: title.trim(), 
            content: content.trim(), 
            author: finalAuthor
        });

        return res.redirect("/posts");
    } catch (err) {
        console.error("Lỗi tạo bài viết:", err);
        return res.status(500).send("Lỗi server");
    }
};
// GET: Hiển thị form chỉnh sửa bài viết
exports.getEditPost = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await Post.getById(id);

        if (!post) {
            return res.status(404).send("Không tìm thấy bài viết");
        }

        res.render("editPost", { post });  // Truyền biến post vào view
    } catch (err) {
        console.error(err);
        res.status(500).send("Lỗi server");
    }
};

// UPDATE - Cập nhật bài viết
exports.updatePost = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content } = req.body;

        const updated = await Post.update(id, { title, content });
        if (!updated) {
            return res.status(404).send("Bài viết không tồn tại");
        }

        res.redirect("/posts");  // Quay lại danh sách sau khi cập nhật
    } catch (err) {
        console.error(err);
        res.status(500).send("Lỗi server");
    }
};

// GET ALL - Hiển thị danh sách bài viết
exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.getAll();
        res.render("posts", { posts });  // Truyền danh sách bài viết
    } catch (err) {
        console.error(err);
        res.status(500).send("Lỗi server");
    }
};

// SEARCH - Tìm kiếm bài viết
exports.searchPosts = async (req, res) => {
    try {
        const q = (req.query.q || "").trim();
        let results = [];

        if (q) {
            results = await Post.search(q);
        }

        return res.render("search", {
            title: "Tìm kiếm bài viết",
            query: q,
            posts: results,
            results: results
        });
    } catch (err) {
        console.error(err);
        return res.render("search", {
            title: "Tìm kiếm bài viết",
            query: q || "",
            posts: [],
            results: []
        });
    }
};

// DELETE - Xóa bài viết
exports.deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Post.delete(id);

        if (!deleted) {
            return error(res, "NOT_FOUND", "Bài viết không tồn tại", 404);
        }

        return res.redirect("/posts");  // Quay lại danh sách sau khi xóa
    } catch (err) {
        console.error(err);
        return res.status(500).send("Lỗi server");
    }
};
