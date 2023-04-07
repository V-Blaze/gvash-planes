import axiosInstance from '../axios';

// plane methods
export const getPlanes = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axiosInstance.get('/api/v1/planes', config);
  return response;
};

// Method to get details on a single plane by id
export const getPlane = async (token, id) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axiosInstance.get(`/api/v1/planes/${id}`, config);
  return response;
};
