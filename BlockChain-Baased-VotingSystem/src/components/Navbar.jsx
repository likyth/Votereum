import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-800 sticky top-0 z-50">
      <nav className="relative z-10 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Votereum
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col font-bold p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 md:p-2 text-white hover:text-slate-900 bg-blue-700 rounded bg-transparent"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 px-3 md:p-2 text-white hover:text-slate-900 bg-blue-700 rounded bg-transparent"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 px-3 md:p-2 text-white hover:text-slate-900 bg-blue-700 rounded bg-transparent"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className="block py-2 px-3 md:p-2 text-white hover:text-slate-900 bg-blue-700 rounded bg-transparent"
              >
                FaQs
              </Link>
            </li>
            <li>
              <button className="border border-2 rounded-xl hover:border-slate-900">
                <Link
                  to="/signup"
                  className="block py-2 px-3 md:px-7 text-white hover:text-slate-900 bg-blue-700 rounded bg-transparent"
                >
                  Login
                </Link>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
