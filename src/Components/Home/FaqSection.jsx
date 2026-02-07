import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

export default function FaqSection() {
  const faqs = [
    {
      question: "What services do you offer for businesses?",
      answer:
        "We provide a full range of digital solutions including website design, SEO optimization, social media management, branding, and paid advertising to help businesses grow their online presence and attract more customers.",
    },
    {
      question: "How long does it take to complete a project?",
      answer:
        "Project timelines vary based on complexity and requirements. A typical landing page takes about 3–5 days, while a full website can take 2–4 weeks depending on features and revisions.",
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer:
        "Yes, we offer maintenance and support packages to ensure your website remains updated, secure, and optimized. We also assist with content updates and performance improvements when needed.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-10 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <p className="text-gray-600 mt-2">
            Here are some of the most common questions our clients ask.
          </p>
        </div>

        {/* FAQs */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="group border-s-4 border-gray-200 bg-gray-50 p-4 rounded-md transition-all duration-300"
            >
              <button
                className="flex w-full items-center justify-between text-gray-900 cursor-pointer focus:outline-none"
                onClick={() => toggleFaq(idx)}
                aria-expanded={openIndex === idx}
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <HiChevronDown
                  className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`mt-2 text-gray-900 overflow-hidden transition-max-height duration-300 ease-in-out ${
                  openIndex === idx ? "max-h-96" : "max-h-0"
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
