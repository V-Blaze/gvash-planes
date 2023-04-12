import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { planesReservationsThunk } from '../../slices/reservationSlice/planesReservationSlice';
import { addPlaneReservation } from '../../api/planesReservationApi/planesReservation';

const reservationSchema = yup.object().shape({
  date: yup.date().required(),
  startTime: yup.string().required(),
  endTime: yup.string().required(),
});

const PlanesReservation = () => {
  const dispatch = useDispatch();
  const planesReservations = useSelector((state) => state.planesReservation.planesReservations);
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [planeID, setPlaneID] = useState('');

  useEffect(() => {
    dispatch(planesReservationsThunk());
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const dateObj = new Date(date); // Convert date string to Date object
      await reservationSchema.validate({ date: dateObj, startTime, endTime });
      const response = await dispatch(addPlaneReservation(date, startTime, endTime, planeID));
      if (response && response.status === 200) {
        dispatch(planesReservationsThunk());
        setDate('');
        setStartTime('');
        setEndTime('');
        setPlaneID('');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" flex justify-center items-center flex-col mt-12 gap-8">
      <h1 className=" text-center uppercase m-auto w-fit font-secondary text-xl">Planes Reservations</h1>
      <form onSubmit={handleSubmit} className=" flex justify-center items-center flex-col gap-8">
        <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} className="border border-gray-300 p-2 mb-2" />

        <input
          type="time"
          id="start-time"
          value={startTime || '00:00'}
          onChange={(e) => setStartTime(e.target.value)}
          className="border border-gray-300 p-2 mb-2"
        />

        <input type="time" id="end-time" value={endTime || '00:00'} onChange={(e) => setEndTime(e.target.value)} className="border border-gray-300 p-2 mb-2" />
        <input type="number" id="planeID" value={planeID} onChange={(e) => setPlaneID(e.target.value)} className="border border-gray-300 p-2 mb-2" />

        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add Reservation
        </button>
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
