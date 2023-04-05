// Register.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerThunk } from '../../../slices/authSlice/authSlice';
import { setNotice, setAlert } from '../../../slices/appSlice/appSlice';

const Register = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerThunk({ name, email, password })).then((res) => {
      if (res.error) {
        dispatch(setAlert(res.payload));
      } else {
        dispatch(setNotice('Register successful'));
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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

      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
