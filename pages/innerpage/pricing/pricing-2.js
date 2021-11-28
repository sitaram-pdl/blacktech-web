import React from "react";
import { PageWrapper } from "~components/Core";
import FaqSection from "~sections/pricing-2/Faq";
import PricingSection from "~sections/pricing-2/Pricing";
import FooterSection from "~sections/marketing/FooterOne";
import TestimonialSection from "~sections/app/Testimonial";
import CtaSection from "~sections/project/Cta";
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

export default function PricingTwo() {
  return (
    <PageWrapper headerConfig={header}>
      <PricingSection />
      <TestimonialSection />
      <FaqSection />
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "-4em",
          color: "black",
        }}
      >
        <div style={{ fontSize: "2.5em", fontWeight: "500" }}>
          {" "}
          30 day money-back guarantee{" "}
        </div>
        <div style={{ fontSize: "1.2em" }}>
          if you're 100% satisfied with RestroX,we'll refund your payment.No
          hassle,no risk
        </div>
      </div>
      <CtaSection />
      <FooterSection />
    </PageWrapper>
  );
}
