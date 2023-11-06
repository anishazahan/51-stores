import Image from "next/image";
import img from "../../assets/image/download (15).jpeg";

const Pairy = () => {
  return (
    <div>
      <h2 className="font-bold text-3xl text-center mx-auto my-10 px-5">
        Pair any number of kitchen displays and printers with <br /> any number
        of POS devices
      </h2>
      <div className="relative w-[60%] h-[50%] mx-auto z-0">
        <Image className="mx-auto w-full h-full  " src={img} alt="" />
        <div className="absolute w-full h-full inset-0 z-10 bg-black/40"></div>
      </div>
    </div>
  );
};

export default Pairy;
