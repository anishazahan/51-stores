import React from "react";

const GetStarted = () => {
  return (
    <div>
      <section>
        <div class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 ">
          <div class="bg-[#f2f2f7] p-8 text-center sm:p-10 md:p-16">
            <h2 class="mb-4 text-3xl font-bold md:text-4xl">
              Join the 51 Cash Inventory
            </h2>
            <p class="mx-auto mb-6 max-w-2xl text-[#647084] md:mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna
            </p>

            <form
              name="email-form"
              method="get"
              class="relative mx-auto mb-4 flex w-full max-w-2xl flex-col items-start justify-center sm:flex-row"
            >
              <input
                type="email"
                class="mb-3 mr-6 block h-9 w-full bg-white px-6 py-7 text-sm text-[#333333] focus:border-primary"
                placeholder="Enter your email"
                required=""
              />
              <input
                type="submit"
                value="Get Started"
                class="inline-block w-full cursor-pointer bg-primary px-6 py-3 text-center font-semibold text-white transition [box-shadow:rgb(171,_196,_245)_-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px] sm:w-32"
              />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetStarted;
