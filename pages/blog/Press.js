import React from "react";
import { BlogSidebarTwo1 } from "~sections/Blog";
import FooterSection from "~sections/Blog/Footer";
import { PageWrapper } from "~components/Core";
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

export default function blogsLeftSidebar() {
  return (
    <PageWrapper headerConfig={header}>
      <BlogSidebarTwo1 />
      <FooterSix />
    </PageWrapper>
  );
}
