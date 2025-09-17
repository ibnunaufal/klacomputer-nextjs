import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Ratings from "@/components/Rating";
import Reason from "@/components/Reason";
import ShortDescription from "@/components/ShortDescription";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "KLA Computer - Temukan Penawaran Terbaik Disini!",
  description: "KLA Computer adalah toko komputer terkemuka di Indonesia yang menawarkan berbagai pilihan laptop, aksesoris, dan perangkat teknologi lainnya dengan harga kompetitif dan layanan pelanggan terbaik.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <ShortDescription />
      <Reason />
      <Brands />
      {/* <AboutSectionOne /> */}
      {/* <AboutSectionTwo /> */}
      {/* <Testimonials /> */}
      <Ratings />
      {/* <Pricing /> */}
      <Blog />
      {/* <Contact /> */}
    </>
  );
}
