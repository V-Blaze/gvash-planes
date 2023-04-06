import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import './ReservationCard.css';
import { removeReservation } from '../../api/reservationApi/reservation';
import { clearReservation } from '../../slices/reservationSlice/reservationSlice';
import { setAlert } from '../../slices/appSlice/appSlice';

const ReservationCard = ({ reservation, image_url }) => {
  const dispatch = useDispatch();
  const [removing, setRemoving] = useState(false);
  const token = useSelector((state) => state.auth.token);

  const handleClick = () => {
    setRemoving(true);
    removeReservation(token, reservation.id).then(res => {
      if (res.status === 204) {
        dispatch(clearReservation(reservation.id));
      } else {
        dispatch(setAlert("Canceling reservation failed!"));
      }
      setRemoving(false)
    })
  };

  return (
    <div className="reservation_card">
      <img src={image_url} alt="plane image" width="250" height="200" />
      <p><strong>Start Time: </strong> {reservation.start_time}</p>
      <p><strong>End Time: </strong> {reservation.end_time}</p>
      <p><strong>Duration: </strong> {reservation.duration}</p>
      <button onClick={handleClick} style={{ filter: removing? "blur(5px)": "" }}>Cancel</button>
    </div>
  );
};

ReservationCard.propTypes = {
  image_url: PropTypes.string.isRequired,
  reservation: PropTypes.object.isRequired,
};

export default ReservationCard;
