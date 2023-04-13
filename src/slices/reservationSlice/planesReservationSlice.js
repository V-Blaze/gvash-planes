import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getPlanesReservations } from '../../api/planesReservationApi/planesReservation';

export const planesReservationsThunk = createAsyncThunk('/planes_reservations', async (token, { rejectWithValue }) => {
  try {
    const response = await getPlanesReservations(token);

    if (response.status === 200) {
      return response.data;
    }
    return rejectWithValue('Planes reservations fetching failed');
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const planesReservationSlice = createSlice({
  name: 'planesReservation',
  initialState: {
    planesReservations: [],
    loading: true,
    error: null,
  },
  reducers: {
    clearPlanesReservation: (state, action) => ({
      ...state,
      planesReservations: state.planesReservations.filter(
        (data) => data.reservation.id !== action.payload,
      ),
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(planesReservationsThunk.fulfilled, (state, action) => ({
      ...state, planesReservations: action.payload, error: null, loading: false,
    }));
    builder.addCase(planesReservationsThunk.rejected, (state, action) => ({
      ...state, error: action.payload, loading: false,
    }));
  },
});

export const { clearPlanesReservation } = planesReservationSlice.actions;

export default planesReservationSlice.reducer;
