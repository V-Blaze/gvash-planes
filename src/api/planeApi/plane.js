import axiosInstance from '../axios';

// plane methods
export const getPlanes = async () => {
  const response = await axiosInstance.get('/api/v1/planes');
  return response;
};

// just for linter you can remove it
export const getPlane = async (token, id) => {
  const response = await axiosInstance.get(`/api/v1/planes/${id}`);
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
