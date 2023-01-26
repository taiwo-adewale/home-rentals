import { MdSearch } from "react-icons/md";
import { HiOutlineChevronDown } from "react-icons/hi";

import { Navbar } from "../components";

const Header = () => {
  return (
    <header
      style={{
        backgroundImage: "url('assets/header.jpg')",
      }}
      className="bg-no-repeat header bg-cover"
    >
      <div className="header__overlay w-full h-full">
        <div className="container">
          <Navbar />

          <div className="pt-20 pb-32 flex flex-wrap lg:flex-nowrap items-center">
            <div className="w-full lg:w-[45%] xl:w-1/2">
              <h1
                data-aos="zoom-in"
                className="text-white capitalize text-[36px] sm:text-[44px] xl:text-5xl font-bold !leading-[1.3] sm:!leading-[1.5] text-center lg:text-start"
              >
                The most affordable place to stay in the san franciso bay area
              </h1>
            </div>

            <div className="w-full pt-20 lg:pt-0 lg:pl-8 lg:w-[55%] xl:w-1/2 border-none flex-center">
              <div className="flex flex-col w-full md:w-[80%]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10026.545848631416!2d-91.0742849320869!3d30.41658547195612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8626a4bb18fb0711%3A0x550ed379b5aa2284!2sLouisiana%20USA%20Federal%20Credit%20Union!5e0!3m2!1sen!2sng!4v1674768457544!5m2!1sen!2sng"
                  width="400"
                  height="350"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl w-full mb-8 lg:mb-14"
                />

                <div className="w-full rounded-2xl bg-white order border-[rgba(0,0,0,0.2)] scr450:py-6 py-4 px-6">
                  <div className="flex flex-wrap sm:flex-nowrap bg-[#f9f9f9] rounded-md overflow-hidden border border-[#e6e6e6]">
                    <div className="scr450:w-full scr450:border-b scr450:border-b-[#e6e6e6] scr450:border-r w-[35%] space-x-2 border-r-2 border-r-[#e6e6e6] flex-center py-4 px-2 font-medium">
                      <span>All type</span>
                      <HiOutlineChevronDown />
                    </div>
                    <div className="scr450:w-full scr450:border-b scr450:border-b-[#e6e6e6] scr450:border-r w-[50%] space-x-2 border-r-2 border-r-[#e6e6e6] flex-center py-4 px-2 font-medium">
                      <span>Neighbourhood</span>
                      <HiOutlineChevronDown />
                    </div>
                    <div className="scr450:w-full scr450:border-b scr450:border-b-[#e6e6e6] py-3 bg-[#23A6F0] w-[15%] flex-center cursor-pointer">
                      <MdSearch className="fill-white text-2xl" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
