import React from "react";

export default function FaqSection() {
  return (
    <section className="py-10 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mt-2">
            Here are some of the most common questions our clients ask.
          </p>
        </div>

        <details
          className="group border-s-4 border-gray-200 bg-gray-50 p-4 [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex items-center justify-between gap-1.5 text-gray-900 cursor-pointer">
            <h2 className="text-lg font-medium">
              What services do you offer for businesses?
            </h2>
            <svg
              className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>
          <p className="pt-4 text-gray-900">
            We provide a full range of digital solutions including website design, 
            SEO optimization, social media management, branding, and paid advertising 
            to help businesses grow their online presence and attract more customers.
          </p>
        </details>

        <details className="group border-s-4 border-gray-200 bg-gray-50 p-4 mt-4 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex items-center justify-between gap-1.5 text-gray-900 cursor-pointer">
            <h2 className="text-lg font-medium">
              How long does it take to complete a project?
            </h2>
            <svg
              className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>
          <p className="pt-4 text-gray-900">
            Project timelines vary based on complexity and requirements. 
            A typical landing page takes about 3–5 days, while a full website 
            can take 2–4 weeks depending on features and revisions.
          </p>
        </details>

        <details className="group border-s-4 border-gray-200 bg-gray-50 p-4 mt-4 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex items-center justify-between gap-1.5 text-gray-900 cursor-pointer">
            <h2 className="text-lg font-medium">
              Do you provide ongoing support after launch?
            </h2>
            <svg
              className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>
          <p className="pt-4 text-gray-900">
            Yes, we offer maintenance and support packages to ensure your website 
            remains updated, secure, and optimized. We also assist with content 
            updates and performance improvements when needed.
          </p>
        </details>
      </div>
    </section>
  );
}

