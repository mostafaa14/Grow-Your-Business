import React from "react";

export default function PromoSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8 my-14">
        <div className="text-center mb-10">
          <h2 className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
            Our Offer
          </h2>
          <p className="mt-1 text-3xl font-bold text-gray-900">
            Boost Your Business with Our Services
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="bg-blue-600 p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-2xl font-bold text-white md:text-3xl">
                 Get a Custom Landing Page Designed to Convert
              </h2>
              <p className="hidden text-white/90 sm:mt-4 sm:block">
                 We help you build a professional, high-converting landing page
                tailored to your business goals. Our team creates modern, responsive
                designs that attract attention and turn visitors into loyal customers.
                Experience seamless performance and measurable results with every project.
              </p>
              <div className="mt-4 md:mt-8">
                <a
                  href="#"
                  className="inline-block rounded-sm border border-white bg-white px-12 py-3 text-sm font-medium text-blue-500 transition hover:bg-transparent hover:text-white focus:ring-3 focus:ring-yellow-400 focus:outline-hidden"
                >
                  Get Started Today
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
            <img
              alt="promo"
              src="https://images.unsplash.com/photo-1621274790572-7c32596bc67f?ixlib=rb-1.2.1&auto=format&fit=crop&w=654&q=80"
              className="h-40 w-full object-cover sm:h-56 md:h-full"
            />
            <img
              alt="promo"
              src="https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
              className="h-40 w-full object-cover sm:h-56 md:h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
