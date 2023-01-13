import Image from "next/image";
import { HiMenuAlt3 } from "react-icons/hi";

import { navbarLinks } from "../utils/data";
import { images } from "../public/assets";

const Navbar = () => {
  return (
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

      <button className="ml-auto p-2 lg:hidden">
        <HiMenuAlt3 className="fill-white text-3xl" />
      </button>
    </nav>
  );
};

export default Navbar;
