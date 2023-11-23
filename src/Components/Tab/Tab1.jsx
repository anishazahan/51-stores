import img from "../../assets/image/banner.png";

const Tab1 = () => {
  return (
    <div>
      <section className="bg-[#f2f2f7] mt-10">
        <div className="mx-auto w-full py-10 px-10">
          <div className="flex flex-col-reverse justify-start  gap-20 lg:flex-row">
            <img src={img} alt="" className="inline-block max-w-xl" />
            <div className="flex flex-col items-start lg:justify-center px-10">
              <h2 className="text-xl font-bold mb-5">Track Inventory:</h2>
              <p className="mb-6 max-w-md text-[#636262] md:mb-12">
                {" "}
                Efficiently monitor and manage your inventory in real-time.
                Track stock levels, product movements, and receive alerts for
                low stock. Zoho Invent ensures accurate and up-to-date
                information on your inventory, empowering you to make informed
                decisions and prevent stockouts.
                <br />
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tab1;
