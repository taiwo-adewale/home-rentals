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
            <div className="w-full lg:w-1/2">
              <h1 className="text-white capitalize text-[40px] sm:text-[44px] xl:text-5xl font-bold !leading-[1.5] text-center lg:text-start">
                The most affordable place to stay in the san franciso bay area
              </h1>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end justify-center">
              <div className="w-full max-w-[350px] h-[270px] bg-gray rounded-lg mt-20 lg:mt-0 mb-10 mx-10"></div>
              <div className="w-full max-w-[350px] h-[80px] bg-gray rounded-lg mx-10"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
