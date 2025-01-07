import React, { useEffect, useState } from "react";
// Import your navLinks, logo, menu, close, etc.
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-20 w-full py-3 px-5 transition-colors duration-300 ${
        scrolled
          ? "bg-white/10 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      {/* 
        Using a grid layout with 3 columns:
          - Left: Desktop nav links
          - Center: Logo/Title
          - Right: Mobile menu toggle + optional CTA
       */}
      <div className="max-w-7xl w-full mx-auto grid grid-cols-3 items-center">
        {/* Left Column: Desktop Nav Links */}
        <ul className="list-none hidden sm:flex flex-row gap-8 col-start-1 col-end-2">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-gray-200"
              } hover:text-white text-base font-medium cursor-pointer transition-colors duration-200`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Center Column: Logo / Title */}
        <div
          className="flex justify-center col-start-2 col-end-3"
          onClick={() => {
            setActive("");
            window.scrollTo({
              top: 0,
              behavior: "smooth", // Smooth scrolling effect
            });
          }}
        >
          <div className="flex items-center gap-2 cursor-pointer">
            <img
              src={logo}
              alt="logo"
              className="w-12 h-12 object-contain transition-transform duration-300 hover:scale-110"
            />
            <p className="text-white text-lg font-semibold">
              Sagol Gurung
              <span className="sm:inline-block hidden opacity-80"> | Fullstack Developer</span>
            </p>
          </div>
        </div>

        {/* Right Column: Mobile Toggle & Optional CTA */}
        <div className="flex justify-end items-center col-start-3 col-end-4">
          {/* Mobile Toggle (Hamburger / Close) */}
          <div className="sm:hidden">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-7 h-7 object-contain cursor-pointer transition-transform duration-300 hover:scale-110"
              onClick={() => setToggle(!toggle)}
            />
            {/* Mobile Menu */}
            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 bg-white/10 backdrop-blur-md absolute top-16 right-5 mx-4 my-2 min-w-[140px] z-10 rounded-xl shadow-lg`}
            >
              <ul className="list-none flex flex-col gap-4">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`cursor-pointer text-base font-medium transition-colors duration-200 ${
                      active === nav.title ? "text-white" : "text-gray-200"
                    }`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Optional CTA Button (Visible on Desktop) */}
          <div className="hidden sm:flex ml-4">
            <button
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-300"
              onClick={() => alert("Nice!")}
            >
              Click Me!
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
