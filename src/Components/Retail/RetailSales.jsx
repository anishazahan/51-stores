import Image from "next/image";
import img from "../../assets/image/Online-Retail-Business.png";

const RetailSales = () => {
  return (
    <div>
      <section>
        <div className="px-5 py-16 md:px-10">
          <div className="mx-auto mb-8 max-w-3xl text-center md:mb-12 lg:mb-16">
            <h2 className="text-3xl font-bold md:text-5xl">
              Focus your efforts on building your best product
            </h2>
            <p className="mx-auto mb-8 mt-4 max-w-lg text-[#647084] md:mb-12 lg:mb-16">
              Sales by item analytics allow the best-selling items to be
              determined and therefore, the right purchasing decisions can be
              made.
            </p>

            <div className="flex justify-center">
              <div className="mr-6 md:mr-10 lg:mr-12">
                <h3 className="text-2xl font-bold text-[#276ef1] md:text-3xl">
                  45k+
                </h3>
                <p className="text-sm text-[#636262]">Happy Customers</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#276ef1] md:text-3xl">
                  200K+
                </h3>
                <p className="text-sm text-[#636262]">Reviews</p>
              </div>
            </div>
          </div>

          {/* <Image className="h-[500px] object-cover w-full" src={img} alt="" /> */}
        </div>
      </section>
    </div>
  );
};

export default RetailSales;
