import axiosInstance from '../axios';

// plane methods
export const getReservations = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axiosInstance.get('/api/v1/planes_reservations', config);
  return response;
};

export const removeReservation = async (token, id) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axiosInstance.delete(`/api/v1/planes_reservations/${id}`, config);
  return response;
};
