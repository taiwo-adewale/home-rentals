import Image from "next/image";
import { MdLocationOn, MdPhone, MdPrint } from "react-icons/md";
import {
  FaFacebookSquare,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaGooglePlusG,
  FaPinterest,
  FaRss,
} from "react-icons/fa";

import { footerLinks } from "../utils/data";
import { images } from "../public/assets";

const Footer = () => {
  return (
    <footer className="mt-32">
      <div className="container">
        <div className="border-t-primary border-t-2 flex justify-center">
          <div className="w-full sm:w-[90%]">
            <div className="grid grid-cols-10 py-16 xl:py-20">
              <div className="flex-center col-span-10 md:col-span-4 xl:col-span-5 md:pr-8">
                <div className="bg-primary px-10 xl:px-12 py-6 rounded-md">
                  <Image src={images.logo} alt="logo" />
                </div>
              </div>

              <div className="flex flex-col col-span-10 md:col-span-6 xl:col-span-5 mt-12 md:mt-0 items-center md:items-start">
                <div className="flex items-center">
                  <MdLocationOn className="mr-2 fill-primary text-lg" />
                  <p className="text-sm text-dark">
                    345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345
                  </p>
                </div>

                <div className="grid grid-cols-2 mt-4 w-full">
                  <div className="flex items-center justify-end md:justify-start mr-8 xs:mr-4">
                    <MdPhone className="mr-2 fill-primary text-lg" />
                    <p className="text-sm text-dark">(123) 456-7890</p>
                  </div>
                  <div className="flex items-center">
                    <MdPrint className="mr-2 fill-primary text-lg" />
                    <p className="text-sm text-dark">(123) 456-7890</p>
                  </div>
                </div>

                <div className="flex flex-wrap sm:flex-nowrap gap-x-6 gap-y-4 items-center mt-8 justify-center md:justify-start">
                  <span className="text-altGray text-sm flex-shrink-0">
                    Social Media
                  </span>

                  <div className="flex flex-wrap lg:flex-nowrap gap-x-6 gap-y-4 items-center justify-center">
                    <a
                      data-aos="zoom-in"
                      data-aos-delay="0"
                      href="http://wale-portfolio.netlify.app/"
                    >
                      <FaFacebookSquare className="fill-primary text-lg cursor-pointer" />
                    </a>
                    <a
                      data-aos="zoom-in"
                      data-aos-delay="20"
                      href="http://wale-portfolio.netlify.app/"
                    >
                      <FaTwitter className="fill-primary text-lg cursor-pointer" />
                    </a>
                    <a
                      data-aos="zoom-in"
                      data-aos-delay="40"
                      href="http://wale-portfolio.netlify.app/"
                    >
                      <FaLinkedinIn className="fill-primary text-lg cursor-pointer" />
                    </a>
                    <a
                      data-aos="zoom-in"
                      data-aos-delay="60"
                      href="http://wale-portfolio.netlify.app/"
                    >
                      <FaFacebookSquare className="fill-primary text-lg cursor-pointer" />
                    </a>
                    <a
                      data-aos="zoom-in"
                      data-aos-delay="80"
                      href="http://wale-portfolio.netlify.app/"
                    >
                      <FaYoutube className="fill-primary text-lg cursor-pointer" />
                    </a>
                    <a
                      data-aos="zoom-in"
                      data-aos-delay="100"
                      href="http://wale-portfolio.netlify.app/"
                    >
                      <FaInstagram className="fill-primary text-lg cursor-pointer" />
                    </a>
                    <a
                      data-aos="zoom-in"
                      data-aos-delay="120"
                      href="http://wale-portfolio.netlify.app/"
                    >
                      <FaGooglePlusG className="fill-primary text-lg cursor-pointer" />
                    </a>
                    <a
                      data-aos="zoom-in"
                      data-aos-delay="140"
                      href="http://wale-portfolio.netlify.app/"
                    >
                      <FaPinterest className="fill-primary text-lg cursor-pointer" />
                    </a>
                    <a
                      data-aos="zoom-in"
                      data-aos-delay="160"
                      href="http://wale-portfolio.netlify.app/"
                    >
                      <FaRss className="fill-primary text-lg cursor-pointer" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-t-[rgba(123,185,152,0.2)]">
              <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between pt-6 pb-12">
                <ul className="flex flex-wrap sm:flex-nowrap justify-center gap-y-4 gap-x-6">
                  {footerLinks.map((link, index) => (
                    <li
                      key={`footer-link-${index}`}
                      className="uppercase text-dark text-sm"
                    >
                      <a href="#">{link}</a>
                    </li>
                  ))}
                </ul>

                <p className="text-altGray text-sm pt-6 lg:pt-0 text-center">
                  Copyright © 2020 Minimumlivingcost. All rights reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
