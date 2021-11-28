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
        title="Our Team"
        text="A group of optimistic individuals came together to work with a single view to thrive in the digital market."
      />
      <PortfolioSection background="#f3f4f6" gutters={true} />
      <FooterSection />
    </PageWrapper>
  );
}
