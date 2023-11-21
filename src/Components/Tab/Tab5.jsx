import img from "../../assets/image/banner.png";

const Tab5 = () => {
  return (
    <div>
      <section className="bg-[#f2f2f7] mt-10">
        <div className="mx-auto w-full py-10">
          <div className="flex flex-col-reverse justify-start gap-8 sm:gap-20 lg:flex-row">
            <img src={img} alt="" className="inline-block max-w-xl" />
            <div className="flex flex-col items-start lg:justify-center">
              <h2 className="text-xl font-bold mb-5">Analytics & Reports:</h2>
              <p className="mb-6 max-w-md text-[#636262] md:mb-12">
                {" "}
                Gain valuable insights into your inventory performance with Zoho
                Invent's reporting and analytics tools. Generate custom reports,
                analyze trends, and make data-driven decisions for your
                business. Monitor key metrics to identify opportunities for
                improvement and strategic growth.
                <br />
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tab5;
