import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaHeart, FaBars, FaTimes } from 'react-icons/fa';
import type { NavLinkRenderProps } from 'react-router-dom';

import logo from '../assets/images/logo.svg';

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const linkClass = ({ isActive }: NavLinkRenderProps) =>
    `text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2${
      isActive ? ' bg-black' : ''
    }`;

  return (
    <nav className="bg-indigo-700 border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          <Link to="/" className="flex-shrink-0">
            <img className="h-10 w-auto" src={logo} alt="Cravory Logo" />
          </Link>

          <div className="hidden md:flex md:items-center md:space-x-4">
            <NavLink to="/recipes" className={linkClass}>
              Recipes
            </NavLink>
            <NavLink to="/search" className={linkClass}>
              Search
            </NavLink>
            <Link
              to="/wishlist"
              className="text-white hover:bg-gray-900 rounded-md p-2"
              aria-label="Wishlist"
            >
              <FaHeart className="text-xl" />
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <Link
              to="/wishlist"
              className="text-white hover:bg-gray-900 rounded-md p-2 mr-2"
              aria-label="Wishlist"
            >
              <FaHeart className="text-xl" />
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-white hover:bg-gray-900 rounded-md p-2"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-indigo-600">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block px-4 py-2 text-white hover:bg-indigo-500${
                isActive ? ' bg-indigo-700' : ''
              }`
            }
            onClick={() => setMobileOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/recipes"
            className={({ isActive }) =>
              `block px-4 py-2 text-white hover:bg-indigo-500${
                isActive ? ' bg-indigo-700' : ''
              }`
            }
            onClick={() => setMobileOpen(false)}
          >
            Recipes
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
