import React from "react";
import { PageWrapper } from "~components/Core";
import TermsConditionSection from "~sections/utility/TermsCondition";
import FooterSection from "~sections/marketing/FooterOne";
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

export default function TermsAndConditions() {
  return (
    <PageWrapper innerPage={true} headerConfig={header}>
      <TermsConditionSection />
      <FooterSection />
    </PageWrapper>
  );
}
