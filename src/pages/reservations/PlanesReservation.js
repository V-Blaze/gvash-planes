import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { planesReservationsThunk } from '../../slices/reservationSlice/planesReservationSlice';
import { addPlaneReservation } from '../../api/planesReservationApi/planesReservation';

const PlanesReservation = () => {
  const dispatch = useDispatch();
  const planesReservations = useSelector((state) => state.planesReservation.planesReservations);
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  useEffect(() => {
    dispatch(planesReservationsThunk());
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = dispatch(addPlaneReservation(date, startTime, endTime));

    if (response && response.status === 200) {
      dispatch(planesReservationsThunk());
      setDate('');
      setStartTime('');
      setEndTime('');
    }
  };
  return (
    <div>
      <h1>Planes Reservations</h1>
      <form onSubmit={handleSubmit}>
        <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} />

        <input type="time" id="start-time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />

        <input type="time" id="end-time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
        <button type="submit">Add Reservation</button>
      </form>
      <div>
        {planesReservations.map((reservation) => (
          <div key={reservation.id}>
            <p>{reservation.date}</p>
            <p>{reservation.duration}</p>
            <p>{reservation.start_time}</p>
            <p>{reservation.end_time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanesReservation;
