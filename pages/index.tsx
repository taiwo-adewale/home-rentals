import Head from "next/head";
import { useEffect } from "react";
// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Testimonials,
  Description,
  Properties,
  AddProperty,
} from "../containers";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      offset: -100,
    });
  }, []);

  return (
    <>
      <Head>
        <title>Home Rentals Agency</title>
        <meta name="description" content="Low Cost Home Rental Service" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Description />
        <Properties />
        <AddProperty />
        <Testimonials />
      </main>
    </>
  );
}
