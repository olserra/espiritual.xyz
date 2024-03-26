/* eslint-disable prettier/prettier */
import { NextSeo } from "next-seo";
import Footer from "@/components/Footer";
import Head from "next/head";
import Navbar from "@/components/Navbar";

interface IProps {
  title: string;
  children: any;
}

export default function Layout({ children }: IProps) {
  return (
    <div className="bg-[#0A0826] 2xl:px-[280px]">
      <Head>
        <meta name="description" content="Boostio.ai" />
        <meta property="og:image" content="@/assets/screenshot.png" />
      </Head>
      <Navbar />
      <NextSeo
        title="Boostio"
        description="Personalize AI with Your Metadata"
      />
      <div className="mt-8 md:my-40 lg:mt-24" key={Math.random()}>
        {children}
      </div>
      <Footer />
    </div>
  );
}
