import axiosInstance from '../axios';

// plane methods
export const getPlanes = async () => {
  const response = await axiosInstance.get('/api/v1/planes');
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

export const createPlane = async (data, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };

  const response = await axiosInstance.post('/api/v1/planes', data, config);
  return response;
};

export const removePlane = async (token, id) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };

  const response = await axiosInstance.delete(`/api/v1/planes/${id}`, config);
  return response;
};
