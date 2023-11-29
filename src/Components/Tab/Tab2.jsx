import img from "../../assets/image/banner.png";

const Tab2 = () => {
  return (
    <div>
      <section className="bg-[#f2f2f7] mt-10">
        <div className="mx-auto w-full py-10 px-5">
          <div className="flex flex-col-reverse justify-start gap-8 sm:gap-20 lg:flex-row">
            <img src={img} alt="" className="inline-block max-w-xl" />
            <div className="flex flex-col items-start lg:justify-center lg:px-10">
              <h2 className="text-xl font-bold mb-5">Scan Barcodes:</h2>
              <p className="mb-6 max-w-md text-[#636262] md:mb-12">
                {" "}
                Streamline your inventory processes with advanced barcode
                scanning technology. Easily add, update, and remove products by
                scanning barcodes, improving accuracy and efficiency in
                inventory management. Zoho Invent simplifies the scanning
                process, making it an integral part of your day-to-day
                operations.
                <br />
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tab2;
