import React from "react";
import { PageWrapper } from "~components/Core";
import HeaderButton from "~sections/marketing/Header";
import PortfolioSection from "~sections/portfolios/PortfolioMasonary/PortfolioMasonaryThree";
import FooterSection from "~sections/it/FooterThree";
import TestimonialOne from "~sections/testimonial/TestimonialOne";
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

export default function portFolioMasonaryThreeNoGap() {
  return (
    <PageWrapper headerConfig={header}>
      <PortfolioSection gutters="false" background="#f3f4f6" />
      <TestimonialOne />
      <FooterSection />
    </PageWrapper>
  );
}
