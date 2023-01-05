import {
  RiCommunityLine,
  RiStackLine,
  RiPlantLine,
  RiShieldStarLine,
  RiEye2Line,
  RiMoneyDollarBoxLine,
} from "react-icons/ri";

interface linksType {
  link: string;
  url: string;
}

export const navbarLinks: linksType[] = [
  {
    link: "home",
    url: "#home",
  },
  {
    link: "landlords",
    url: "#landlords",
  },
  {
    link: "tenants",
    url: "#tenants",
  },
  {
    link: "contact us",
    url: "#contact",
  },
];

export const rentalProps = [
  {
    icon: <RiMoneyDollarBoxLine className="fill-primary text-2xl" />,
    description: "Pay as Little as possible!",
  },
  {
    icon: <RiCommunityLine className="fill-primary text-2xl" />,
    description: "Enjoy wisdom of community!",
  },
  {
    icon: <RiStackLine className="fill-primary text-2xl" />,
    description: "Let's somebody else take care of Landlord!",
  },
  {
    icon: <RiPlantLine className="fill-primary text-2xl" />,
    description: "Enjoy peaceful Environment!",
  },
  {
    icon: <RiShieldStarLine className="fill-primary text-2xl" />,
    description: "Stay Safe Save Money!",
  },
  {
    icon: <RiEye2Line className="fill-primary text-2xl" />,
    description: "Pay for what you use!",
  },
];
