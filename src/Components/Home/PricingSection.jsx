import React from "react";
import { HiCheck, HiX } from "react-icons/hi";

export default function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: 20,
      users: "10 users",
      storage: "2GB of storage",
      emailSupport: true,
      helpCenter: false,
      phoneSupport: false,
      community: false,
      description: "Perfect for freelancers or small startups taking their first step online.",
    },
    {
      name: "Pro",
      price: 30,
      users: "20 users",
      storage: "5GB of storage",
      emailSupport: true,
      helpCenter: true,
      phoneSupport: false,
      community: false,
      description: "Designed for growing teams that need more flexibility and power.",
    },
    {
      name: "Enterprise",
      price: 100,
      users: "50 users",
      storage: "20GB of storage",
      emailSupport: true,
      helpCenter: true,
      phoneSupport: true,
      community: true,
      description: "Best for large organizations that require full customization and support.",
    },
  ];

  const featureIcon = (enabled) =>
    enabled ? <HiCheck className="w-5 h-5 text-indigo-700" /> : <HiX className="w-5 h-5 text-red-700" />;

  return (
    <section className="max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 mx-auto">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Pricing Plans</h2>
        <p className="mt-4 text-gray-600">Choose the plan that fits your needs and start growing today.</p>
      </div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:scale-105 transform transition duration-300"
          >
            {/* Top Section */}
            <div className="p-6 sm:px-8">
              <h3 className="text-lg font-medium text-gray-900">{plan.name}</h3>
              <p className="mt-2 text-gray-700">{plan.description}</p>
              <p className="mt-4 sm:mt-6">
                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">${plan.price}</strong>
                <span className="text-sm font-medium text-gray-700">/month</span>
              </p>
              <a
                href="#"
                className="mt-4 block rounded-sm border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-none sm:mt-6 transition"
              >
                Get Started
              </a>
            </div>

            {/* Features */}
            <div className="p-6 sm:px-8">
              <p className="text-lg font-medium text-gray-900 sm:text-xl">What's included:</p>
              <ul className="mt-2 space-y-2 sm:mt-4">
                <li className="flex items-center gap-2">{featureIcon(true)} {plan.users}</li>
                <li className="flex items-center gap-2">{featureIcon(true)} {plan.storage}</li>
                <li className="flex items-center gap-2">{featureIcon(plan.emailSupport)} Email support</li>
                <li className="flex items-center gap-2">{featureIcon(plan.helpCenter)} Help center access</li>
                <li className="flex items-center gap-2">{featureIcon(plan.phoneSupport)} Phone support</li>
                <li className="flex items-center gap-2">{featureIcon(plan.community)} Community access</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
