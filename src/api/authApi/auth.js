// auth methods

import axiosInstance from '../axios';

// login
export const loginUser = async (credentials) => {
  const response = await axiosInstance.post('/auth/login', credentials);
  return response;
};

export const registerUser = async (userData) => {
  const response = await axiosInstance.post('/users', userData);
  return response;
};
