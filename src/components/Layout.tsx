/* eslint-disable prettier/prettier */
import { NextSeo } from "next-seo";
import Footer from "@/components/Footer";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import ThumbnailImage from "@/assets/screenshot.png";

interface IProps {
  title: string;
  children: any;
}

export default function Layout({ children }: IProps) {
  return (
    <div className="bg-[#0A0826] 2xl:px-[280px]">
      <Head>
        <meta name="description" content="Boostio.ai" />
        <meta property="og:title" content="Boostio" />
        <meta
          property="og:description"
          content="Maximizing Growth and Success for B2B Companies on LinkedIn"
        />
        <meta property="og:image" content={ThumbnailImage.src} />{" "}
        {/* Replace with the actual URL of your image */}
      </Head>
      <Navbar />
      <NextSeo
        title="Boostio"
        description="Maximizing Growth and Success for B2B Companies on LinkedIn"
      />
      <div className="mt-8 md:my-40 lg:mt-24" key={Math.random()}>
        {children}
      </div>
      <Footer />
    </div>
  );
}
