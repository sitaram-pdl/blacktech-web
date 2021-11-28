import React, { useState } from "react";
import { PageWrapper } from "~components/Core";

import HeaderButton from "~sections/marketing/Header";
import ServiceSection1 from "~sections/marketing/Service";
import HeroSection from "~sections/agency/Hero";
import ServicesSection from "~sections/agency/Services";

import FooterFive from "~sections/it/FooterThree";
import ServicesSectionTwo from "~sections/startup/ServicesTwo";
import AboutSection1 from "~sections/startup/About";
import ContentSectionOne1 from "~sections/marketing/ContentOne";
import ContentSectionTwo from "~sections/marketing/ContentTwo";
import ProtfolioSection from "~sections/startup/Portfolio";
import TestimonialSection1 from "~sections/app/Testimonial";
import PromoSection from "~sections/services/Promo";
import MessengerCustomerChat from "react-messenger-customer-chat";
import FixedOverlay from "~sections/FixedOverlay/FixedOverlay";
import styles from "./index.module.css";
import Shape from "~image/favicon.png";
import cx from "classnames";
import { useWindowSize } from "react-use";
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

export default function Marketing() {
  const [open, setOpen] = useState(false);
  const { width, height } = useWindowSize();
  console.log(width, height);
  const function1 = () => {
    console.log("hello");
  };
  return (
    <PageWrapper headerConfig={header}>
      <div className={styles.fixedBotton}>
        <div className={styles.relative}>
          <img
            src={Shape.src}
            className={styles.imageIcon}
            onClick={() => setOpen(!open)}
          />
          {open ? (
            <div className={styles.absolute}>
              <FixedOverlay open={open} setOpen={setOpen} />
            </div>
          ) : null}
        </div>
      </div>
      <HeroSection />
      {
        <div className={open ? styles.displaynone : null}>
          <ServiceSection1 />
          <AboutSection1 />
          <ServicesSection />
          <ServicesSectionTwo />
          <ContentSectionOne1 />
          <ContentSectionTwo />
          <ProtfolioSection />
          <TestimonialSection1 />
          <PromoSection />
          <FooterFive />
        </div>
      }
    </PageWrapper>
    // <div style={{width:'100vw',height:'100vh',backgroundColor:'red'}}>

    // </div>
  );
}
