import React from 'react';
import { Link } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6';
import { FaHome } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="w-full flex flex-row items-center gap-6 px-6 py-4 bg-white shadow-md border-b">

      <input className="border border-gray-300 rounded px-3 py-2 w-60"
        type="text"
        placeholder="Search Movie"
        
        
      />
      <button type="submit" class="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
</button>
      
     
      <Link to="/store" className="flex items-center gap-2 text-lg font-medium text-gray-800 hover:text-blue-600">
        <FaHome />
        Home
      </Link>

    
      <Link to="/cart" className="flex items-center gap-2 text-lg font-medium text-gray-800 hover:text-blue-600">
        <FaCartShopping />
        Cart
      </Link>
    </div>
  );
};

export default Navbar;
