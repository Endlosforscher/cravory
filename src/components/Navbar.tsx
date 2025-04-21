import { Link, NavLink } from 'react-router-dom';
import type { NavLinkRenderProps  } from 'react-router-dom';

import logo from '../assets/images/logo.svg';

const Navbar = () => {

  
const linkClass = ({ isActive }: NavLinkRenderProps) =>
  `text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2${isActive ? ' bg-black' : ''}`;

    return (
      <nav className="bg-indigo-700 border-b border-indigo-500">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              <Link 
                className="flex flex-shrink-0 items-center mr-4" 
                to="/"
              >
                <img
                  className="h-10 w-auto"
                  src={ logo }
                  alt="Cravory Logo"
                />
              </Link>
              <div className="md:ml-auto">
                <div className="flex space-x-2">
                  <NavLink
                    to="/"
                    className={linkClass}>
                    Home
                  </NavLink>
                  <NavLink
                    to="/recipes"
                    className={linkClass}
                  >
                    Recipes
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;  