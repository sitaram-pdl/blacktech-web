import React from "react";
import { PageWrapper } from "~components/Core";
import HeroSection from "~sections/services/Hero";
import ServicesSection from "~sections/services/Services";
import AboutSection from "~sections/services/About";
import ContentSectionOne from "~sections/services/ContentOne";
import ProcessSection from "~sections/services/Process";
import PromoSection from "~sections/services/Promo";
import PricingSection from "~sections/services/Pricing";
import TestimonialSection from "~sections/services/Testimonial";
import ContactSection from "~sections/services/Contact";
import FooterFour from "~sections/services/FooterFour";
import HeaderButton from "~sections/marketing/Header";

const header = {
  headerClasses:
    "site-header site-header--menu-start light-header site-header--sticky",
  containerFluid: true,
  // customLogo: Images.HeaderLogo,
  buttonBlock: (
    <HeaderButton
      className="ms-auto d-none d-xs-inline-flex"
      btnOneText="Login"
      btnTwoLink="/GettingStarted/GettingStarted"
      btnOneLink="/innerpage/sign-in"
      btnTwoText="Get started"
      mr="15px"
      mrLG="0"
    />
  ),
};

export default function Services() {
  return (
    <PageWrapper headerConfig={header}>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContentSectionOne />
      <ProcessSection />
      <PromoSection />
      <PricingSection />
      <TestimonialSection />
      <ContactSection />
      <FooterFour />
    </PageWrapper>
  );
}
