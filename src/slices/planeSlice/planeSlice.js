import { createSlice } from '@reduxjs/toolkit';
import { planesThunk, createPlaneThunk } from './planeAPI';

const planeSlice = createSlice({
  name: 'plane',
  initialState: {
    planes: [],
    plane: null,
    error: null,
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(planesThunk.fulfilled, (state, action) => ({
      ...state, planes: action.payload.data, error: null,
    }));
    builder.addCase(planesThunk.rejected, (state, action) => ({ ...state, error: action.payload }));
    builder.addCase(createPlaneThunk.rejected, (state, action) => ({
      ...state, error: action.payload,
    }));
  },
});

export default planeSlice.reducer;
