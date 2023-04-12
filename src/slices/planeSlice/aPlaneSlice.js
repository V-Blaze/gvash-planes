import { createSlice } from '@reduxjs/toolkit';
import { planeThunk } from './planeAPI';

const aPlaneSlice = createSlice({
  name: 'aplane',
  initialState: {
    plane: null,
    error: null,
    loading: false,
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(planeThunk.pending, (state) => ({
      ...state, error: null, loading: true
    }));
    builder.addCase(planeThunk.fulfilled, (state, action) => ({
      ...state, plane: action.payload.data, error: null, loading: false,
    }));
    builder.addCase(planeThunk.rejected, (state, action) => ({
      ...state, error: action.payload
    }));
  },
});

export default aPlaneSlice.reducer;