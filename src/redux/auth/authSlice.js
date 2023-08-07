import { logIn, logOut, refreshUser, register } from './operations';

import { createSlice } from '@reduxjs/toolkit';

const handlerAuthFulfilled = (state, action) => {
  const { user, token } = action.payload;
  state.user = user;
  state.token = token;
  state.isLoggedIn = true;
  state.error = null;
};

const handleLogOutFulfilled = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
  state.error = null;
};

const handleRefreshPending = state => {
  state.isRefreshing = true;
};

const handleRefreshFulfilled = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
  state.error = null;
};

const handleRefreshRejected = (state, action) => {
  state.isRefreshing = false;
  state.error = action.payload;
};

const handleError = (state, action) => {
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    error: null,
  },

  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, handlerAuthFulfilled)
      .addCase(register.rejected, handleError)
      .addCase(logIn.fulfilled, handlerAuthFulfilled)
      .addCase(logIn.rejected, handleError)
      .addCase(logOut.fulfilled, handleLogOutFulfilled)
      .addCase(refreshUser.pending, handleRefreshPending)
      .addCase(refreshUser.fulfilled, handleRefreshFulfilled)
      .addCase(refreshUser.rejected, handleRefreshRejected),
});

export const authReducer = authSlice.reducer;
