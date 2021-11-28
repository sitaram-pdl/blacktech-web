import React from "react";
import PortfolioDetailsSection from "~sections/portfolio-details/PortfolioDetailsOne/PortfolioDetails";
import PortfolioGridSection from "~sections/portfolio-details/PortfolioDetailsOne/ProtfoliGrid";
import PromoSection from "~sections/portfolio-details/PortfolioDetailsOne/PortfolioPromo";
import FooterSection from "~sections/it/FooterThree";
import { PageWrapper } from "~components/Core";
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

export default function portfolioDetailsOne() {
  return (
    <PageWrapper headerConfig={header}>
      <PortfolioDetailsSection />
      <PortfolioGridSection />
      <PromoSection />
      <FooterSection />
    </PageWrapper>
  );
}
