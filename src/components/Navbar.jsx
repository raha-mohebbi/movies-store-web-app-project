import React from 'react';
import { Link } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="">
      <nav className="">
        <div className="">
          <Link to="/store" className="">
            <FaHome className="" color='blue'/> Home
          </Link>
          <Link to="/cart" className="">
            <FaCartShopping className="" color='blue' /> Cart
          </Link>
        </div>

        {/* search box */}
        <div className="">
          <input 
            type="text" 
            placeholder="Search Movie" 
           
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
