const { success, error } = require("../utils/response");
const Post = require("../models/Post");

exports.createPost = async (req, res) => {
  try {
    const { title, content, authorId } = req.body;
    if (!title || !content || !authorId)
      return error(res, "INVALID_REQUEST", "Thiếu dữ liệu", 400);

    const newPost = await Post.create({ title, content, authorId });
    return success(res, newPost, 201);
  } catch (err) {
    return error(res, "SERVER_ERROR", err.message, 500);
  }
};

exports.updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    const updated = await Post.update(id, { title, content });
    if (!updated) return error(res, "NOT_FOUND", "Bài viết không tồn tại", 404);

    return success(res, updated, 200);
  } catch (err) {
    return error(res, "SERVER_ERROR", err.message, 500);
  }
};

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.getAll();
    return success(res, posts);
  } catch (err) {
    return error(res, "SERVER_ERROR", err.message, 500);
  }
};

exports.searchPosts = async (req, res) => {
  try {
    const q = (req.query.q || "").trim();
    if (!q) return error(res, "INVALID_QUERY", "Thiếu từ khóa q", 400);

    const results = await Post.search(q);
    return success(res, results);
  } catch (err) {
    return error(res, "SERVER_ERROR", err.message, 500);
  }
};

exports.deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Post.delete(id);
    if (!deleted) return error(res, "NOT_FOUND", "Bài viết không tồn tại", 404);

    return success(res, { deleted: 1 }, 200);
  } catch (err) {
    return error(res, "SERVER_ERROR", err.message, 500);
  }
};
