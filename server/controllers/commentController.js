const expressAsyncHandler = require("express-async-handler");
const Comment = require("../models/commentModel");

const getComments = expressAsyncHandler(async (req, res) => {
  const comments = await Comment.find({ booking: req.params.bid }).populate('user');

  if (!comments) {
    res.status(400);
    throw new Error("No Comments Found");
  }

  res.status(200).json(comments);
});

const addComment = expressAsyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please Enter Your Comment");
  }

  const comment = await Comment.create({
    user: req.user._id,
    booking: req.params.bid,
    text: req.body.text,
  });

  if (!comment) {
    res.status(400);
    throw new Error("Comment Not Created");
  }

  const newComment = await Comment.findById(comment._id).populate("user").populate("booking");

  res.status(201).json(newComment);
});

module.exports = { getComments, addComment };
