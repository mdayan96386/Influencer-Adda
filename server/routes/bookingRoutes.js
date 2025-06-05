const express = require("express");
const {
  getBookings,
  getBooking,
  addBookings,
} = require("../controllers/bookingsControllers");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", protect, getBookings);
router.post("/:id", protect, addBookings);
router.get("/:bid", protect, getBooking);

router.use("/:bid/comment", require("./commentRoutes"));

module.exports = router;
