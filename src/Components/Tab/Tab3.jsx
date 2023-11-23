import img from "../../assets/image/banner.png";

const Tab3 = () => {
  return (
    <div>
      <section className="bg-[#f2f2f7] mt-10">
        <div className="mx-auto w-full py-10">
          <div className="flex flex-col-reverse justify-start gap-8 sm:gap-20 lg:flex-row">
            <img src={img} alt="" className="inline-block max-w-xl" />
            <div className="flex flex-col items-start lg:justify-center px-10">
              <h2 className="text-xl font-bold mb-5">Manage Orders:</h2>
              <p className="mb-6 max-w-md text-[#636262] md:mb-12">
                {" "}
                Simplify order processing with Zoho Invent's robust order
                management system. Track orders, manage order fulfillment, and
                optimize order processing workflows. Ensure seamless
                transactions and timely delivery, enhancing customer
                satisfaction and operational efficiency.
                <br />
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tab3;
