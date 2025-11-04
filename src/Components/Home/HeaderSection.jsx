import React from "react";

export default function HeaderSection() {
  return (
    <section className="bg-white lg:grid lg:h-[85vh] lg:place-content-center">
      <div className="mx-auto w-screen max-w-6xl px-5 py-16 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold leading-snug text-gray-900 sm:text-4xl md:text-5xl">
            Discover how to{" "}
            <strong className="text-indigo-600">grow your business</strong> with better user experience
          </h1>

          <p className="mt-4 text-sm text-gray-700 sm:text-base md:text-lg leading-relaxed">
            We help startups and small businesses design professional, conversion-focused websites
            that attract customers and turn visitors into loyal clients. 
            Get the perfect design that makes your brand stand out.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4 sm:mt-8 px-5">
            <a
              className="inline-block rounded-lg border border-indigo-600 bg-indigo-600 px-6 py-3 text-sm md:text-base font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
              href="#"
            >
              Get Started
            </a>

            <a
              className="inline-block rounded-lg border border-gray-200 px-6 py-3 text-sm md:text-base font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

