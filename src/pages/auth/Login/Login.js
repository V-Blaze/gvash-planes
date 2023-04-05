// LoginForm.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../../slices/authSlice/authSlice';
import { setNotice, setAlert } from '../../../slices/appSlice/appSlice';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginThunk({ email, password })).then((res) => {
      if (res.error) {
        dispatch(setAlert(res.payload));
      } else {
        dispatch(setNotice('Login successful'));
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
