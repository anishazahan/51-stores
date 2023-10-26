import Banner from "@/Components/Banner/Banner";
import RootLayout from "@/Components/Layout.js/RootLayout";
import Navbar from "@/Shared/Navbar";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
