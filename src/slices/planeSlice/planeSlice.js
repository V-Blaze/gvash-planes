import { createSlice } from '@reduxjs/toolkit';
import { planesThunk, createPlaneThunk } from './planeAPI';

const planeSlice = createSlice({
  name: 'plane',
  initialState: {
    planes: [],
    plane: null,
    error: null,
    loading: false,
  },
  reducers: {
    clearplane: (state, action) => ({
      ...state,
      planes: state.planes.filter(
        (data) => data.planes.id !== action.payload,
      ),
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(planesThunk.pending, (state) => ({ ...state, error: null, loading: true }));
    builder.addCase(planesThunk.fulfilled, (state, action) => ({
      ...state, planes: action.payload.data, error: null, loading: false,
    }));
    builder.addCase(planesThunk.rejected,
      (state, action) => ({ ...state, error: action.payload, loading: false }));
    builder.addCase(createPlaneThunk.rejected, (state, action) => ({
      ...state, error: action.payload, loading: false,
    }));
  },
});

export default planeSlice.reducer;
