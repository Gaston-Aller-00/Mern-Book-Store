import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
//iconos
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";

import { AuthContext } from "../contects/AuthProvider";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const  {user} = useContext(AuthContext)

  //menu toggle

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  //nav items

  const navItems = [
    { link: "Home", path: "/" },
    // { link: "About", path: "/about" },
    { link: "Shop", path: "/shop" },
    { link: "Sell Your Book", path: "/admin/dashboard/upload" },
    // { link: "Blog", path: "/blog" },
  ];

  return (
    <header  className="w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300">
      <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-blue-300 transition-all duration-300 " : ""} `}>
        <div className="flex justify-between items-center text-base gap-8">
          {/* logo */}
          <Link to="shop" className="text-2xl font-bold text-blue-700">
            <FaBlog className="inline-block" />
            Books
          </Link> 

          {/*  nav items para LG */}

          <ul className="md:flex space-x-12 hidden ">
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                className="block text-base text-black uppercase cursor-pointer hover:text-blue-700"
              >
                {link}
              </Link>
            ))}
          </ul>
          {/* btn para LG */}
          <div className="space-x-12 hidden lg:flex items-center">
            <button>
              <Link to="/logout">
            <FaUserAlt className="w-5 hover:text-blue-700 mr-4 marker:" />
            </Link>
              <FaBarsStaggered className="w-5 hover:text-blue-700 mr-4 sm:hidden" />
            </button>
            {
              user? user.email : ""
            }
          </div>

          {/* menu btn for mobiles  */}

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none mt-2"
            >
              {isMenuOpen ? (
                <FaXmark className="h-5 w-5 text-black" />
              ) : (
                <FaBarsStaggered className="h-5 w-5 text-black" />
              )}
            </button>
          </div>
        </div>

        {/* nav items para SM devices  */}
        <div
          className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${
            isMenuOpen ? "block fixed  top-0 right-0 left-0" : "hidden"
          } `}
        >
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              className="block text-base text-white uppercase cursor-pointer "
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
