import img from "../../assets/image/banner.png";

const Tab1 = () => {
  return (
    <div>
      <section class="bg-[#f2f2f7] mt-10">
        <div class="mx-auto w-full py-10">
          <div class="flex flex-col-reverse justify-start gap-8 sm:gap-20 lg:flex-row">
            <img src={img} alt="" class="inline-block max-w-xl" />
            <div class="flex flex-col items-start lg:justify-center">
              <p class="mb-6 max-w-md text-[#636262] md:mb-12">
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
              <p class="font-bold">John Robert</p>
              <p class="text-sm text-[#647084]">Senior Webflow Developer</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tab1;
