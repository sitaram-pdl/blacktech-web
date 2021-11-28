import React from "react";
import BreadCrumbSection from "~sections/Careers/BreadCrumb";
import AboutSection from "~sections/Careers/About";
import ServiceSection from "~sections/Careers/Services";
import JobSection from "~sections/Careers/Job";
import FooterSection from "~sections/it/FooterThree";
import HeaderButton from "~sections/marketing/Header";
import { PageWrapper } from "~components/Core";
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

export default function Career() {
  return (
    <PageWrapper headerConfig={header}>
      <BreadCrumbSection
        title="Career with Black Tech"
        text="Black Tech is looking for talented and enthusiastic team members. If you have a passion for technology in the tech world then join our team of technological"
      />
      <AboutSection />
      <ServiceSection />
      <JobSection />
      <FooterSection />
    </PageWrapper>
  );
}
