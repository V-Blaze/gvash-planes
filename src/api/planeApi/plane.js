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

// just for linter you can remove it
export const getPlane = async (token, id) => {
  const response = await axiosInstance.get(`/api/v1/planes/${id}`);
  return response;
};
