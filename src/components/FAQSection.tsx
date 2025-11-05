import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "How long are your training programs?",
    answer:
      "Our training programs vary in duration depending on the specific course. Typically, they range from a few weeks to a few months. For detailed information, please check the course details on our website or contact our support team."
  },
  {
    id: 2,
    question:
      "Are there any hands-on projects or real-world applications in the training?",
    answer:
      "Yes, our training programs emphasize practical learning with hands-on projects and real-world applications. We believe in providing a comprehensive and practical understanding of the subject matter to better prepare our students for the industry."
  },
  {
    id: 3,
    question: "Is there any EMI option available?",
    answer:
      "Yes, we offer EMI (Equated Monthly Installment) options for our courses. You can contact our finance department or check our website for more information on the available payment plans."
  },
  {
    id: 4,
    question: "How can I contact the support team if I have questions?",
    answer:
      "You can reach our support team through enquiry@quastech.in or by calling 84228 00381. Additionally, we have a live chat option on our website where you can get instant assistance during business hours."
  },
  {
    id: 5,
    question: "Is there a dedicated mentor or advisor for students?",
    answer:
      "Yes, we provide dedicated mentors or advisors for our students. They are there to guide you throughout the course, answer your questions, and provide support to ensure a smooth learning experience."
  }
];

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([1]);

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-20 px-4 bg-gradient-to-b from-blue-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-2 mb-6 rounded-full bg-gradient-to-r from-blue-500 to-orange-400 shadow text-white text-base font-semibold">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-1 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 17.27L18.18 21 16.54 14.42 22 10.08l-7.19-.61L12 3 9.19 9.47 2 10.08l5.46 4.34L5.82 21z" /></svg>
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-3">
            <span className="bg-gradient-to-r from-[#6B5B95] via-[#9B6B8F] to-[#8B5A5A] bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <div className="h-1 w-32 mx-auto rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* FAQ Accordion */}
          <div className="order-2 lg:order-1 space-y-4">
            {faqData.map((item) => (
              <div
                key={item.id}
                className="border border-blue-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden bg-white"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <div className="flex items-start gap-4">
                    <span className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-orange-500 text-white font-bold rounded-lg shadow-md">
                      {item.id.toString().padStart(2, "0")}
                    </span>
                    <h3 className="text-lg font-semibold text-blue-900 leading-relaxed">
                      {item.question}
                    </h3>
                  </div>
                  <div>
                    {openItems.includes(item.id) ? (
                      <ChevronUp className="w-6 h-6 text-orange-500" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-blue-400" />
                    )}
                  </div>
                </button>

                <div
                  className={`transition-all duration-300 ${
                    openItems.includes(item.id) ? "max-h-96 pb-6" : "max-h-0"
                  } overflow-hidden`}
                >
                  <div className="px-6">
                    <div className="ml-14">
                      <p className="text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Image Side */}
          <div className="order-1 lg:order-2">
            <div className="relative h-[350px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/faq.png"
                alt="FAQ"
                className="w-full h-full object-contain bg-gradient-to-tr from-blue-100 to-orange-100 p-6"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
