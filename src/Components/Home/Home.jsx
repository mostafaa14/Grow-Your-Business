import React from "react";
import HeaderSection from "./HeaderSection";
import AboutSection from "./AboutSection";
import PromoSection from "./PromoSection";
import PricingSection from "./PricingSection";
import FaqSection from "./FaqSection";

export default function Home() {
  return (
    <div>
      <HeaderSection />
      <AboutSection />
      <PromoSection />
      <PricingSection />
      <FaqSection />
    </div>
  );
}
