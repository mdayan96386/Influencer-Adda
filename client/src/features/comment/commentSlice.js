import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import commentService from "./commentService";

const commentSlice = createSlice({
  name: "comment",
  initialState: {
    comments: [],
    commentLoading: false,
    commentSuccess: false,
    commentError: false,
    commentMessage: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getComments.pending, (state, action) => {
        state.commentLoading = true;
        state.commentSuccess = false;
        state.commentError = false;
      })
      .addCase(getComments.fulfilled, (state, action) => {
        state.commentLoading = false;
        state.commentSuccess = true;
        state.comments = action.payload;
        state.commentError = false;
      })
      .addCase(getComments.rejected, (state, action) => {
        state.commentLoading = false;
        state.commentSuccess = false;
        state.commentError = true;
        state.commentMessage = action.payload;
      })
      .addCase(addComment.pending, (state, action) => {
        state.commentLoading = true;
        state.commentSuccess = false;
        state.commentError = false;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.commentLoading = false;
        state.commentSuccess = true;
        state.comments = [action.payload, ...state.comments];
        state.commentError = false;
      })
      .addCase(addComment.rejected, (state, action) => {
        state.commentLoading = false;
        state.commentSuccess = false;
        state.commentError = true;
        state.commentMessage = action.payload;
      });
  },
});

export default commentSlice.reducer;

// Get Comments
export const getComments = createAsyncThunk(
  "FETCH/COMMENTS",
  async (id, thunkApi) => {
    let token = thunkApi.getState().auth.user.token;

    try {
      return await commentService.fetchComments(id, token);
    } catch (error) {
      const message = error.response.data.message;
      return thunkApi.rejectWithValue(message);
    }
  }
);

// Add Comments
export const addComment = createAsyncThunk(
  "ADD/COMMENT",
  async (formData, thunkApi) => {
    let token = thunkApi.getState().auth.user.token;

    try {
      return await commentService.createComment(formData, token);
    } catch (error) {
      const message = error.response.data.message;
      return thunkApi.rejectWithValue(message);
    }
  }
);
