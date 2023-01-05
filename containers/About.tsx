import Image from "next/image";

import { SectionHeading } from "../components";
import { rentalProps } from "../utils/data";

const About = () => {
  return (
    <section className="py-20">
      <div className="container">
        <SectionHeading title="minimum living cost takes care of everything" />

        <div className="flex mt-12 gap-12 items-center">
          <Image
            src="/assets/about.jpg"
            alt="minimum living cost"
            width={200}
            height={400}
            className="object-cover min-h-[300px] h-full rounded-tl-[40px] rounded-br-[50px] w-[300px] image-shadow flex-shrink-0"
          />

          <div className="grid grid-cols-3 gap-12 flex-grow">
            {rentalProps.map((prop, index) => (
              <div key={`rental-prop-${index}`} className="w-">
                <span className="rounded-xl icon-shadow p-4 inline-block mb-2">
                  {prop.icon}
                </span>
                <p className="font-medium text-lg">{prop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
