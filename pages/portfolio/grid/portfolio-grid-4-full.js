import React from "react";
import BreadCrumbSection from "~sections/portfolios/PortfolioGrid/BreadCrumb";
import { PageWrapper } from "~components/Core";
import PortfolioSection from "~sections/portfolios/PortfolioGrid/PortfolioGridFour";
import FooterSection from "~sections/it/FooterThree";
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
export default function portFolioMasonaryThreeNoGap() {
  return (
    <PageWrapper headerConfig={header}>
      <BreadCrumbSection
        title="Portfolio Style 06"
        text="Our focus is always on finding the best people to work with. Our
bar is high, but you look ready to take on the challenge."
      />
      <PortfolioSection
        background="#f3f4f6"
        containerFluid={true}
        gutters={true}
      />
      <FooterSection />
    </PageWrapper>
  );
}
