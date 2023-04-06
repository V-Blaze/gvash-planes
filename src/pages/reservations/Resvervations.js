import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { reservationsThunk } from '../../slices/reservationSlice/reservationSlice';
import { setAlert } from '../../slices/appSlice/appSlice';
import ReservationCard from './ReservationCard';

export default function Reservations() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const reservations = useSelector((state) => state.reservation.reservations);

  useEffect(() => {
    dispatch(reservationsThunk(token)).then((res) => {
      if (res.error) {
        dispatch(setAlert(res.payload));
      }
    });
  }, [dispatch, token]);

  return (
    <div>
      <h1 className="reservations_title">My Reservations</h1>
      <div className="reservation_container">
        {reservations.map((data) => (
          <ReservationCard key={data.reservation.id} reservation={data.reservation} image_url={data.image_url} />
        ))}
      </div>
    </div>
  )
}