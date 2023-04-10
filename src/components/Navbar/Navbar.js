import React from 'react';

// React Icons
import { RiFacebookFill, RiTwitterFill, RiInstagramFill } from 'react-icons/ri';

const Navbar = () => (
  <nav className=" py-14 sm:px-[2%] px-5 border-r min-h-screen fixed">
    <div className="mb-16">
      <h1 className="flex justify-center font-secondary items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        <img className="w-8 h-8 mr-2 pt-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
        GVASH PLANES
      </h1>
    </div>
    <div className="flex flex-col w-full justify-cente">
      <ul className="flex flex-col justify-center items-start">
        <li className="nav-link">Home</li>
        <li className="nav-link">Models</li>
        <li className="nav-link">Reservations</li>
        <li className="nav-link">Register</li>
        <li className="nav-link">Login</li>
        <li className="nav-link">Create Plane</li>
      </ul>
    </div>
    <div className="flex flex-col items-start absolute bottom-0 gap-3">
      <button type="button" className="w-full text-white bg-primary hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary">Logout</button>
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

export default Navbar;
