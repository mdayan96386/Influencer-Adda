const { mongoose } = require("mongoose");

const influencerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Enter Your Name"],
    },
    niche: {
      type: String,
      required: [true, "Please Enter Your niche"],
      enum: [
        "lifestyle",
        "education",
        "fashion",
        "sports",
        "technology",
        "gaming",
        "fitness",
        "podcast",
        "devotional",
        "comic",
        "food",
        "motivational",
        "other",
      ],
    },
    followers: {
      type: String,
      required: [true, "Please Enter Your follower"],
    },
    instagram_handle: {
      type: String,
      required: [true, "Please Enter Your instagram Handle"],
      unique: true,
    },
    rate: {
      type: Number,
      required: [true, "Please Enter Your Rate"],
    },
    location: {
      type: String,
      required: [true, "Please Enter Your Location"],
    },
    isActive: {
      type: Boolean,
      required: [true, "Please Enter Your Status"],
      default: true,
    },
    profilePic: {
      type: String,
      required: [true, "Please Upload Your Profile Pic"],
    },
    gender: {
      type: String,
      required: [true, "Please Enter Your Gender"],
      enum: ["male", "female", "other"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Influencer", influencerSchema);
