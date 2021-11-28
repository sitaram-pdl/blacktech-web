import React from "react";
import { PageWrapper } from "~components/Core";
import HeroSection from "~sections/marketing/Hero";
import ContentSectionOne from "~sections/marketing/ContentOne";
import ContentSectionTwo from "~sections/marketing/ContentTwo";
import HeaderButton from "~sections/marketing/Header";
import RestroX from "~sections/marketing/RestroX";
import SwitchBanner from "~sections/marketing/SwitchBanner";
import Problem from "~sections/marketing/Problem";
import FeatureSection from "~sections/project/Features";
import AboutSection from "~sections/app/About";
import TestimonialSection from "~sections/marketing/Testimonial";
import TestimonialSectionApp from "~sections/app/Testimonial";
import CounterSection from "~sections/marketing/Counter";
import PromoSection from "~sections/app/Promo";
import Apps from "~sections/marketing/Apps";
import CtaSection from "~sections/project/Cta";
import Pricing from "~sections/marketing/Banner";
import Question from "~sections/marketing/Question";
import Footer from "~sections/Footer";

const header = {
  headerClasses:
    "site-header site-header--menu-start light-header site-header--sticky",
  containerFluid: true,
  // customLogo: Images.HeaderLogo,
  buttonBlock: (
    <HeaderButton
      className="ms-auto d-none d-xs-inline-flex"
      btnOneText="Login"
      btnOneLink=""
      btnTwoText="Get started"
      mr="15px"
      mrLG="0"
    />
  ),
};

export default function Marketing() {
  return (
    <PageWrapper headerConfig={header}>
      <Apps />
    </PageWrapper>
  );
}
/**
 *
 */
