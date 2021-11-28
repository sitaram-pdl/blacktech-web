import React from "react";
import { PageWrapper } from "~components/Core";
import HeroSection from "~sections/digital/Hero";
import ServicesSection from "~sections/digital/Services";
import AboutSection from "~sections/digital/About";
import ContentSectionOne from "~sections/digital/ContentOne";
import ContentSectionTwo from "~sections/digital/ContentTwo";
import TeamSection from "~sections/digital/Team";
import PortfolioSection from "~sections/digital/Portfolio";
import PromoSection from "~sections/digital/Promo";
// import FixedOverlay from "~sections/FixedOverlay";

import FooterSix from "~sections/it/FooterThree";

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

export default function Digital() {
  return (
    <PageWrapper headerConfig={header}>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContentSectionOne />
      <ContentSectionTwo />
      <TeamSection />
      <PortfolioSection />
      <PromoSection />
      <FooterSix />
      {/* <FixedOverlay /> */}
    </PageWrapper>
  );
}
