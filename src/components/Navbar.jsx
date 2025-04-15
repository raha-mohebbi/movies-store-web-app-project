import React from 'react';
import { Link } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6';
import { FaHome } from 'react-icons/fa';
import filmRollImage from '../assets/film-roll.png';

const Navbar = () => {
return (
  <div className="w-full flex flex-row items-center gap-2 px-2 py-2 bg-white shadow-md border-b">

    <div className="flex items-center gap-4">
      <Link to="/cart" className="flex items-center gap-2 text-lg font-medium text-gray-800 hover:text-blue-600">
        <FaCartShopping />
        Cart
      </Link>
      <Link to="/" className="flex items-center p-3 gap-2 text-lg font-medium text-gray-800 hover:text-blue-600 ">
        <FaHome />
        Home
      </Link>
    </div>

    <p className="flex-1 text-center text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
      Movies Store Web App
    </p>

    <div className="ml-auto">
      <img src={filmRollImage} alt="Film Roll" className="w-16 h-auto object-contain" />
    </div>

  </div>
);
};

export default Navbar;
