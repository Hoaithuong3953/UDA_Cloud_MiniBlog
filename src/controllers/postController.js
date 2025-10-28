const { success, error } = require("../utils/response");

// Fake DB tạm
let posts = [];

// ✅ Task của Print 1 - Create Post
exports.createPost = (req, res) => {
  const { title, content, authorId } = req.body;
  if (!title || !content || !authorId) {
    return error(res, "INVALID_REQUEST", "Thiếu dữ liệu", 400);
  }

  const newPost = {
    id: `post_${Date.now()}`,
    title,
    content,
    authorId,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  posts.push(newPost);
  return success(res, newPost, 201);
};

// ✅ Task của Print 1 - Update Post
exports.updatePost = (req, res) => {
  const { id } = req.params;
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return error(res, "NOT_FOUND", "Bài viết không tồn tại", 404);
  }

  const { title, content } = req.body;
  post.title = title || post.title;
  post.content = content || post.content;
  post.updatedAt = new Date().toISOString();

  return success(res, post, 200);
};

exports.getPosts = (req, res) => {
  return success(res, posts, 200);
};

// ✅ Task của Print 2 - Search Post
exports.searchPosts = (req, res) => {
  const q = (req.query.q || "").trim().toLowerCase();
  if (!q) {
    return error(res, "INVALID_QUERY", "Thiếu từ khóa q", 400);
  }

  const results = posts
    .filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.content.toLowerCase().includes(q)
    )
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 50);

  return success(res, results, 200);
};

// ✅ Task của Print 2 - Delete Post
exports.deletePost = (req, res) => {
  const { id } = req.params;
  const index = posts.findIndex((p) => p.id === id);

  if (index === -1) {
    return error(res, "NOT_FOUND", "Bài viết không tồn tại", 404);
  }

  posts.splice(index, 1);
  return success(res, { deleted: 1 }, 200);
};
