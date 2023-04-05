/* eslint-disable max-len */
// authSlice.js
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { createSlice } from '@reduxjs/toolkit';
import {
  loginThunk, registerThunk,
} from './authAPI';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['isLoggedIn', 'token'],
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    user: null,
    error: null,
    token: null,
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(loginThunk.fulfilled, (state, action) => ({
      ...state, isLoggedIn: true, user: action.payload.user, token: action.payload.token,
    }));
    builder.addCase(loginThunk.rejected, (state, action) => ({ ...state, error: action.payload }));
    builder.addCase(registerThunk.fulfilled, (state, action) => ({ ...state, isLoggedIn: true, user: action.payload.user })); // we will not use token here
    builder.addCase(registerThunk.rejected, (state, action) => ({ ...state, error: action.payload }));
  },
});
// if needed to export thunk

export { loginThunk, registerThunk };

const persistedAuthReducer = persistReducer(authPersistConfig, authSlice.reducer);

export default persistedAuthReducer;
