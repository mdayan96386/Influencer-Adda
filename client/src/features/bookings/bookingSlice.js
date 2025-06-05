import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import bookingService from "./bookingService";

const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    booking: null,
    bookings: [],
    bookingsLoading: false,
    bookingSuccess: false,
    bookingError: false,
    bookingMessage: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsersBookings.pending, (state, action) => {
        state.bookingsLoading = true;
        state.bookingSuccess = false;
        state.bookingError = false;
      })
      .addCase(getUsersBookings.fulfilled, (state, action) => {
        state.bookingsLoading = false;
        state.bookingSuccess = true;
        state.bookings = action.payload;
        state.bookingError = false;
      })
      .addCase(getUsersBookings.rejected, (state, action) => {
        state.bookingsLoading = false;
        state.bookingSuccess = false;
        state.bookingError = true;
        state.bookingMessage = action.payload;
      })
      .addCase(getUsersBooking.pending, (state, action) => {
        state.bookingsLoading = true;
        state.bookingSuccess = false;
        state.bookingError = false;
      })
      .addCase(getUsersBooking.fulfilled, (state, action) => {
        state.bookingsLoading = false;
        state.bookingSuccess = true;
        state.booking = action.payload;
        state.bookingError = false;
      })
      .addCase(getUsersBooking.rejected, (state, action) => {
        state.bookingsLoading = false;
        state.bookingSuccess = false;
        state.bookingError = true;
        state.bookingMessage = action.payload;
      })
      .addCase(addBooking.pending, (state, action) => {
        state.bookingsLoading = true;
        state.bookingSuccess = false;
        state.bookingError = false;
      })
      .addCase(addBooking.fulfilled, (state, action) => {
        state.bookingsLoading = false;
        state.bookingSuccess = true;
        state.bookings = [action.payload, ...state.bookings];
        state.booking = action.payload;
        state.bookingError = false;
      })
      .addCase(addBooking.rejected, (state, action) => {
        state.bookingsLoading = false;
        state.bookingSuccess = false;
        state.bookingError = true;
        state.bookingMessage = action.payload;
      });
  },
});

export default bookingSlice.reducer;

// Get All users booking
export const getUsersBookings = createAsyncThunk(
  "BOOKING/FETCH",
  async (_, thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token;

    try {
      return await bookingService.fetchUserBookings(token);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get All users booking
export const getUsersBooking = createAsyncThunk(
  "BOOKING/FETCH/ID",
  async (id, thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token;

    try {
      return await bookingService.fetchUserBooking(id, token);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Add Booking
export const addBooking = createAsyncThunk(
  "ADD/BOOKING",
  async (id, thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token;

    try {
      return await bookingService.requestBooking(id, token);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);
