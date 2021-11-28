import React from "react";
import { PageWrapper } from "~components/Core";
import HeaderButton from "~sections/it/Header";
import HeroSection from "~sections/it/Hero";
import ServicesSection from "~sections/it/Services";
import FeatureSection from "~sections/it/Feature";
import ContentSectionOne from "~sections/it/ContentOne";
import ProcessSection from "~sections/it/Process";
import CtaSection from "~sections/it/Cta";
import TestimonialSection from "~sections/it/Testimonial";
import ContactSection from "~sections/it/Contact";
import FooterThree from "~sections/it/FooterThree";
import ContentOne from "~sections/project/ContentOne";
import ContentTwo from "~sections/project/ContentTwo";
import ContentOne1 from "~sections/project/ContentOne1";
import ContentTwo1 from "~sections/project/ContentTwo1";

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
export default function HomeIt() {
  return (
    <PageWrapper headerConfig={header}>
      <HeroSection />
      <ServicesSection />
      <ContentTwo />
      <ContentOne />
      <ContentTwo1 />
      <ContentOne1 />

      {/* <FeatureSection /> */}
      {/* <ContentSectionOne /> */}
      <ProcessSection />
      <TestimonialSection />
      <CtaSection />

      {/* <ContactSection /> */}
      <FooterThree />
    </PageWrapper>
  );
}
