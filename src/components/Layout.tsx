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
          content="Bridging AI and Data to personalize your content, Either create a post on LinkedIn or a video to advocate for your brand, we got you covered. We analyze your content and provide insights to help you make data-driven decisions."
        />
        <meta property="og:image" content={ThumbnailImage.src} />{" "}
      </Head>
      <Navbar />
      <NextSeo
        title="Boostio"
        description="Bridging AI and Data to personalize your content, Either create a post on LinkedIn or a video to advocate for your brand, we got you covered. We analyze your content and provide insights to help you make data-driven decisions."
      />
      <div className="mt-8 md:my-40 lg:mt-24" key={Math.random()}>
        {children}
      </div>
      <Footer />
    </div>
  );
}
