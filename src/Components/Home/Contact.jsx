import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا ممكن تضيف ارسال البيانات ل API أو email
    console.log(formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
            Contact Us
          </h2>
          <p className="mt-1 text-3xl font-bold text-gray-900 sm:text-4xl">
            We'd love to hear from you
          </p>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Have questions or want to work together? Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          {submitted && (
            <p className="mb-6 text-center text-green-600 font-medium">
              Thank you! Your message has been sent.
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="w-full rounded-lg border-gray-200 bg-gray-100 px-4 py-3 text-gray-900 focus:border-indigo-600 focus:ring-indigo-600"
              />
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="w-full rounded-lg border-gray-200 bg-gray-100 px-4 py-3 text-gray-900 focus:border-indigo-600 focus:ring-indigo-600"
              />
            </div>

            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Your Message"
                className="w-full rounded-lg border-gray-200 bg-gray-100 px-4 py-3 text-gray-900 focus:border-indigo-600 focus:ring-indigo-600"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="inline-block rounded-lg bg-linear-to-r from-[#2C5EE9] to-[#7D23CE] px-8 py-3 text-white font-medium transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
