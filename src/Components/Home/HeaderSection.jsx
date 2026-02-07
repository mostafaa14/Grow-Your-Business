import React from "react";

export default function HeaderSection() {
  return (
    <section className="bg-linear-to-r from-indigo-500 to-purple-600 lg:grid lg:h-[85vh] lg:place-content-center text-white">
      <div className="mx-auto w-screen max-w-6xl px-5 py-16 sm:px-8 sm:py-24 lg:px-10 lg:py-28 text-center">
        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl leading-snug">
          Discover how to{" "}
          <strong className="text-yellow-300">grow your business</strong> with better user experience
        </h1>

        <p className="mt-4 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
          We help startups and small businesses design professional, conversion-focused websites
          that attract customers and turn visitors into loyal clients. Get the perfect design
          that makes your brand stand out.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4 sm:mt-8">
          <a
            className="rounded-lg bg-yellow-400 px-6 py-3 font-medium text-gray-900 hover:bg-yellow-500 transition"
            href="#"
          >
            Get Started
          </a>

          <a
            className="rounded-lg border border-white px-6 py-3 font-medium hover:bg-white hover:text-gray-900 transition"
            href="#"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
