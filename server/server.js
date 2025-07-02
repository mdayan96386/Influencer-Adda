const express = require("express");
const colors = require("colors");
const connectDB = require("./config/db_config");
const path = require("path");
const errorHandler = require("./middleware/errorHandler");
require("dotenv").config();
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());



// Data base connected
connectDB();

// Body-Parse
   app.get("/", (req, res) => {
    res.send("Influencer Adda API is running....");
  })

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Auth Routes
app.use("/api/auth", require("./routes/authRoute"));

// Admin Routes
app.use("/api/admin", require("./routes/adminRoutes"));

// Booking Routes
app.use("/api/booking", require("./routes/bookingRoutes"));

// Influencer Routes
app.use("/api/influencers", require("./routes/influencerRoutes"));

// Comments Routes
app.use("/api/comments", require("./routes/commentRoutes"));

// if (process.env.NODE_ENV === "production") {
//   const __dirname = path.resolve();
//   app.use(express.static(path.join(__dirname, "/client/dist")));
//   app.get("*", (req, res) =>
//     res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"))
//   );
// } else {
//   const __dirname = path.resolve();
//   app.get("/", (req, res) => {
//     res.send("Influencer Adda API is running....");
//   });
// }

// Error Handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING AT PORT ${PORT}`.bgBlue.black);
});
