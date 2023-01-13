import {
  RiCommunityLine,
  RiStackLine,
  RiPlantLine,
  RiShieldStarLine,
  RiEye2Line,
  RiMoneyDollarBoxLine,
} from "react-icons/ri";

import { images } from "../public/assets";

interface linksType {
  link: string;
  url: string;
}

interface propertiesType {
  image: any;
  address: string;
  price: number;
  bedRooms: number;
  bathRooms: number;
  livingRooms: number;
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
    description: (
      <p className="xl:text-lg font-medium">
        Pay as Little <br />
        as possible!
      </p>
    ),
  },
  {
    icon: <RiCommunityLine className="fill-primary text-2xl" />,
    description: (
      <p className="xl:text-lg font-medium">
        Enjoy wisdom <br />
        of community!
      </p>
    ),
  },
  {
    icon: <RiStackLine className="fill-primary text-2xl" />,
    description: (
      <p className="xl:text-lg font-medium">
        Let&apos;s somebody else <br />
        take care of Landlord!
      </p>
    ),
  },
  {
    icon: <RiPlantLine className="fill-primary text-2xl" />,
    description: (
      <p className="xl:text-lg font-medium">
        Enjoy peaceful <br />
        Environment!
      </p>
    ),
  },
  {
    icon: <RiShieldStarLine className="fill-primary text-2xl" />,
    description: (
      <p className="xl:text-lg font-medium">
        Stay Safe! <br />
        Save Money!
      </p>
    ),
  },
  {
    icon: <RiEye2Line className="fill-primary text-2xl" />,
    description: (
      <p className="xl:text-lg font-medium">
        Pay for what <br />
        you use!
      </p>
    ),
  },
];

export const properties: propertiesType[] = [
  {
    image: images.property1,
    address: "2578 Folsom street, san francisco, CA, 94110",
    price: 1700,
    bedRooms: 5,
    bathRooms: 3,
    livingRooms: 2,
  },
  {
    image: images.property2,
    address: "2578 Folsom street, san francisco, CA, 94110",
    price: 1200,
    bedRooms: 4,
    bathRooms: 2,
    livingRooms: 1,
  },
  {
    image: images.property3,
    address: "2578 Folsom street, san francisco, CA, 94110",
    price: 1050,
    bedRooms: 3,
    bathRooms: 1,
    livingRooms: 1,
  },
  {
    image: images.property4,
    address: "2578 Folsom street, san francisco, CA, 94110",
    price: 2300,
    bedRooms: 6,
    bathRooms: 5,
    livingRooms: 3,
  },
  {
    image: images.property5,
    address: "2578 Folsom street, san francisco, CA, 94110",
    price: 1450,
    bedRooms: 3,
    bathRooms: 3,
    livingRooms: 2,
  },
  {
    image: images.property6,
    address: "2578 Folsom street, san francisco, CA, 94110",
    price: 1600,
    bedRooms: 4,
    bathRooms: 2,
    livingRooms: 1,
  },
  {
    image: images.property5,
    address: "2578 Folsom street, san francisco, CA, 94110",
    price: 1450,
    bedRooms: 3,
    bathRooms: 3,
    livingRooms: 2,
  },
  {
    image: images.property6,
    address: "2578 Folsom street, san francisco, CA, 94110",
    price: 1600,
    bedRooms: 4,
    bathRooms: 2,
    livingRooms: 1,
  },
  {
    image: images.property1,
    address: "2578 Folsom street, san francisco, CA, 94110",
    price: 1700,
    bedRooms: 5,
    bathRooms: 3,
    livingRooms: 2,
  },
  {
    image: images.property2,
    address: "2578 Folsom street, san francisco, CA, 94110",
    price: 1200,
    bedRooms: 4,
    bathRooms: 2,
    livingRooms: 1,
  },
  {
    image: images.property3,
    address: "2578 Folsom street, san francisco, CA, 94110",
    price: 1050,
    bedRooms: 3,
    bathRooms: 1,
    livingRooms: 1,
  },
  {
    image: images.property4,
    address: "2578 Folsom street, san francisco, CA, 94110",
    price: 2300,
    bedRooms: 6,
    bathRooms: 5,
    livingRooms: 3,
  },
  {
    image: images.property4,
    address: "2578 Folsom street, san francisco, CA, 94110",
    price: 2300,
    bedRooms: 6,
    bathRooms: 5,
    livingRooms: 3,
  },
  {
    image: images.property2,
    address: "2578 Folsom street, san francisco, CA, 94110",
    price: 1200,
    bedRooms: 4,
    bathRooms: 2,
    livingRooms: 1,
  },
  {
    image: images.property3,
    address: "2578 Folsom street, san francisco, CA, 94110",
    price: 1050,
    bedRooms: 3,
    bathRooms: 1,
    livingRooms: 1,
  },
  {
    image: images.property5,
    address: "2578 Folsom street, san francisco, CA, 94110",
    price: 1450,
    bedRooms: 3,
    bathRooms: 3,
    livingRooms: 2,
  },
  {
    image: images.property6,
    address: "2578 Folsom street, san francisco, CA, 94110",
    price: 1600,
    bedRooms: 4,
    bathRooms: 2,
    livingRooms: 1,
  },
  {
    image: images.property1,
    address: "2578 Folsom street, san francisco, CA, 94110",
    price: 1700,
    bedRooms: 5,
    bathRooms: 3,
    livingRooms: 2,
  },
];

export const footerLinks = [
  "about us",
  "contact",
  "help",
  "privacy policy",
  "disclaimer",
];

export const testimonials = [
  {
    testifier: "Harry Wilson",
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel pellentesque est. Curabitur at odio sit amet libero vulputate efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa, faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus fringilla finibus.",
    status: "Property Owner",
    image: images.owner3,
  },
  {
    testifier: "Sophia Chike",
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel pellentesque est. Curabitur at odio sit amet libero vulputate efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa, faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus fringilla finibus.",
    status: "Property Owner",
    image: images.owner2,
  },
  {
    testifier: "Jake Black",
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel pellentesque est. Curabitur at odio sit amet libero vulputate efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa, faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus fringilla finibus.",
    status: "Property Owner",
    image: images.owner1,
  },
];
