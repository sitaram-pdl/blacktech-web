import React from "react";
import ContactSection from "~sections/contact/ContactOne/ContactSection";
import FooterSection from "~sections/it/FooterThree";
import { PageWrapper } from "~components/Core";
import HeaderButton from "~sections/marketing/Header";

import Question from "~sections/marketing/Question1";
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

export default function contactOne() {
  return (
    <PageWrapper headerConfig={header}>
      <ContactSection />
      <Question />
      <FooterSection />
    </PageWrapper>
  );
}
