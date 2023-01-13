import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import { images } from "../public/assets";
import { testimonials } from "../utils/data";

const Testimonials = () => {
  return (
    <section className="bg-[rgba(244,81,30,0.07)]">
      <div className="container">
        <div className="grid grid-cols-10 items-center">
          <Swiper
            autoplay={{ delay: 3000 }}
            speed={1000}
            loop={true}
            slidesPerView={1}
            spaceBetween={30}
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            className="mySwiper my-10 xl:my-12 col-span-10 md:col-span-5 lg:col-span-6 w-full !pb-10 order-2 md:order-1"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide
                key={`slide-${index}`}
                style={{ backgroundImage: `url('${images.quote.src}')` }}
                className="py-6 px-6 sm:px-8 bg-no-repeat bg-[50px,50px]"
              >
                <p>{item.testimony}</p>

                <div className="flex items-center mt-6">
                  <Image
                    src={item.image}
                    alt={item.status}
                    width={50}
                    height={50}
                    className="w-[50px] h-[50px] flex-shrink-0 mr-5 rounded-full border-2 border-primary"
                  />
                  <div className="flex flex-col">
                    <span className="font-bold text-primary text-sm">
                      {item.testifier}
                    </span>
                    <span className="text-sm">{item.status}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="col-span-10 md:col-span-5 lg:col-span-4 relative mt-12 md:mt-0 order-1 md:order-2">
            <Image
              src={images.about}
              alt="lounge"
              width={300}
              height={300}
              className="w-full"
            />
            <div className="about__overlay absolute inset-0 flex-center">
              <a
                href="https://www.youtube.com/watch?v=bMknfKXIFA8"
                className="bg-primary flex-center rounded-full p-5 cursor-pointer"
              >
                <FaPlay className="fill-white text-sm" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
