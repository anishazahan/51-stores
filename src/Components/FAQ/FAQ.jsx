import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const questions = [
    {
      id: 1,
      question: "What is your policy on distribution?",
      answer:
        "Pellentesque in nisi aliquet, pellentesque purus eget, imperdiet turpis...",
    },
    {
      id: 2,
      question: "How can I contribute to Flowspark?",
      answer:
        "Pellentesque in nisi aliquet, pellentesque purus eget, imperdiet turpis...",
    },
    {
      id: 3,
      question: "What other themes do you have?",
      answer:
        "Pellentesque in nisi aliquet, pellentesque purus eget, imperdiet turpis...",
    },
    {
      id: 4,
      question: "What is your policy on distribution?",
      answer:
        "Pellentesque in nisi aliquet, pellentesque purus eget, imperdiet turpis...",
    },
  ];

  const handleQuestionClick = (questionId) => {
    if (activeQuestion === questionId) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(questionId);
    }
  };

  return (
    <div>
      <section>
        <div className="py-10 md:pt-24 mx-auto w-full max-w-7xl px-5 md:px-10">
          <div className="flex flex-col items-center lg:flex-row lg:space-x-20">
            <div className="flex-[1_1_500px] max-[991px]:w-full max-[991px]:flex-none">
              <div className="max-w-3xl mb-8 md:mb-12 lg:mb-16">
                <h2 className="font-bold text-3xl md:text-5xl">General FAQs</h2>
                <div className="mt-4 max-w-[528px]">
                  <p className="text-[#636262] max-[479px]:text-sm">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                    aliquam,purus sit amet luctus magna fringilla urna
                  </p>
                </div>
              </div>
              <div className="mb-6 h-full w-full overflow-auto bg-[#f2f2f7] p-8 rounded-sm">
                <div className="flex flex-row gap-4">
                  <div className="flex flex-col gap-1.5">
                    <h5 className="text-xl font-bold">Still have questions?</h5>
                    <div className="max-w-[380px]">
                      <p className="text-[#636262] max-[479px]:text-sm">
                        Can’t find the answer you’re looking for? Please chat to
                        lorem
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-6 mt-8 h-[0.5px] w-full bg-[#a6a6a6]"></div>
                <Link
                  href="#"
                  className="inline-block items-center bg-secondary px-6 py-3 text-center font-semibold text-white"
                >
                  Get In Touch
                </Link>
              </div>
            </div>

            {/* questions section */}
            <div className="flex-[1_1_500px] max-[991px]:w-full max-[991px]:flex-none">
              {questions.map((q) => (
                <div
                  key={q.id}
                  className="mb-6 w-full overflow-hidden bg-[#f2f2f7] px-8 py-5 rounded-sm"
                >
                  {/* Question */}
                  <div
                    className="flex cursor-pointer items-start justify-between"
                    onClick={() => handleQuestionClick(q.id)}
                  >
                    <p className="text-xl font-bold">{q.question}</p>
                    <div className="p-4 bg-primary text-white ml-10 mt-1 flex h-5 w-5 items-center justify-center">
                      {activeQuestion === q.id ? (
                        <button className="text-xl text-white">
                          <AiOutlineMinus />
                        </button>
                      ) : (
                        <button className="text-xl text-white">
                          <AiOutlinePlus />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Question Details */}
                  {activeQuestion === q.id && (
                    <div className="scale-up-ver-top w-full mt-5 overflow-hidden mb-4 max-w-[640px] lg:max-w-[960px]">
                      <p className="max-h-[479px] text-sm">{q.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
