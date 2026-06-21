const Post = require("../models/Post");

const createPost = async (req, res) => {
  try {
    const { text } = req.body;

    const post = await Post.create({
      text,
      author: req.user,
    });

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("author", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const deletePost = async (
  req,
  res
) => {
  try {
    const post =
      await Post.findById(
        req.params.id
      );

    if (!post) {
      return res
        .status(404)
        .json({
          message:
            "Post not found",
        });
    }

    if (
        post.author.toString() !==
        req.user.toString()
    ) {
    return res.status(401).json({
      message:
        "Not authorized to delete this post",
    });
    }

    await Post.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      message:
        "Post deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message:
        error.message,
    });
  }
};

module.exports = {
  createPost,
  getPosts,
  deletePost,
};