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
    <div className="bg-white mx-auto md:max-w-[1400px]">
      <Head>
        <meta name="description" content="espiritual.xyz" />
        <meta property="og:title" content="espiritual.xyz" />
        <meta
          property="og:description"
          content="Empowering Personal Growth through Spiritual Connection"
        />
        <meta property="og:image" content={ThumbnailImage.src} />{" "}
      </Head>
      <Navbar />
      <NextSeo
        title="espiritual.xyz"
        description="Empowering Personal Growth through Spiritual Connection"
      />
      <div key={Math.random()}>{children}</div>
      <Footer />
    </div>
  );
}
