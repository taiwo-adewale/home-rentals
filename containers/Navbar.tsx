import { navbarLinks } from "../utils/data";

const Navbar = () => {
  return (
    <nav className="pt-5 border-b-2 border-[rgba(255,255,255,0.5)] flex">
      <img src="./assets/logo-1.png" alt="logo" className="pb-5" />

      <ul className="flex flex-grow justify-center mr-[150px] items-end gap-8">
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
    </nav>
  );
};

export default Navbar;
