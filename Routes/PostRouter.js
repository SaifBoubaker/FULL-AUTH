const express = require("express");
const { createPost } = require("../Controllers/PostController");
const { AuthMiddleware } = require("../MiddleWares/AuthMiddleware");

const router = express.Router();

router.post("/", AuthMiddleware, createPost);

module.exports = router;
