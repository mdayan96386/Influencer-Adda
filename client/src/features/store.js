import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth/authSlice";
import influencer from "./influencers/influencerSlice";
import booking from "./bookings/bookingSlice"
import admin from "./admin/adminSlice"
import comment from "./comment/commentSlice"

const store = configureStore({
  reducer: { auth, influencer, booking, admin, comment },
});

export default store;
