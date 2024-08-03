import { useState, useEffect } from "react";
import logo from "../assets/Images/Logo.png";
import "./Nav.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth < 1025);
    }
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="left-0 w-full z-50 fixed top-0 pb-2 pt-14 bg-black/25 backdrop-blur-md">
      <div className="w-screen flex flex-wrap items-center justify-between mx-auto py-4 px-20 relative">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://i.ibb.co/pfW6CJL/full-logo.png"
            className="w-[25vw] lg:w-[7vw] hlg:-fit h-[2.5vh] mt-0"
            alt="Dyne Logo"
          />
        </a>
        <div className={` ${isSmallScreen ? "w-1/12 " : "hidden"}`}></div>
        <div className={"flex absolute bottom-0 right-20"}>
          <button
            onClick={toggleMenu}
            type="button"
            className={`inline-flex pop-btn items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600  ${
              isSmallScreen ? "" : ""
            }`}
            aria-controls="navbar-default"
            aria-expanded={menuOpen}
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
          <div className="flex mt-1">
            <div
              className={` ${
                (menuOpen && isSmallScreen) || !isSmallScreen
                  ? "!block"
                  : "hidden"
              }`}
              id="navbar-default"
            >
              <ul className=" popup !font-normal lg:text-[0.9vw] text-[3.3vw] flex flex-col p-4 lg:p-0 mt-4 border lg:pt-10 rounded-lg lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0 dark:border-gray-700" >
                <li>
                  <a
                    href="/#home"
                    className="block py-2 px-3 !font-normal uppercase lg:text-[0.9vw] text-[3.3vw] text-white lg:hover:text-blue-700 rounded bg-transparent lg:text-white-700 lg:p-0 dark:text-white lg:dark:text-white-500"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/#mission"
                    className="block py-2 px-3 text-gray-900 rounded uppercase !font-normal lg:text-[0.9vw] text-[3.3vw]  lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500  dark:hover:text-white lg:dark:hover:bg-transparent"
                  >
                    Mission
                  </a>
                </li>
                <li>
                  <a
                    href="/#projects"
                    className="block py-2 px-3 text-gray-900 rounded uppercase !font-normal lg:text-[0.9vw] text-[3.3vw] lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500  dark:hover:text-white lg:dark:hover:bg-transparent"
                  >
                    Bootcamps
                  </a>
                </li>
                <li>
                  <a
                    href="/#sponsor"
                    className="block py-2 px-3 text-gray-900 rounded uppercase !font-normal lg:text-[0.9vw] text-[3.3vw] lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500  dark:hover:text-white lg:dark:hover:bg-transparent"
                  >
                    Sponsor
                  </a>
                </li>
                <li>
                  <a
                    href="/careers"
                    className="block py-2 px-3 text-gray-900 rounded uppercase !font-normal lg:text-[0.9vw] text-[3.3vw] lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500  dark:hover:text-white lg:dark:hover:bg-transparent"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div className={` ${isSmallScreen ? "w-1/12 " : "hidden"}`}></div>
            <a
              href="/#projects"
              className={` w-fit mx-auto text-white ml-20 rounded-md lg:text-[0.9vw] !h-fit pt-2 text-[3.3vw] font-thin text-center justify-center border border-white py-[0.4vw] px-[1vw] hover:scale-110 transition-all ease-in-out tracking-wide ${
                isSmallScreen ? "hidden lg:inline-block" : "lg:inline-block"
              }`}
            >
              Join the Waitlist
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
