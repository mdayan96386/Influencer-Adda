const expressAsyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Auth = require("../models/authModel");

const registerUser = expressAsyncHandler(async (req, res) => {
  // check if all fields are filled
  const { name, email, phone, password } = req.body;

  if (!name || !email || !phone || !password) {
    res.status(400);
    throw new Error("Please Fill All Details");
  }

  // Check is user already exists
  const emailExist = await Auth.findOne({ email: email });
  const phoneExist = await Auth.findOne({ phone: phone });

  if (emailExist || phoneExist) {
    res.status(400);
    throw new Error("User already Exist");
  }

  // Ayan Password
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  // Save User
  const user = await Auth.create({
    name,
    email,
    phone,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
      memberSince: user.createdAt,
    });
  } else {
    res.status(400);
    throw new Error("User Cannot Be Registered!");
  }
});

const loginUser = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Please Fill All Details!");
  }

  // email exists
  const user = await Auth.findOne({ email });

  // check is email and password is correct
  if (user && bcrypt.compareSync(password, user.password)) {
    res.status(200).json({
      id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
      memberSince: user.createdAt,
    });
  } else {
    res.status(401);
    throw new Error("Invalid Credentials!");
  }
});

const privateController = async (req, res) => {
  res.json({
    id: req.user._id,
    name: req.user.name,
    email: req.user.email,
    phone: req.user.phone,
    isAdmin: req.user.isAdmin,
  });
};

// Generate Token
const generateToken = (id) => {
  let token = jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });

  return token;
};

module.exports = {
  registerUser,
  loginUser,
  privateController,
};
