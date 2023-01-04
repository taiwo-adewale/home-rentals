import "../styles/globals.css";
import type { AppProps } from "next/app";

import { Header, Footer } from "../containers";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
