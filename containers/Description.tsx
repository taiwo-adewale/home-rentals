import Image from "next/image";

import { SectionHeading } from "../components";
import { rentalProps } from "../utils/data";

const Description = () => {
  return (
    <section className="py-20">
      <div className="container">
        <SectionHeading title="minimum living cost takes care of everything" />

        <div className="flex flex-wrap lg:flex-nowrap mt-12 gap-12 items-center justify-center">
          <Image
            src="/assets/about.jpg"
            alt="minimum living cost"
            width={200}
            height={400}
            className="object-cover min-h-[300px] h-full rounded-tl-[40px] rounded-br-[50px] w-[300px] image-shadow flex-shrink-0"
          />

          <div className="grid xs399:grid-cols-1 grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-x-12 xl:gap-16 flex-grow w-full md:w-auto">
            {rentalProps.map((prop, index) => (
              <div
                key={`rental-prop-${index}`}
                data-aos="zoom-in"
                className="text-center lg:text-start"
              >
                <span className="rounded-xl icon-shadow p-4 inline-block mb-2">
                  {prop.icon}
                </span>
                {prop.description}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;
