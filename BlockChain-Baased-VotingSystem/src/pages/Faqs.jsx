import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What is Votereum?",
      answer:
        "Votereum is a blockchain-based voting platform that ensures secure, transparent, and reliable voting processes using advanced encryption technology.",
    },
    {
      question: "How does blockchain voting work?",
      answer:
        "Blockchain voting works by recording each vote as a transaction on a decentralized ledger, making it immutable and transparent while maintaining voter privacy.",
    },
    {
      question: "Is my vote secure on Votereum?",
      answer:
        "Yes, your vote is secured using advanced encryption and blockchain technology, making it tamper-proof and verifiable while maintaining anonymity.",
    },
    {
      question: "How do I register to vote?",
      answer:
        "Registration is simple - create an account, verify your identity using the required documents, and you'll be ready to participate in elections.",
    },
    {
      question: "Can I vote from anywhere?",
      answer:
        "Yes, Votereum allows you to vote securely from any location with internet access, making it convenient and accessible.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="page-container">
      <section className="my-8">
        <h1 className="small-heading text-center">
          Frequently Asked Questions
        </h1>
        <p className="body-text mt-4 text-center">
          Find answers to common questions about Votereum and blockchain voting
        </p>
      </section>

      <section className="my-8 max-w-3xl mx-auto relative">
        {/* Vertical Line */}
        <div className="absolute left-[1.4rem] top-8 bottom-8 w-1 bg-blue-600" />

        {faqData.map((faq, index) => (
          <div key={index} className="flex items-start gap-4 mb-4">
            {/* Numbered Circle */}
            <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-b from-blue-700 to-blue-900 flex items-center justify-center text-white font-bold text-lg shadow-lg">
              {index + 1}
            </div>

            {/* FAQ Content */}
            <div className="flex-grow rounded-lg overflow-hidden bg-gradient-to-b from-blue-700 to-blue-900 shadow-lg">
              <button
                className="w-full p-4 text-left text-white flex justify-between items-center"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-xl !text-white">{faq.question}</span>
                {activeIndex === index ? (
                  <FaChevronUp className="w-5 h-5" />
                ) : (
                  <FaChevronDown className="w-5 h-5" />
                )}
              </button>
              {activeIndex === index && (
                <div className="p-4 bg-white">
                  <p className="body-text">{faq.answer}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default FAQ;
