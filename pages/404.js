import React from "react";
import { Error } from "~sections/utility";
import { PageWrapper } from "~components/Core";
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

export default function errorPage() {
  return (
    <PageWrapper headerConfig={header}>
      <Error />
      <FooterSection />
    </PageWrapper>
  );
}
