import Footer from "@/Shared/Footer";
import Navbar from "@/Shared/Navbar";
import Head from "next/head";

const RootLayout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Store</title>
        {/* Add other meta tags, stylesheets, or scripts here */}
      </Head>
      <Navbar></Navbar>

      <div>{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
