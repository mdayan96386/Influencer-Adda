const expressAsyncHandler = require("express-async-handler");
const Influencer = require("../models/influencerModel");
const Booking = require("../models/bookingModel");
const User = require("../models/authModel");
const Comment = require("../models/commentModel");

const createInfluencer = expressAsyncHandler(async (req, res) => {
  // Check if all fields are filled
  const {
    name,
    niche,
    followers,
    instagram_handle,
    rate,
    location,
    profilePic,
    gender,
  } = req.body;

  if (
    !name ||
    !niche ||
    !followers ||
    !instagram_handle ||
    !rate ||
    !location ||
    !profilePic ||
    !gender
  ) {
    res.status(400);
    throw new Error("Please Fill All Details");
  }

  //  Check if influencer Already Exists
  const influencerExist = await Influencer.findOne({ instagram_handle });

  if (influencerExist) {
    res.status(400);
    throw new Error("Influencer Already Exists");
  }

  // Create influencer
  const newInfluencer = await Influencer.create({
    name,
    niche,
    followers,
    instagram_handle,
    rate,
    location,
    profilePic,
    gender,
  });

  if (!newInfluencer) {
    res.status(400);
    throw new Error("Influencer Not Created");
  }

  res.status(201).json(newInfluencer);
});

const updateInfluencer = expressAsyncHandler(async (req, res) => {
  const updatedInfluencer = await Influencer.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  if (!updatedInfluencer) {
    res.status(400);
    throw new Error("Influencer Not Updated!");
  }

  res.status(200).json(updatedInfluencer);
});

const removeInfluencer = expressAsyncHandler(async (req, res) => {
  await Influencer.findByIdAndDelete(req.params.id);

  res.status(200).json({
    id: req.params.id,
    msg: "Influencer Removed!!",
  });
});

const getAllBookings = expressAsyncHandler(async (req, res) => {
  const allBookings = await Booking.find()
    .populate("user")
    .populate("influencer");

  if (!allBookings) {
    res.status(400);
    throw new Error("No Booking Found!");
  }
  res.status(200).json(allBookings);
});

const UpdateBooking = expressAsyncHandler(async (req, res) => {
  const updatedBooking = await Booking.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  )
    .populate("user")
    .populate("influencer");
    

  if (req.body.status === "rejected"){
    // Update Influencer Status
    console.log(req.body.status)
    await Influencer.findByIdAndUpdate(updatedBooking.influencer._id, {isActive:  true })
  }

    if (!updatedBooking) {
      res.status(400);
      throw new Error("Booking Not Updated");
    }
  res.status(200).json(updatedBooking);
});

const getAllUsers = expressAsyncHandler(async (req, res) => {
  const users = await User.find().select("-password");
  if (!users) {
    res.status(400);
    throw new Error("Users Not Found!");
  }
  res.status(200).json(users);
});

const getAllComments = expressAsyncHandler(async (req, res) => {
  const comments = await Comment.find().populate("user").populate("booking");

  if (!comments) {
    res.status(400);
    throw new Error("Comment Not Found!");
  }
  res.status(200).json(comments);
});

module.exports = {
  createInfluencer,
  updateInfluencer,
  removeInfluencer,
  getAllBookings,
  UpdateBooking,
  getAllUsers,
  getAllComments,
};
