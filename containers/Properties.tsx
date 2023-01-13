import Image from "next/image";
import { useState } from "react";

import { SectionHeading, Button, Pagination } from "../components";
import { properties } from "../utils/data";
import { TaBed, TaShower, TaSize } from "../public/assets/icons";

const Properties = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  return (
    <section className="bg-[#f5f5f5] py-20">
      <div className="container">
        <div className="flex justify-between items-center flex-wrap gap-y-4 gap-x-8 w-full">
          <SectionHeading title="list of properties" />

          <div className="hidden sm:flex">
            <Button>View All Property</Button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-10 gap-y-12 mt-12">
          {properties
            .slice((currentPage - 1) * 6, currentPage * 6)
            .map((property, index) => (
              <div
                key={`property-${index}`}
                className="property-shadow xs:rounded-2xl rounded-[26px] overflow-hidden flex flex-col"
              >
                <Image src={property.image} alt={property.address} />

                <div className="bg-white border border-[#979797] xs:rounded-b-2xl rounded-b-[26px] border-t-0">
                  <div className=" p-4 sm:p-6">
                    <p className="text-black mb-2 sm:mb-4 capitalize text-lg sm:text-xl font-bold">
                      {property.address}
                    </p>
                    <span className="mb-2 text-gray text-xs sm:text-sm">
                      Private Room
                    </span>
                    <span className="text-primary text-xl sm:text-2xl block font-bold">
                      ${property.price}/Month
                    </span>
                  </div>

                  <div className="border-t border-t-[#e4e4e4] grid grid-cols-3">
                    <div className="border-r border-r-[#e4e4e4] flex-center py-4 md:py-6 px-4 md:px-8">
                      <TaBed className="w-3 md:w-4 h-3 md:h-4" />
                      <span className="ml-2 text-sm sm:text-base font-bold text-black">
                        {property.bedRooms}
                      </span>
                    </div>
                    <div className="border-r border-r-[#e4e4e4] flex-center py-4 md:py-6 px-4 md:px-8">
                      <TaShower className="w-3 md:w-4 h-3 md:h-4" />
                      <span className="ml-2 text-sm sm:text-base font-bold text-black">
                        {property.bathRooms}
                      </span>
                    </div>
                    <div className="flex-center py-4 md:py-6 px-4 md:px-8">
                      <TaSize className="w-3 md:w-4 h-3 md:h-4" />
                      <span className="ml-2 text-sm sm:text-base font-bold text-black">
                        {property.livingRooms}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="flex justify-center mt-14 sm:mt-20">
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </section>
  );
};

export default Properties;
