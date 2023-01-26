import React from "react";

type Props = {
  title: string;
};

const SectionHeading = ({ title }: Props) => {
  return (
    <h2
      data-aos="fade-right"
      data-aos-delay="200"
      className="section__header text-dark text-2xl sm:text-3xl font-bold capitalize relative inline-block mb-4"
    >
      {title}
    </h2>
  );
};

export default SectionHeading;
