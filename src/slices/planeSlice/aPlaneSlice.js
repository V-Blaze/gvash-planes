import { createSlice } from '@reduxjs/toolkit';
import { planeThunk } from './planeAPI';

const initialState = {
  planes: [],
  selectedPlane: null,
  selectedPlaneStatus: 'idle', // added a new state property for async status
};

const aPlaneSlice = createSlice({
  name: 'plane',
  initialState,
  reducers: {
    setPlanes: (state, action) => {
      state.planes = action.payload;
    },
    selectPlane: (state, action) => {
      const planeId = action.payload;
      state.selectedPlane = state.planes.find((plane) => plane.id === planeId);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(planeThunk.pending, (state) => {
        // set the status to loading while fetching data
        state.selectedPlaneStatus = 'loading';
      })
      .addCase(planeThunk.fulfilled, (state, action) => {
        // set the selected plane and reset the status to 'idle'
        state.selectedPlane = action.payload;
        state.selectedPlaneStatus = 'idle';
      })
      .addCase(planeThunk.rejected, (state) => {
        // set the status to 'error' if the request fails
        state.selectedPlaneStatus = 'error';
      });
  },
});

export const { setPlanes, selectPlane } = aPlaneSlice.actions;

export default aPlaneSlice.reducer;