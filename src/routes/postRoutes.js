const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");


router.get("/", postController.getPosts);
router.post("/", postController.createPost);
router.get("/search", postController.searchPosts);
router.get("/delete/:id", postController.deletePost);


router.get("/editPost/:id", postController.getEditPost);
router.post("/update/:id", postController.updatePost);



module.exports = router;