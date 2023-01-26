import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "@next/font/google";

import { Header, Footer } from "../containers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} font-sans`}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
