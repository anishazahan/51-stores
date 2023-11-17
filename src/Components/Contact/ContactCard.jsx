import { AiTwotoneContacts } from "react-icons/ai";

const data = [
  {
    title: "Book an appointment",
    description:
      "Risk-Free Trial: Try it for 14 days, on us. 100% satisfaction guaranteed",

    btn: "Schedule A Meeting",
  },
  {
    title: "Talk to our expert",
    description:
      "Risk-Free Trial: Try it for 14 days, on us. 100% satisfaction guaranteed",

    btn: "Chat The Expert",
  },
  {
    title: "Other Help?",
    description:
      "Risk-Free Trial: Try it for 14 days, on us. 100% satisfaction guaranteed",

    btn: "Chat The Expert",
  },
];

const ContactCard = () => {
  return (
    <div className="custom-container gap-y-32  xl:px-0 lg:gap-y-0 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-[28px]">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className={`rounded-lg bg-white p-[36px] text-center -mt-24 shadow border`}
          >
            <button className="text-3xl mb-3 text-primary flex mx-auto">
              <AiTwotoneContacts />
            </button>
            <h2 className="text-[#313D3D] font-bold text-[24px] mt-[28px] mb-4">
              {item.title}
            </h2>
            <p className="text-[#4A5454] mb-[28px]">{item.description}</p>
            <button className="px-[32px] py-4 bg-primary text-white font-semibold rounded-lg">
              {item.btn}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ContactCard;
