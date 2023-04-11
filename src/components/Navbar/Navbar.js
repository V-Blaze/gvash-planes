import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AiOutlineMenuFold } from 'react-icons/ai';

// React Icons
import { RiFacebookFill, RiTwitterFill, RiInstagramFill } from 'react-icons/ri';

// Redux
import { logout } from '../../slices/authSlice/authSlice';

const Navbar = ({ active, setActive }) => {
  const [activeLink, setActiveLink] = useState('');
  const location = useLocation();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const userID = useSelector((state) => state.auth.user?.id);

  useEffect(() => {
    setActiveLink(location?.pathname);
    console.log(activeLink);
  }, [location]);

  return (
    <nav className={`py-14 sm:px-[2%]  px-5 border-r min-h-screen fixed bg-white z-10 transform transition duration-500 ease-in-out ${!active && 'hidden'} md:block`}>
      <AiOutlineMenuFold
        className="absolute top-6 right-4 md:hidden w-6 h-6 cursor-pointer hover:text-primary"
        onClick={() => setActive(!active)}
      />
      <div className="mb-16">
        <h1 className="flex justify-center font-secondary items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-8 h-8 mr-2 pt-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
          GVASH PLANES
        </h1>
      </div>
      <div className="flex flex-col w-full justify-cente">
        <div className="flex flex-col justify-center items-start">
          <Link to="/" className={`nav-link ${activeLink === '/' && 'active-nav-link'}`} onClick={() => setActive(!active)}>
            Home
          </Link>
          {isLoggedIn ? (
            <Link to="/reservations" className={`nav-link ${activeLink === '/reservations' && 'active-nav-link'}`} onClick={() => setActive(!active)}>
              Reservations
            </Link>
          ) : (
            <>
              <Link to="/register" className={`nav-link ${activeLink === '/register' && 'active-nav-link'}`} onClick={() => setActive(!active)}>
                Register
              </Link>
              <Link to="/login" className={`nav-link ${activeLink === '/login' && 'active-nav-link'}`} onClick={() => setActive(!active)}>
                Login
              </Link>
            </>
          )}
          {isLoggedIn && userID === 1 && (
          <Link to="/planes/new" className={`nav-link ${activeLink === '/planes/new' && 'active-nav-link'}`} onClick={() => setActive(!active)}>
            Create Plane
          </Link>
          )}
        </div>
      </div>
      <div className="flex flex-col items-start absolute bottom-0 gap-3">
        {isLoggedIn && (
        <button
          type="button"
          onClick={() => dispatch(logout())}
          className="w-full text-white bg-primary hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary"
        >
          Logout
        </button>
        )}
        <ul className="flex flex-row justify-center items-center gap-6">
          <li>
            <a href="https://facebook.com/" className="hover:text-primary">
              <RiFacebookFill />
            </a>

          </li>
          <li>
            <a href="https://twitter.com/" className="hover:text-primary">
              <RiTwitterFill />
            </a>

          </li>
          <li>
            <a href="https://instagram.com/" className="hover:text-primary">
              <RiInstagramFill />
            </a>

          </li>
        </ul>
        <p className="italic">2023 CopyRight GVASH</p>
      </div>

    </nav>
  );
};

Navbar.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
};

export default Navbar;
