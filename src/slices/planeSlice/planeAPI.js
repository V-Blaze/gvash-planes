import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPlanes, getPlane } from '../../api/planeApi/plane';

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

export const planeThunk = createAsyncThunk('/plane', async (token, { rejectWithValue }) => {
  try {
    const response = await getPlane(token);

    if (response.status === 200) {
      return response.data;
    }
    return rejectWithValue('Plane details fetching failed');
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
