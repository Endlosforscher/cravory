import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaHeart, FaBars, FaTimes } from 'react-icons/fa';
import type { NavLinkRenderProps } from 'react-router-dom';

import logo from '../assets/images/logo.svg';

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const linkClass = ({ isActive }: NavLinkRenderProps) =>
    `text-white hover:bg-rose-500 hover:text-white rounded-md px-3 py-2${
      isActive ? ' bg-rose-500' : ''
    }`;

  return (
    <nav className="bg-rose-400 border-b border-rose-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          <Link to="/" className="flex-shrink-0">
            <img className="h-10 w-auto" src={logo} alt="Cravory Logo" />
          </Link>

          <div className="hidden md:flex md:items-center md:space-x-4">
            <NavLink to="/recipes" className={linkClass}>
              All Recipes
            </NavLink>
            <NavLink to="/search" className={linkClass}>
              Search
            </NavLink>
            <Link
              to="/wishlist"
              className="text-white rounded-md p-2"
              aria-label="Wishlist"
            >
              <FaHeart className="text-xl" />
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <Link
              to="/wishlist"
              className="text-white hover:bg-rose-400 rounded-md p-2 mr-2"
              aria-label="Wishlist"
            >
              <FaHeart className="text-xl" />
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-white hover:bg-rose-400 rounded-md p-2"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-rose-600">
          <NavLink
            to="/recipes"
            className={({ isActive }) =>
              `block px-4 py-2 text-white hover:bg-rose-400${
                isActive ? ' bg-rose-500' : ''
              }`
            }
            onClick={() => setMobileOpen(false)}
          >
            All Recipes
          </NavLink>
          <NavLink
            to="/search"
            className={({ isActive }) =>
              `block px-4 py-2 text-white hover:bg-rose-400${
                isActive ? ' bg-rose-500' : ''
              }`
            }
            onClick={() => setMobileOpen(false)}
          >
            Search
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
