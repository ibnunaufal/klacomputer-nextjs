import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | KLA Computer - Temukan Penawaran Terbaik Disini!",
  description: "Ini adalah halaman kontak KLA Computer, tempat Anda dapat menghubungi kami untuk pertanyaan, dukungan pelanggan, atau informasi lebih lanjut tentang produk dan layanan kami.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
