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
    <div className="bg-white 2xl:px-[280px]">
      <Head>
        <meta name="description" content="Boostio.ai" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <NextSeo title="Boostio" description="Empower Legal Minds" />
      <div className="min-h-screen lg:mt-24">{children}</div>
      <Footer />
    </div>
  );
}
