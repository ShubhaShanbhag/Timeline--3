const express = require("express");
const route = express.Router();
const postController = require("../controller/postController");
const commentController = require("../controller/commentController");

route.get("/", postController.getMainPage);
route.post("/", postController.createPost);
route.post("/posts/:postId/create-comment", commentController.createComment);
route.get("/posts/:postId", postController.deletePost);
route.get("/posts/:postId/update-post", postController.updatedPage);
route.post("/post/:postId/edit-post", postController.editPost);

module.exports = route;