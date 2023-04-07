import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getReservations } from '../../api/reservationApi/reservation';

export const reservationsThunk = createAsyncThunk('/reservations', async (token, { rejectWithValue }) => {
  try {
    const response = await getReservations(token);

    if (response.status === 200) {
      return response.data;
    }
    return rejectWithValue('Reservations fetching failed');
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const reservationSlice = createSlice({
  name: 'reservation',
  initialState: {
    reservations: [],
    loading: true,
    error: null,
  },
  reducers: {
    clearReservation: (state, action) => ({
      ...state,
      reservations: state.reservations.filter(
        (data) => data.reservation.id !== action.payload,
      ),
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(reservationsThunk.fulfilled, (state, action) => ({
      ...state, reservations: action.payload, error: null, loading: false,
    }));
    builder.addCase(reservationsThunk.rejected, (state, action) => ({
      ...state, error: action.payload, loading: false,
    }));
  },
});

export const { clearReservation } = reservationSlice.actions;

export default reservationSlice.reducer;
