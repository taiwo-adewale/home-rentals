import React from "react";

type Props = {
  title: string;
};

const SectionHeading = ({ title }: Props) => {
  return <h2 className="text-dark text-3xl font-bold">{title}</h2>;
};

export default SectionHeading;
