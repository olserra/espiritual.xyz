import { NextSeo } from "next-seo";
import Footer from "@/components/Footer";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import BoostioPrintSEO from "@/assets/boostio-print-seo.png";
import { StaticImageData } from "next/image";

interface IProps {
  title: string;
  children: any;
}

export default function Layout({ children }: IProps) {
  const boostioPrintSEO: StaticImageData = BoostioPrintSEO;

  return (
    <div className="bg-white 2xl:px-[280px]">
      <Head>
        <meta name="description" content="Boostio.ai" />
        <meta property="og:title" content="BoostioAI" />
        <meta
          property="og:description"
          content="Find the right developer for the right task"
        />
        <meta property="og:image" content={boostioPrintSEO.src} />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="10" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <NextSeo
        title="Boostio"
        description="Find the right developer for the right task"
      />
      <div className="min-h-screen lg:mt-24">{children}</div>
      <Footer />
    </div>
  );
}
