import img from "../../assets/image/banner.png";

const Tab1 = () => {
  return (
    <div>
      <section className="bg-[#f2f2f7] mt-10">
        <div className="mx-auto w-full py-10">
          <div className="flex flex-col-reverse justify-start gap-8 sm:gap-20 lg:flex-row">
            <img src={img} alt="" className="inline-block max-w-xl" />
            <div className="flex flex-col items-start lg:justify-center">
              <p className="mb-6 max-w-md text-[#636262] md:mb-12">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, “Lorem ipsum dolor sit
                amet, consectetur adipiscing elit ut aliquam, purus sit amet
                luctus venenatis, lectus magna fringilla urna, porttitor rhoncus
                dolor purus non enim.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor rhoncus dolor purus non enim.”
              </p>
              <p className="font-bold">John Robert</p>
              <p className="text-sm text-[#647084]">Senior Webflow Developer</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tab1;
