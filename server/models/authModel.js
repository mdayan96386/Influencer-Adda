const { mongoose } = require("mongoose");

const authModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Enter Your Name"],
    },
    phone: {
      type: String,
      required: [true, "Please Enter Your Phone Number"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Please Enter Your Email"],
      unique: true,
    },
    password: { 
      type: String,
      required: [true, "Please Enter Your Password"] 
      },
    isAdmin: { 
      type: Boolean,
      required: true,
      default: false 
    },
  },
  { 
    timestamps: true
   }
);

module.exports = mongoose.model("auth", authModel);
