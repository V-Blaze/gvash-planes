import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPlanes, createPlane, getPlane } from '../../api/planeApi/plane';

export const planesThunk = createAsyncThunk('/planes', async (token, { rejectWithValue }) => {
  try {
    const response = await getPlanes(token);

    if (response.status === 200) {
      return response.data;
    }
    return rejectWithValue('Planes fetching failed');
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const planeThunk = createAsyncThunk(
  'planes/fetchById', async (id, { rejectWithValue }) => {
    try {
      const response = await getPlane(id);

      if (response.status === 200) {
        return response.data;
      }
      return rejectWithValue('Plane fetching failed');
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const createPlaneThunk = createAsyncThunk('/planes/new', async (data, { rejectWithValue }) => {
  const { planeData, token } = data;
  try {
    const response = await createPlane(planeData, token);
    if (response.status === 201) {
      return { planeID: response?.planeID, message: response?.message };
    }
    return rejectWithValue('Faild to create plane, please try again');
  } catch (error) {
    if (error.response.status === 401) {
      return rejectWithValue('Unauthorized, You dont have enough permission');
    }
    return rejectWithValue(error.message);
  }
});
