import React from "react";

export default function AboutSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
            About Us
          </h2>
          <p className="mt-1 text-3xl font-bold text-gray-900 sm:text-4xl">
            Learn More About Our Mission & Vision
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-center md:gap-10">
          {/* Text */}
          <div>
            <div className="max-w-prose md:max-w-none">
              <h3 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                Building digital experiences that inspire growth and connection.
              </h3>
              <p className="mt-4 text-gray-700 leading-relaxed sm:text-base md:text-lg">
                We are a creative team passionate about designing modern, user-friendly websites
                and applications that help brands stand out and achieve their goals.
                Our mission is to bridge the gap between design and functionality, creating
                meaningful digital solutions that leave a lasting impression.
                <br /><br />
                Every project we take on is driven by innovation, attention to detail,
                and a commitment to delivering measurable results for our clients.
              </p>
            </div>
          </div>

          {/* Image */}
          <div>
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3"
              className="rounded-lg shadow-md transform transition duration-700 hover:scale-105"
              alt="About section"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
