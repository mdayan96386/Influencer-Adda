const expressAsyncHandler = require("express-async-handler");
const Booking = require("../models/bookingModel");
const Influencer = require("../models/influencerModel");
const User = require("../models/authModel");

const getBookings = expressAsyncHandler(async (req, res) => {
  const myBookings = await Booking.find({ user: req.user._id }).populate('influencer');

  if (!myBookings) {
    res.status(404);
    throw new Error("Influencer Not Exist!");
  }
  res.status(200).json(myBookings);
});

const getBooking = expressAsyncHandler(async (req, res) => {
  const myBooking = await Booking.findById(req.params.bid).populate('influencer');

  if (!myBooking) {
    res.status(404);
    throw new Error("Influencer Not Exist!");
  }
  res.status(200).json(myBooking);
});

const addBookings = expressAsyncHandler(async (req, res) => {
  // Find if influencer exists
  const influencer = await Influencer.findById(req.params.id);

  if (!influencer) {
    res.status(404);
    throw new Error("Influencer Not Exists!");
  }

  // // Check if influencer is already Booked by user
  // const alreadyBooked = await Booking.findOne({ influencer: req.params.id });

  // if (alreadyBooked) {
  //   res.status(404);
  //   throw new Error("Booking Already Exist");
  // }

  // Update Influencer
  await Influencer.findByIdAndUpdate(
    influencer._id,
    { isActive: false },
    { new: true }
  );

  // Create Booking
  const newBooking = await Booking.create({
    user: req.user._id,
    influencer: influencer._id,
    status: "pending",
  });

  if (!newBooking) {
    res.status(400);
    throw new Error("Booking Not Created");
  }
  res.status(201).json(newBooking);
});

module.exports = { getBooking, getBookings, addBookings };
