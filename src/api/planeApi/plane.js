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
