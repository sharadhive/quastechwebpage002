import { useState } from "react";
import { motion } from "framer-motion";
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
    <section id="faq" className="section-spacing-compact container-padding bg-gradient-to-b from-blue-50 via-white to-orange-50 pb-4 md:pb-6 pt-8 md:pt-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-8 md:mb-10 mt-3 md:mt-4">
          <div className="inline-flex items-center gap-2 px-5 md:px-6 py-2 mb-5 md:mb-6 rounded-full bg-gradient-to-r from-blue-500 to-orange-400 shadow-lg text-white text-sm md:text-base font-semibold">
            <HelpCircle className="w-4 h-4 md:w-5 md:h-5" />
            FAQ
          </div>
          <h2 className="heading-section gradient-text-primary mb-3 md:mb-4">
            Your Questions Answered
          </h2>
          <div className="h-0.5 w-24 md:w-32 mx-auto rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500" />
        </div>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-6 lg:gap-8 max-w-7xl mx-auto items-end">
          {/* Right - FAQ Accordion */}
          <div className="order-2 space-y-3">
            {faqData.map((item) => (
              <div
                key={item.id}
                className="border border-blue-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden bg-white"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-center justify-between p-4 md:p-5 text-left focus:outline-none hover:bg-blue-50/50 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-8 h-8 bg-gradient-to-br from-blue-600 to-orange-500 text-white text-sm font-bold rounded-lg shadow-md flex-shrink-0">
                      {item.id.toString().padStart(2, "0")}
                    </span>
                    <h3 className="text-sm md:text-base font-semibold text-gray-900 leading-snug pr-2">
                      {item.question}
                    </h3>
                  </div>
                  <div className="flex-shrink-0">
                    {openItems.includes(item.id) ? (
                      <ChevronUp className="w-5 h-5 text-orange-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-blue-500" />
                    )}
                  </div>
                </button>

                <div
                  className={`transition-all duration-300 ${
                    openItems.includes(item.id) ? "max-h-96 pb-4" : "max-h-0"
                  } overflow-hidden`}
                >
                  <div className="px-4 md:px-5">
                    <div className="ml-11">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Left - Image Side */}
          <div className="order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="/uploads/FAQ.png"
                alt="Frequently Asked Questions"
                className="w-full h-auto object-contain max-h-[580px]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
