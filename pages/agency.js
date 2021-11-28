import React from "react";
import { PageWrapper } from "~components/Core";
import HeroSection from "~sections/agency/Hero";
import ServicesSection from "~sections/agency/Services";
import AboutSection from "~sections/agency/About";
import ContentSectionOne from "~sections/agency/ContentOne";
import PricingSection from "~sections/agency/Pricing";
import TestimonialSection from "~sections/agency/Testimonial";
import CtaSection from "~sections/agency/Cta";
import FooterFive from "~sections/it/FooterThree";
import HeaderButton from "~sections/agency/Header";

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

export default function Agency() {
  return (
    <PageWrapper headerConfig={header}>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContentSectionOne />
      <PricingSection />
      <TestimonialSection />
      <CtaSection />
      <FooterFive />
    </PageWrapper>
  );
}
