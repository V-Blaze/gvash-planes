// authAPI.js

import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginUser, registerUser } from '../../api/authApi/auth';

export const loginThunk = createAsyncThunk('/auth/login', async (credentials, { rejectWithValue }) => {
  try {
    const response = await loginUser(credentials);

    if (response.status === 200) {
      return { user: response.data, token: response.data.token };
    }
    return rejectWithValue('UserName or Password is incorrect');
  } catch (error) {
    if (error.response.status === 401) {
      return rejectWithValue('UserName or Password is incorrect');
    }
    return rejectWithValue(error.message);
  }
});
export const registerThunk = createAsyncThunk('/auth/register', async (userData, { rejectWithValue }) => {
  try {
    const response = await registerUser(userData);
    if (response.status === 201) {
      return { user: response.data, token: response.data.token };
    }
    return rejectWithValue('Registration failed');
  } catch (error) {
    if (error.response.status === 401) {
      return rejectWithValue('UserName or Password is incorrect');
    }
    return rejectWithValue(error.message);
  }
});
