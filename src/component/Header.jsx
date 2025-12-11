import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="shadow sticky z-50 top-0 bg-white">
      <nav className="border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-7xl">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `py-2 px-3 rounded-md font-medium hover:text-orange-700 ${
                  isActive ? "text-orange-700" : "text-gray-700"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `py-2 px-3 rounded-md font-medium hover:text-orange-700 ${
                  isActive ? "text-orange-700" : "text-gray-700"
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `py-2 px-3 rounded-md font-medium hover:text-orange-700 ${
                  isActive ? "text-orange-700" : "text-gray-700"
                }`
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/github"
              className={({ isActive }) =>
                `py-2 px-3 rounded-md font-medium hover:text-orange-700 ${
                  isActive ? "text-orange-700" : "text-gray-700"
                }`
              }
            >
              Github
            </NavLink>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <Link
              to="#"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 focus:outline-none"
            >
              Log in
            </Link>
            <a
              href="https://wa.me/919205290899?text=Hello%20Pardeep!"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-white-300 font-medium rounded-lg text-sm px-3 py-2 flex justify-center items-center gap-1 transition"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.04 2C6.48 2 2 6.48 2 12.04c0 2.12.62 4.08 1.69 5.72L2 22l4.3-1.69c1.63 1.07 3.6 1.69 5.74 1.69 5.56 0 10.04-4.48 10.04-10.04S17.6 2 12.04 2zm5.48 14.27c-.23.64-1.3 1.21-1.78 1.28-.47.07-1.04.1-2.46-.48-3.14-1.13-5.16-4.33-5.33-4.52-.17-.18-1.33-1.56-1.33-2.98 0-1.42.74-2.12 1-2.41.26-.29.57-.36.77-.36.2 0 .38 0 .55.01.18.02.42-.07.65.49.23.56.77 1.94.84 2.09.07.15.11.32.02.52-.09.2-.14.32-.28.5-.14.18-.28.38-.4.53-.13.15-.27.31-.12.61.15.3.66 1.03 1.42 1.66.97.79 1.79 1.05 2.09 1.16.3.11.48.09.66-.06.18-.15.78-.89.97-1.2.19-.31.39-.26.65-.16.26.1 1.64.77 1.92.91.28.14.47.22.53.35.06.13.06.75-.17 1.39z"
                />
              </svg>
              WhatsApp
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M3 5h14a1 1 0 110 2H3a1 1 0 110-2zm0 4h14a1 1 0 110 2H3a1 1 0 110-2zm0 4h14a1 1 0 110 2H3a1 1 0 110-2z"
                    clipRule="evenodd"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`${isOpen ? "block" : "hidden"} w-full lg:hidden mt-4`}
            id="mobile-menu"
          >
            <ul className="flex flex-col font-medium space-y-2">
              <li>
                <NavLink
                  to="/"
                  className="block py-2 px-4 text-gray-700 rounded hover:bg-gray-100 hover:text-orange-700"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="block py-2 px-4 text-gray-700 rounded hover:bg-gray-100 hover:text-orange-700"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="block py-2 px-4 text-gray-700 rounded hover:bg-gray-100 hover:text-orange-700"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </NavLink>
              </li>
              <li className="flex flex-col mt-2 space-y-2">
                 <a
              href="https://wa.me/919205290899?text=Hello%20Pardeep!"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-white-300 font-medium rounded-lg text-sm px-3 py-2 flex justify-center items-center gap-1 transition"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.04 2C6.48 2 2 6.48 2 12.04c0 2.12.62 4.08 1.69 5.72L2 22l4.3-1.69c1.63 1.07 3.6 1.69 5.74 1.69 5.56 0 10.04-4.48 10.04-10.04S17.6 2 12.04 2zm5.48 14.27c-.23.64-1.3 1.21-1.78 1.28-.47.07-1.04.1-2.46-.48-3.14-1.13-5.16-4.33-5.33-4.52-.17-.18-1.33-1.56-1.33-2.98 0-1.42.74-2.12 1-2.41.26-.29.57-.36.77-.36.2 0 .38 0 .55.01.18.02.42-.07.65.49.23.56.77 1.94.84 2.09.07.15.11.32.02.52-.09.2-.14.32-.28.5-.14.18-.28.38-.4.53-.13.15-.27.31-.12.61.15.3.66 1.03 1.42 1.66.97.79 1.79 1.05 2.09 1.16.3.11.48.09.66-.06.18-.15.78-.89.97-1.2.19-.31.39-.26.65-.16.26.1 1.64.77 1.92.91.28.14.47.22.53.35.06.13.06.75-.17 1.39z"
                />
              </svg>
              WhatsApp
            </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
