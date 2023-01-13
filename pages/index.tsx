import Head from "next/head";

import {
  Testimonials,
  Description,
  Properties,
  AddProperty,
} from "../containers";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
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
