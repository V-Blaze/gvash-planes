import axiosInstance from '../axios';

// plane methods
export const getPlanesReservations = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axiosInstance.get('/api/v1/planes_reservations', config);
  return response;
};

export const addPlaneReservation = async (token, date, startTime, endTime, planeID) => {
  const planeReservationData = {
    date,
    start_time: startTime,
    end_time: endTime,
    plane_id: planeID,
  };

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axiosInstance.post('/api/v1/planes_reservations', planeReservationData, config);
  return response;
};
