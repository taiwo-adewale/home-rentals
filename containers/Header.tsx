import { Navbar } from ".";

const Header = () => {
  return (
    <header
      style={{
        backgroundImage: "url('assets/header.jpg')",
      }}
      className="bg-no-repeat header"
    >
      <div className="header__overlay w-full h-full">
        <div className="container">
          <Navbar />

          <div className="pt-20 pb-32 flex items-center">
            <div className="w-1/2">
              <h1 className="text-white capitalize text-5xl font-bold leading-snug">
                The most affordable place to stay in the san franciso bay area
              </h1>
            </div>

            <div className="w-1/2 flex flex-col items-end">
              <div className="w-[350px] h-[270px] bg-gray rounded-lg mb-10 mx-10"></div>
              <div className="w-[350px] h-[80px] bg-gray rounded-lg mx-10"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
