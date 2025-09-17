import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | KLA Computer - Temukan Penawaran Terbaik Disini!",
  description: "Ini adalah halaman tentang KLA Computer, toko komputer terkemuka di Indonesia yang menawarkan berbagai pilihan laptop, aksesoris, dan perangkat teknologi lainnya dengan harga kompetitif dan layanan pelanggan terbaik.",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
