 const Post = require('../model/postModel')
 const Comment = require ('../model/commentModel')



const getMainPage = async (req, res) => {
    try {
      const posts = await Post.find({})
        .populate("comments", "comment")
        .sort({ create_at: -1 });
      res.render("index", { posts });
    } catch (error) {
      console.error(error);
      res.status(500).send(" Error");
    }
  };
  
  const createPost = async (req, res) => {
    try {
      if (req.body.post.length > 25) {
        const post = new Post(req.body);
        await post.save();
        res.redirect("/");
      } else {
        const posts = await Post.find({}).sort({ create_at: -1 });
        res.render("index", {
          posts,
          err: "Should be longer than 25 characters",
        });
      }
    } catch (err) {
      console.error(err);
    }
  };
  
  const deletePost = async (req, res) => {
    const { postId } = req.params;
    await Post.findByIdAndDelete(postId);
    res.redirect("/");
  };
  
  const updatedPage = async (req, res) => {
    const { postId } = req.params;
    const post = await Post.findById(postId);
    res.render("comment", { post });
  };
  
  const editPost = async (req, res) => {
    const { postId } = req.params;
    await Post.findByIdAndUpdate(postId, req.body);
    res.redirect("/");
  };
  
  module.exports = {
    getMainPage,
    createPost,
    deletePost,
    updatedPage,
    editPost
  };