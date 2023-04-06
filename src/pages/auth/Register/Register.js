// Register.js

import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { registerThunk } from '../../../slices/authSlice/authSlice';
import { setNotice, setAlert } from '../../../slices/appSlice/appSlice';
import SmallErrorMessage from '../../../components/messages/SmallErrorMessage';

const RegisterSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Name is Too Short!').max(50, 'Name is Too Long!').required('Name is Required'),
  email: Yup.string().email('Invalid email').required('Email is Required'),
  password: Yup.string().min(6, 'Password is Too Short!').max(50, 'Password is Too Long!').required('Password is Required'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
});
const Register = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    RegisterSchema.validate({
      email, password, name, confirmPassword,
    }, { abortEarly: false })
      .then((res) => {
        dispatch(registerThunk(res)).then((res) => {
          if (res.error) {
            dispatch(setAlert(res.payload));
          } else {
            dispatch(setNotice('Register successful'));
          }
        });
      }).catch((err) => {
        const newErrors = {};
        err.inner.forEach((error) => {
          newErrors[error.path] = error.message;
        });
        setErrors(newErrors);
      });
  };

  const showHandler = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
    if (passwordRef.current.type === 'password') {
      passwordRef.current.type = 'text';
    } else {
      passwordRef.current.type = 'password';
    }
  };

  const showConfirmHandler = (e) => {
    e.preventDefault();
    setShowConfirmPassword(!showConfirmPassword);
    if (confirmPasswordRef.current.type === 'password') {
      confirmPasswordRef.current.type = 'text';
    } else {
      confirmPasswordRef.current.type = 'password';
    }
  };
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
        <h1 className="flex font-secondary items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
          GVASH
        </h1>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Register your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <span htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</span>
                <input
                  type="text"
                  id="name"
                  placeholder="Joe Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-gray-50 focus:shadow-focus border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  autoComplete="name"
                />
                {errors.name && <SmallErrorMessage message={errors.name} />}
              </div>

              <div>
                <span htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</span>
                <input
                  type="email"
                  id="email"
                  placeholder="joe@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-50 border focus:outline-none focus:shadow-focus border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  autoComplete="email"
                />
                {errors.email && <SmallErrorMessage message={errors.email} />}
              </div>
              <div>
                <span htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</span>
                <div className="relative">

                  <input
                    type="password"
                    id="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-gray-50 border focus:outline-none focus:shadow-focus border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    autoComplete="current-password"
                    ref={passwordRef}
                  />

                  <button type="button" className="absolute right-3 top-3 text-gray-400" onClick={showHandler}>
                    {showPassword ? (<AiFillEye />) : (<AiFillEyeInvisible />)}
                  </button>
                </div>
                {errors.password && <SmallErrorMessage message={errors.password} />}
                {' '}

              </div>
              <div>
                <span htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Your Password</span>
                <div className="relative">

                  <input
                    type="password"
                    id="confirmPassword"
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="bg-gray-50 border focus:outline-none focus:shadow-focus border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    autoComplete="current-password"
                    ref={confirmPasswordRef}
                  />

                  <button type="button" className="absolute right-3 top-3 text-gray-400" onClick={showConfirmHandler}>
                    {showConfirmPassword ? (<AiFillEye />) : (<AiFillEyeInvisible />)}
                  </button>
                </div>

                {errors.confirmPassword && <SmallErrorMessage message={errors.confirmPassword} />}
              </div>
              <button type="submit" className="w-full text-white bg-primary hover:bg-hoverPrimary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary">Register</button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?
                {' '}
                <Link to="/login" className="text-primary hover:text-hoverPrimary hover:underline dark:text-primary-400">Sign in</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;

//
