import { createSlice } from "@reduxjs/toolkit";
import {
  getUserDetails,
  registerUser,
  userLogin,
  contactUs,
} from "./userActions";
import TokenService from "../../../services/token.service";
// initialize userToken from local storage

const userToken = TokenService.getLocalAccessToken() || null;
const userInfo = TokenService.getUser() || null;

const initialState = {
  loading: false,
  userInfo,
  userToken,
  error: null,
  success: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      TokenService.removeUser(); // delete token from storage
      state.loading = false;
      state.userInfo = null;
      state.userToken = null;
      state.error = null;
    },
  },
  extraReducers: {
    // login user
    [userLogin.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload;
      state.userToken = payload.userToken;
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    // register user
    [registerUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true; // registration successful
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    // get user details
    [getUserDetails.pending]: (state) => {
      state.loading = true;
    },
    [getUserDetails.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload;
    },
    [getUserDetails.rejected]: (state, { payload }) => {
      state.loading = false;
    },
    //contactUs
    [contactUs.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [contactUs.fulfilled]: (state, { payload }) => {
      state.loading = false;
    },
    [contactUs.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { logout } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
