import Image from "next/image";
import { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

import { navbarLinks } from "../utils/data";
import { images } from "../public/assets";

const Navbar = () => {
  const [isNavMobileActive, setIsNavMobileActive] = useState(false);

  useEffect(() => {
    if (isNavMobileActive) {
      document.querySelector("body")?.classList.add("overflow-y-hidden");
    } else {
      document.querySelector("body")?.classList.remove("overflow-y-hidden");
    }
  }, [isNavMobileActive]);

  return (
    <>
      <nav className="pt-5 border-b-2 border-[rgba(255,255,255,0.5)] flex">
        <Image src={images.logo} alt="logo" className="pb-5" />

        <ul className="hidden lg:flex flex-grow justify-center mr-[150px] items-end gap-8">
          {navbarLinks.map((link, index) => (
            <li
              key={link.url}
              className={`text-white capitalize relative hover:bg-[rgba(0,0,0,0.05)] t-300 ${
                index === 0 && "nav__active"
              }`}
            >
              <a href={link.url} className="px-3 py-5 inline-block">
                {link.link}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="ml-auto p-2 lg:hidden"
          onClick={() => setIsNavMobileActive(true)}
        >
          <HiMenuAlt3 className="fill-white text-3xl" />
        </button>
      </nav>

      <div
        onClick={() => setIsNavMobileActive(false)}
        className={`fixed inset-0 z-[105] bg-[rgba(0,0,0,0.5)] lg:!opacity-0 transition-all duration-500 ${
          isNavMobileActive
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      <nav
        className={`fixed lg:hidden top-0 bottom-0 w-full h-full bg-white max-w-[300px] z-[109] shadow-lg transition-all duration-500 ${
          isNavMobileActive ? "left-0" : "-left-full"
        }`}
      >
        <div className="w-full h-full relative py-20 px-6 overflow-y-auto">
          <span
            className="absolute top-4 right-6 p-2 cursor-pointer"
            onClick={() => setIsNavMobileActive(false)}
          >
            <HiX className="fill-[#767676] text-3xl" />
          </span>

          <ul className="flex flex-col w-full space-y-8">
            {navbarLinks.map((link) => (
              <li key={`nav-mobile-${link.url}`}>
                <a
                  href={link.url}
                  onClick={() => setIsNavMobileActive(false)}
                  className="capitalize p-2"
                >
                  {link.link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
