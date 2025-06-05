const jwt = require("jsonwebtoken");
const Auth = require("../models/authModel");
const asyncHandler = require("express-async-handler");

const adminProtect = asyncHandler(async (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    let token;

    try {
      token = req.headers.authorization.split(" ")[1];
      let decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await Auth.findById(decoded.id).select("-password");
      if (req.user.isAdmin) {
        next();
      } else {
        res.status(401);
        throw new Error("Only Admins Have Access");
      }
    } catch (error) {
      res.status(401);
      throw new Error(`Invalid Token : Access Denied`);
    }
  } else {
    res.status(401);
    throw new Error(`Invalid Token : Access Denied`);
  }
});

module.exports = adminProtect;
