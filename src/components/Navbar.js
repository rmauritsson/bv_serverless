import { useState } from "react";
import { Link } from "react-router-dom";
import { Transition } from "@headlessui/react";

const Navbar = () => {
  const pathname = window.location.pathname;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="bg-white">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative px-4 py-4 flex justify-between items-center bg-white">
            <div className="flex-shrink-0">
              <Link className="h-8 w-8" to="/">
                <img
                  src="https://daks2k3a4ib2z.cloudfront.net/6165dcf3d52e26132ab86652/617ec5dfbfffe9e60218aeb7_bv-logo-website-p-130x130q80.png"
                  alt="logo"
                />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <div className="flex items-center w-auto space-x-6 text-gray-800 px-3 py-2 text-sm font-medium">
                  <div>
                    <Link
                      className={
                        pathname === "/dashboard"
                          ? "text-sm text-blue-600 font-semibold"
                          : "text-sm text-gray-400 hover:text-gray-500"
                      }
                      to="/dashboard"
                    >
                      Dashboard
                    </Link>
                  </div>
                  <div className="text-gray-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      className="w-4 h-4 current-fill"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      />
                    </svg>
                  </div>

                  <div>
                    <Link
                      className={
                        pathname === "/professionals"
                          ? "text-sm text-blue-600 font-semibold"
                          : "text-sm text-gray-400 hover:text-gray-500"
                      }
                      to="/professionals"
                    >
                      Counsellors and Therapists
                    </Link>
                  </div>
                  <div className="text-gray-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      className="w-4 h-4 current-fill"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      />
                    </svg>
                  </div>

                  <div>
                    <Link
                      className={
                        pathname === "/volunteers"
                          ? "text-sm text-blue-600 font-semibold"
                          : "text-sm text-gray-400 hover:text-gray-500"
                      }
                      to="/volunteers"
                    >
                      Volunteers
                    </Link>
                  </div>
                  <div className="text-gray-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      className="w-4 h-4 current-fill"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      />
                    </svg>
                  </div>

                  <div>
                    <Link
                      className={
                        pathname === "/volunteer-assignment"
                          ? "text-sm text-blue-600 font-semibold"
                          : "text-sm text-gray-400 hover:text-gray-500"
                      }
                      to="/volunteer-assignment"
                    >
                      Get Paired
                    </Link>
                  </div>
                  <div className="text-gray-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      className="w-4 h-4 current-fill"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Link
                className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200"
                to="/"
              >
                Sign In
              </Link>
              <Link
                className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200"
                to="/"
              >
                Sign up
              </Link>
            </div>

            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="navbar-burger flex items-center text-blue-600 p-3"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="block h-6 w-6"
                    stroke="currentColor"
                  >
                    <title>Menu</title>
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  className={
                    pathname === "/dashboard"
                      ? "text-sm text-blue-600 font-semibold block px-3 py-2 rounded-md text-base font-medium"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  }
                  to="/dashboard"
                >
                  Dashboard
                </Link>

                <Link
                  className={
                    pathname === "/professionals"
                      ? "text-sm text-blue-600 font-semibold block px-3 py-2 rounded-md text-base font-medium"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  }
                  to="/volunteer-assignment"
                >
                  Counsellors and Therapists
                </Link>

                <Link
                  className={
                    pathname === "/volunteers"
                      ? "text-sm text-blue-600 font-semibold block px-3 py-2 rounded-md text-base font-medium"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  }
                  to="/"
                >
                  Volunteers
                </Link>

                <Link
                  className={
                    pathname === "/volunteer-assignment"
                      ? "text-sm text-blue-600 font-semibold block px-3 py-2 rounded-md text-base font-medium"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  }
                  to="/"
                >
                  Get Paired
                </Link>
                <div className="mt-auto">
                  <div className="pt-6">
                    <Link
                      className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl"
                      to="/"
                    >
                      Sign in
                    </Link>
                    <Link
                      className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl"
                      to="#"
                    >
                      Sign Up
                    </Link>
                  </div>
                  <p className="my-4 text-xs text-center text-gray-400">
                    <span>Copyright © 2021</span>
                  </p>
                </div>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
};

export default Navbar;
