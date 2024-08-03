import logo from "../assets/Images/Logo.png";
import "../Styles/Home.css";

export default function Footer() {
  return (
    <div className="w-screen  lg:h-fit h-[20vh] bg-[#0f0f0f] relative overflow-hidden">

      <div className="w-screen  lg:h-fit lg:pb-[5vh] flex mobile-flex">
      <div className="lg:w-1/3 mx-auto">
          <ul className="  my-auto h-fit ml-[5vw]  mx-auto lg:flex hidden !font-normal w-fit  p-4 lg:p-0 border-0 lg:pt-10 rounded-lg flex-row lg:space-x-8 rtl:space-x-reverse mt-[8vh] lg:border-0 dark:border-gray-700">
          <li>
                  <a
                    href="/"
                    className="block py-2 px-3 !font-normal uppercase text-[1.1vw] text-white lg:hover:text-blue-700 rounded bg-transparent lg:text-white-700 lg:p-0 dark:text-white lg:dark:text-white-500"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/#mission"
                    className="block py-2 px-3 text-gray-900 rounded uppercase !font-normal text-[1.1vw]  lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500  dark:hover:text-white lg:dark:hover:bg-transparent"
                  >
                    Mission
                  </a>
                </li>
                
                <li>
                  <a
                    href="/#projects"
                    className="block py-2 px-3 text-gray-900 rounded uppercase !font-normal text-[1.1vw] lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500  dark:hover:text-white lg:dark:hover:bg-transparent"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="/#sponsor"
                    className="block py-2 px-3 text-gray-900 rounded uppercase !font-normal text-[1.1vw] lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500  dark:hover:text-white lg:dark:hover:bg-transparent"
                  >
                    Sponsor
                  </a>
                </li>
                <li>
                  <a
                    href="/careers"
                    className="block py-2 px-3 text-gray-900 rounded uppercase !font-normal text-[1.1vw] lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500  dark:hover:text-white lg:dark:hover:bg-transparent"
                  >
                    Careers
                  </a>
                </li>
          </ul>
        </div>
        
        <div className="lg:w-1/5 mx-auto w-screen lg:mt-0 mt-5">
          <img
            src={logo}
            className=" lg:w-[3vw] mx-auto w-[5.5vh] h-[5.5vh] lg:h-fit  lg:mt-[8vh] mt-[5vh] brightness-75  "
            alt="Dyne Logo"
          />
        </div>
        <div className="w-1/3 text-gray-100 h-fit m-0 lg:my-auto lg:mt-[6vh] mobile-width mx-auto font-thin lg:text-left  mt-3 text-center ">Copyright © Dyne Research 2024.<br className="lg:hidden relative font-thin" /> All rights reserved.<br className=""/><span className="mobile font-thin"> Unauthorized replication prohibited.</span>
        </div>
      </div>
    </div>
  );
}