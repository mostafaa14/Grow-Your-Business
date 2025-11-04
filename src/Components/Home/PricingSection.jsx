import React from "react";

export default function PricingSection() {
  return (
    <div className="max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Our Pricing Plans
        </h2>
        <p className="mt-4 text-gray-600">
          Choose the plan that fits your needs and start growing today.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8">
        {/* Starter Plan */}
        <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-xs">
          <div className="p-6 sm:px-8">
            <h2 className="text-lg font-medium text-gray-900">
              Starter <span className="sr-only">Plan</span>
            </h2>
            <p className="mt-2 text-gray-700">
              Perfect for freelancers or small startups taking their first step online.
            </p>
            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                20$
              </strong>
              <span className="text-sm font-medium text-gray-700">/month</span>
            </p>
            <a
              href="#"
              className="mt-4 block rounded-sm border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden sm:mt-6"
            >
              Get Started
            </a>
          </div>

          <div className="p-6 sm:px-8">
            <p className="text-lg font-medium text-gray-900 sm:text-xl">
              What's included:
            </p>
            <ul className="mt-2 space-y-2 sm:mt-4">
              {[
                { text: "10 users", check: true },
                { text: "2GB of storage", check: true },
                { text: "Email support", check: true },
                { text: "Help center access", check: false },
                { text: "Phone support", check: false },
                { text: "Community access", check: false },
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-1">
                  {item.check ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-indigo-700"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-red-700"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                  <span className="text-gray-700">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pro Plan */}
        <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-xs">
          <div className="p-6 sm:px-8">
            <h2 className="text-lg font-medium text-gray-900">
              Pro <span className="sr-only">Plan</span>
            </h2>
            <p className="mt-2 text-gray-700">
               Designed for growing teams that need more flexibility and power.
            </p>
            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                30$
              </strong>
              <span className="text-sm font-medium text-gray-700">/month</span>
            </p>
            <a
              href="#"
              className="mt-4 block rounded-sm border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden sm:mt-6"
            >
              Get Started
            </a>
          </div>

          <div className="p-6 sm:px-8">
            <p className="text-lg font-medium text-gray-900 sm:text-xl">
              What's included:
            </p>
            <ul className="mt-2 space-y-2 sm:mt-4">
              {[
                { text: "20 users", check: true },
                { text: "5GB of storage", check: true },
                { text: "Email support", check: true },
                { text: "Help center access", check: true },
                { text: "Phone support", check: false },
                { text: "Community access", check: false },
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-1">
                  {item.check ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-indigo-700"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-red-700"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                  <span className="text-gray-700">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Enterprise Plan */}
        <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-xs">
          <div className="p-6 sm:px-8">
            <h2 className="text-lg font-medium text-gray-900">
              Enterprise <span className="sr-only">Plan</span>
            </h2>
            <p className="mt-2 text-gray-700">
              Best for large organizations that require full customization and support.
            </p>
            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                100$
              </strong>
              <span className="text-sm font-medium text-gray-700">/month</span>
            </p>
            <a
              href="#"
              className="mt-4 block rounded-sm border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden sm:mt-6"
            >
              Get Started
            </a>
          </div>

          <div className="p-6 sm:px-8">
            <p className="text-lg font-medium text-gray-900 sm:text-xl">
              What's included:
            </p>
            <ul className="mt-2 space-y-2 sm:mt-4">
              {[
                { text: "50 users", check: true },
                { text: "20GB of storage", check: true },
                { text: "Email support", check: true },
                { text: "Help center access", check: true },
                { text: "Phone support", check: true },
                { text: "Community access", check: true },
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <span className="text-gray-700">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
