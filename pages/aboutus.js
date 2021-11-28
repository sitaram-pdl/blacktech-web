import React from "react";
import { PageWrapper } from "~components/Core";
import HeroSection from "~sections/agency/Hero";
import ServicesSection from "~sections/agency/Services";
import AboutSection from "~sections/digital/About";
import ContentSectionOne from "~sections/digital/ContentOne";
import ContentSectionTwo from "~sections/digital/ContentTwo";
import FeatureSection1 from "~sections/marketing/Features";
import TeamSection from "~sections/digital/Team";
import TestimonialSection from "~sections/agency/Testimonial";
import PortfolioSection from "~sections/digital/Portfolio";
import PromoSection from "~sections/digital/Promo";
import HeaderButton from "~sections/marketing/Header";
import FooterSix from "~sections/marketing/FooterOne";
import HowItWorks from "~sections/digital/HowItWorks";
import FeatureSection from "~sections/it/Feature";
import BlogSection from "~sections/startup/Blog";

const header = {
  headerClasses:
    "site-header site-header--menu-start light-header site-header--sticky background-color-white",

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

export default function Digital() {
  return (
    <PageWrapper headerConfig={header}>
      <HeroSection />
      <HowItWorks />
      <FeatureSection />
      <FeatureSection1 />
      <TestimonialSection />
      <AboutSection />
      <ServicesSection />
      <ContentSectionOne />
      <ContentSectionTwo />

      <PortfolioSection />
      <BlogSection />
      <FooterSix />
    </PageWrapper>
  );
}
