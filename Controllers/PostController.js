const Post = require("../Models/Post");

const createPost = async (req, res) => {
  const { id } = req.user;
  const { title } = req.body;
  try {
    const newPost = await Post.create({
      title,
      user: id,
    });
    res.status(200).json(newPost);
  } catch (error) {
    res.json(error);
  }
};

module.exports = { createPost };
