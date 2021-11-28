import React from "react";
import { PageWrapper } from "~components/Core";
import SearchSection from "~sections/utility/Faq/SearchSection";
import FaqSection from "~sections/utility/Faq/FaqSection";
import FooterSection from "~sections/marketing/FooterOne";
import HeaderButton from "~sections/marketing/Header";
import TestimonialTwo from "~sections/testimonial/TestimonialTwo";
const header = {
  headerClasses:
    "site-header site-header--menu-start light-header site-header--sticky background-color-white",

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

export default function FaqPage() {
  return (
    <PageWrapper headerConfig={header}>
      <SearchSection />
      <FaqSection />
      <TestimonialTwo />
      <FooterSection />
    </PageWrapper>
  );
}
