import Navbar from "@/Shared/Navbar";

const RootLayout = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>

      <div>{children}</div>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default RootLayout;
