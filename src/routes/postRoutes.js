const express = require("express");
const router = express.Router();
const {
  createPost,
  updatePost,
  getPosts,
  searchPosts,
  deletePost,
} = require("../controllers/postsController");

router.post("/", createPost);
router.put("/:id", updatePost);
router.get("/", getPosts);
router.get("/search", searchPosts);
router.delete("/:id", deletePost);

module.exports = router;