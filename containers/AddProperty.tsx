import Image from "next/image";
import { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

import { Button } from "../components";
import { images } from "../public/assets";

const AddProperty = () => {
  const [files, setFiles] = useState<any>([]);
  const [inputImages, setInputImages] = useState<any>(null);
  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    accept: {
      "image/png": [".png"],
      "image/jpg": [".jpg"],
      "image/jpeg": [".jpeg"],
    },
    noClick: true,
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        )
      );
    },
  });

  useEffect(() => {
    if (files.length > 0) {
      setInputImages(
        files?.map((file: any) => (
          <div
            key={file.name}
            className="flex flex-col flex-shrink-0 w-[100px]"
          >
            <Image
              src={file.preview}
              alt="image"
              className="w-[100px] h-[100px] object-cover flex-shrink-0"
              width={100}
              height={100}
            />
            <span className="font-bold text-sm mt-2 truncate">{file.name}</span>
          </div>
        ))
      );
    }
  }, [files]);

  return (
    <section className="py-20">
      <div className="container">
        <div className="grid grid-cols-8 items-center">
          <div className="md:mr-8 col-span-8 md:col-span-5 lg:col-span-4 hidden sm:block">
            <div className="flex items-end">
              <div className="relative rounded-3xl overflow-hidden w-[48%] mr-4">
                <Image
                  src={images.desc1}
                  alt="description"
                  className="w-full"
                />
                <div className="absolute inset-0 bg-[rgba(0,0,0,0.2)] text-center">
                  <p className="text-white text-xl px-8 py-4 font-medium">
                    Flexible Leases
                  </p>
                </div>
              </div>
              <div className="relative rounded-3xl overflow-hidden w-[52%] mr-6">
                <Image
                  src={images.desc2}
                  alt="description"
                  className="w-full"
                />
                <div className="absolute inset-0 bg-[rgba(0,0,0,0.2)] text-center">
                  <p className="text-white text-xl px-8 py-4 font-medium">
                    7-Day Happiness Guaranteed
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-start mt-6">
              <div className="relative rounded-3xl overflow-hidden w-[38%] mr-4">
                <Image
                  src={images.desc3}
                  alt="description"
                  className="w-full"
                />
                <div className="absolute inset-0 bg-[rgba(0,0,0,0.2)] text-center">
                  <p className="text-white text-xl px-8 py-4 font-medium">
                    Monthly House Cleaning
                  </p>
                </div>
              </div>
              <div className="relative rounded-3xl overflow-hidden w-[62%]">
                <Image
                  src={images.desc4}
                  alt="description"
                  className="w-full"
                />
                <div className="absolute inset-0 bg-[rgba(0,0,0,0.2)] text-center">
                  <p className="text-white text-xl px-8 py-4 font-medium">
                    Choose Your <br /> Own Roommate
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Swiper
            autoplay={{ delay: 1000, disableOnInteraction: false }}
            centeredSlides={true}
            speed={1000}
            loop={true}
            slidesPerView="auto"
            spaceBetween={20}
            modules={[Autoplay]}
            className="mySwiper sm:hidden w-full col-span-8"
          >
            <SwiperSlide className="!w-full !max-w-[250px]">
              <div className="relative rounded-3xl overflow-hidden w-full">
                <Image
                  src={images.desc1}
                  alt="description"
                  className="w-full"
                />
                <div className="absolute inset-0 bg-[rgba(0,0,0,0.2)] text-center">
                  <p className="text-white text-xl px-8 py-4 font-medium">
                    Flexible Leases
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="!w-full !max-w-[250px]">
              <div className="relative rounded-3xl overflow-hidden w-full">
                <Image
                  src={images.desc2}
                  alt="description"
                  className="w-full"
                />
                <div className="absolute inset-0 bg-[rgba(0,0,0,0.2)] text-center">
                  <p className="text-white text-xl px-8 py-4 font-medium">
                    7-Day Happiness Guaranteed
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="!w-full !max-w-[250px]">
              <div className="relative rounded-3xl overflow-hidden w-full">
                <Image
                  src={images.desc3}
                  alt="description"
                  className="w-full"
                />
                <div className="absolute inset-0 bg-[rgba(0,0,0,0.2)] text-center">
                  <p className="text-white text-xl px-8 py-4 font-medium">
                    Monthly House Cleaning
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="!w-full !max-w-[250px]">
              <div className="relative rounded-3xl overflow-hidden w-full">
                <Image
                  src={images.desc4}
                  alt="description"
                  className="w-full"
                />
                <div className="absolute inset-0 bg-[rgba(0,0,0,0.2)] text-center">
                  <p className="text-white text-xl px-8 py-4 font-medium">
                    Choose Your <br /> Own Roommate
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <div className="md:ml-2 col-span-8 md:col-span-3 lg:col-span-4">
            <h3 className="font-bold text-3xl mb-6 mt-12 md:mt-0">
              Flexibility and options to suit your lifestyle.
            </h3>
            <p className="mb-8">
              You need it? We got it. We make finding your next home easy,
              comfortable, and simple. From our happiness guarantee to our
              selective roommate finder option. We provide you the flexibility
              that you most desire.
            </p>
            <div>
              <Button>Search Rooms</Button>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <p className="mb-8 text-center font-bold text-xl">
            Your property with us and be Confident that Your Room will be Filled
            Out!
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="contact-shadow bg-white rounded-xl xs:px-6 xs:py-8 px-8 py-10 sm:p-[60px]"
          >
            <h3 className="text-2xl text-primary text-center font-bold">
              Add A New Property
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 sm:mt-12 xl:mt-14">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Enter Name" />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input type="text" id="address" placeholder="Enter Address" />
              </div>
              <div className="form-group">
                <label htmlFor="unit">Unit Number</label>
                <input type="number" id="unit" placeholder="Enter Unit" />
              </div>
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input type="text" id="city" placeholder="Enter City" />
              </div>
              <div className="form-group">
                <label htmlFor="state">State</label>
                <input type="text" id="state" placeholder="Enter State" />
              </div>
              <div className="form-group">
                <label htmlFor="room-type">Room Type</label>
                <input type="text" id="room-type" placeholder="Room Type" />
              </div>
              <div className="form-group">
                <label htmlFor="price">Price</label>
                <input type="number" id="price" placeholder="Enter Price" />
              </div>
              <div className="form-group">
                <label htmlFor="room-type">Room Type</label>
                <input type="text" id="room-type" placeholder="Room Type" />
              </div>
            </div>

            <div className="w-full mt-6">
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  placeholder="Enter Description"
                  className="h-[150px]"
                />
              </div>
            </div>

            <div className="w-full mt-6">
              <label htmlFor="photos">Upload photos</label>
              <div
                {...getRootProps()}
                className={`border border-dashed border-primary flex-center p-6 rounded-xl text-center mt-2 ${
                  isDragActive ? "bg-[rgba(0,0,0,0.1)]" : "bg-white"
                }`}
              >
                <div>
                  {isDragActive ? (
                    <p className="font-bold block mb-2">Drop Images Here</p>
                  ) : (
                    <>
                      <p className="font-bold block mb-2">
                        Drag your images here, or{" "}
                        <span
                          onClick={open}
                          className="text-primary mb-8 cursor-pointer"
                        >
                          browse
                        </span>
                      </p>
                    </>
                  )}
                  <p className="text-sm text-[rgba(0,0,0,0.5)] font-bold">
                    Supported: JPG, JPEG, PNG
                  </p>

                  <input {...getInputProps()} />
                </div>
              </div>
            </div>

            {inputImages && (
              <div className="w-full flex flex-wrap gap-4 mt-8">
                {inputImages}
              </div>
            )}

            <div className="w-full text-center mt-12">
              <Button className="xs:px-6 px-8 sm:px-20 text-base">
                Add New Property
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddProperty;
