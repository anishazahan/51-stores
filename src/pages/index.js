import RootLayout from "@/Components/Layout.js/RootLayout";
import Navbar from "@/Shared/Navbar";

export default function Home() {
  return (
    <div className="">
      <Navbar></Navbar>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
