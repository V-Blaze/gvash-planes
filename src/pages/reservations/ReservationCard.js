import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import './ReservationCard.css';
import { removeReservation } from '../../api/reservationApi/reservation';
import { clearReservation } from '../../slices/reservationSlice/reservationSlice';
import { setAlert, setNotice } from '../../slices/appSlice/appSlice';

const ReservationCard = ({
  id,
  startTime,
  endTime,
  duration,
  name,
  imageUrl,
}) => {
  const dispatch = useDispatch();
  const [removing, setRemoving] = useState(false);
  const token = useSelector((state) => state.auth.token);

  const handleClick = () => {
    setRemoving(true);
    removeReservation(token, id).then((res) => {
      if (res.status === 204) {
        dispatch(clearReservation(id));
        dispatch(setNotice('Reservation deleted successfully'));
      } else {
        dispatch(setAlert('Canceling reservation failed!'));
      }
      setRemoving(false);
    });
  };

  return (
    <div className="reservation_card">
      <img src={imageUrl} alt="plane" width="250" height="200" />
      <h3 className="font-secondary">{name}</h3>
      <p>
        <strong>Start Time: </strong>
        {' '}
        {startTime.slice(0, 10)}
      </p>
      <p>
        <strong>End Time: </strong>
        {' '}
        {endTime.slice(0, 10)}
      </p>
      <p>
        <strong>Duration: </strong>
        {' '}
        {duration}
        {' '}
        hours
      </p>
      <button type="button" onClick={handleClick} style={{ filter: removing ? 'blur(5px)' : '' }}>Cancel</button>
    </div>
  );
};

ReservationCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  startTime: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default ReservationCard;