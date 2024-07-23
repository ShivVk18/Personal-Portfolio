import React, { useState } from 'react';
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-scroll';
import useTheme from '../contexts/Theme';
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {id: 1, title: "Home"},
    { id: 2, title: "About" },
    { id: 3, title: "Skills" },
    { id: 4, title: "Projects" },
    { id: 5, title: "Contact" }
  ];

  const handleLinkClick = () => {
    setMenu(false);
  };

  const { themeMode, darkMode, lightMode } = useTheme();
  
  function lightModehandler(event) {
    darkMode();
  }
  function darkModeHandler(event) {
    lightMode();
  }

  const ThemeToggle = () => (
    <div className="flex space-x-2">
      {themeMode === "light" ? (
        <button onClick={lightModehandler}><MdLightMode size={25}/></button>
      ) : (
        <button onClick={darkModeHandler}><MdDarkMode size={25}/></button>
      )}
    </div>
  );

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 z-50   bg-white dark:bg-darkTheme dark:text-white transition-colors duration-300">
        <div className="flex justify-between items-center h-16">
          <ThemeToggle />
          <div>
            <ul className="hidden md:flex space-x-8 ">
              {navItems.map((data) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer font-bold "
                  key={data.id}
                >
                  <Link
                    to={data.title}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={5}
                    duration={500}
                    onClick={handleLinkClick}
                    className="text-black dark:text-white"
                  >
                    {data.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div onClick={() => setMenu(!menu)} className="md:hidden">
              <IoMdMenu size={24} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {menu && (
        <div className={`fixed inset-0 bg-white ${themeMode === "dark" ? "dark:bg-darkTheme" : ""} z-50 transition-colors duration-300`}>
          <div className="flex justify-between items-center p-4">
            <ThemeToggle />
            <button onClick={() => setMenu(false)} className="text-black dark:text-white">
              <RxCross2 size={24} />
            </button>
          </div>
          <ul className="flex flex-col items-center justify-center space-y-6 text-xl mt-52">
            {navItems.map((data) => (
              <li
                className="hover:scale-105 duration-200 font-semibold cursor-pointer"
                key={data.id}
              >
                <Link
                  to={data.title}
                  activeClass="text-blue-900"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  onClick={handleLinkClick}
                  className="text-black dark:text-white"
                >
                  {data.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;