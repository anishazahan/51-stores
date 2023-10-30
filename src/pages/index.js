import Banner from "@/Components/Banner/Banner";
import FAQ from "@/Components/FAQ/FAQ";
import Feature from "@/Components/Feature/Feature";
import RootLayout from "@/Components/Layout.js/RootLayout";
import Testimonial from "@/Components/Testimonial/Testimonial";
import Footer from "@/Shared/Footer";
import Navbar from "@/Shared/Navbar";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Feature></Feature>
      <FAQ></FAQ>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
