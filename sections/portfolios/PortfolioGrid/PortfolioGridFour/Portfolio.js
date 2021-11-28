import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PortfolioCard from "./Components/Card";
import Portfolio from "./style";
import portfolioData from "./data";
import styles from "./style.module.css";
import Pone from "~image/portfolio/l8-portfolio-img-1.png";
import binitadidi from "~image/portfolio/binitadidi.jpg";
import Arpandai from "~image/portfolio/arpandai.jpg";
import samir from "~image/portfolio/Samir.png";
import mohan from "~image/portfolio/MOhan.png";
import roshan from "~image/portfolio/Roshan.png";
import Pone3 from "~image/portfolio/sameer.jpg";
import Pone4 from "~image/portfolio/l8-portfolio-img-1.png";
import Pone5 from "~image/portfolio/adarsha.jpg";

import Pone7 from "~image/portfolio/ctuh.jpg";
import Pone8 from "~image/portfolio/sizanrana.jpg";
import Pone9 from "~image/portfolio/asbin.jpg";
import Pone10 from "~image/portfolio/jyotsana.jpg";
import Pone11 from "~image/portfolio/anu1.jpg";
import swadesh from "~image/home-digital-agency/swadesh.png";
import prem from "~image/home-digital-agency/Prem.png";
import aswin from "~image/home-digital-agency/aswin.png";
import jyotsana from "~image/home-digital-agency/Jyotsana.png";
import anis from "~image/home-digital-agency/Anis.png";
import sizan from "~image/home-digital-agency/sizan.png";
import anubhav from "~image/home-digital-agency/anubhav.png";
import sitaram from "~image/home-digital-agency/Sitaram.png";



import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function PortfolioSection({ gutters, containerFluid, ...rest }) {
  const portfolioData = [
    // {
    //   image: Pone,
    //   name: "Sitaram Poudel",
    //   position: "React developer",
    //   facebooklink: "https://www.facebook.com/mah.lureay",
    //   twitterlink: "https://www.facebook.com/mah.lureay",
    //   linkenlnlink: "https://www.facebook.com/mah.lureay",
    // },
    {
      image: swadesh,
      name: "Swadesh Nepali ",
      position: 'Founder & CEO',
      facebooklink: "https://www.facebook.com/mah.lureay",
      twitterlink: "https://www.facebook.com/mah.lureay",
       linkenlnlink: "https://www.linkedin.com/in/swadesh-nepali-385297206/",
    },
    {
      image: Arpandai,
      name: "Arpan Tiwari",
      position: 'Cheif Financial Adviser',
       facebooklink: "",
     twitterlink: "",
      linkenlnlink: "",
    },
    {
      image: binitadidi,
      name: "Binita Nepali",
      position: 'Cheif Adviser & Business Relation',
      facebooklink: "https://www.facebook.com/beenita.binu",
      twitterlink: "",
       linkenlnlink: "https://www.linkedin.com/in/binita-nepali-7749901bb/",
    },
    {
      image: prem,
      name: "Prem Regmi",
      position: "Project Manager",
      facebooklink: "https://www.facebook.com/manoj.regmi.3781",
      twitterlink: "",
       linkenlnlink: "",
    },
   
    
    
    
    {
      image: samir,
      name: "Samir C.K",
      position: "Manager",
      facebooklink: "https://www.facebook.com/mah.lureay",
      twitterlink: "https://www.facebook.com/mah.lureay",
       linkenlnlink: "https://www.facebook.com/mah.lureay",
    },
    {
      image: mohan,
      name: "Mohan Tamang",
      position: "Auditor",
      facebooklink: "https://www.facebook.com/mah.lureay",
      twitterlink: "https://www.facebook.com/mah.lureay",
       linkenlnlink: "https://www.facebook.com/mah.lureay",
    },
    {
      image: roshan,
      name: "Roshan Gurung",
      position: "Auditor",
      facebooklink: "https://www.facebook.com/mah.lureay",
      twitterlink: "https://www.facebook.com/mah.lureay",
       linkenlnlink: "https://www.facebook.com/mah.lureay",
    },
    {
      image: Pone5,
      name: "Adarsha Lalchan",
      position: "Senior Backend developer",
      facebooklink: "https://www.facebook.com/mah.lureay",
      twitterlink: "https://www.facebook.com/mah.lureay",
       linkenlnlink: "https://www.facebook.com/mah.lureay",
    },
    {
      image: anis,
      name: "Anish Acharya",
      position: "Backend developer",
      facebooklink: "https://www.facebook.com/mah.lureay",
      twitterlink: "https://www.facebook.com/mah.lureay",
       linkenlnlink: "https://www.facebook.com/mah.lureay",
    },
    {
      image: sitaram,
      name: "Sitaram Poudel",
      position: "React developer",
      facebooklink: "https://www.facebook.com/mah.lureay",
      twitterlink: "https://www.facebook.com/mah.lureay",
       linkenlnlink: "https://www.facebook.com/mah.lureay",
    },
    {
      image: sizan,
      name: "Sizan Rana",
      position: "React developer",
      facebooklink: "https://www.facebook.com/mah.lureay",
      twitterlink: "https://www.facebook.com/mah.lureay",
       linkenlnlink: "https://www.facebook.com/mah.lureay",
    },
    {
      image: aswin,
      name: "Assbin Sunar",
      position: "Senior Flutter developer",
      facebooklink: "https://www.facebook.com/mah.lureay",
      twitterlink: "https://www.facebook.com/mah.lureay",
       linkenlnlink: "https://www.facebook.com/mah.lureay",
    },
    {
      image: jyotsana,
      name: "Jyotsana Ale",
      position: "Content writer",
      facebooklink: "https://www.facebook.com/mah.lureay",
      twitterlink: "https://www.facebook.com/mah.lureay",
       linkenlnlink: "https://www.facebook.com/mah.lureay",
    },
    {
      image: anubhav,
      name: "Anubhav Budhathoki",
      position: "QA Engineer",
      facebooklink: "https://www.facebook.com/mah.lureay",
      twitterlink: "https://www.facebook.com/mah.lureay",
       linkenlnlink: "https://www.facebook.com/mah.lureay",
    },
   
  ];

  return (
    <Portfolio {...rest}>
      <Container fluid={containerFluid}>
        <div className={styles.container}>
          {portfolioData.map((dat, index) => (
            <div className={styles.mapBox}>
              <div className={styles.relative}>
                <div className={styles.image}>
                <img src={dat.image.src} className={dat.name==='Binita Nepali'||dat.name==='Arpan Tiwari'||dat.name==='Samir C.K'?styles.image1:styles.image} />
                </div>
                <div className={styles.absolute}>
                  <a
                    style={dat.twitterlink ? null : { display: "none" }}
                    href={dat.twitterlink || ""}
                    className={styles.iconContain}
                  >
                    <FaTwitter className={styles.icon} />
                  </a>

                  <a
                    style={dat.facebooklink ? null : { display: "none" }}
                    className={styles.iconContain}
                    href={dat.facebooklink || ""}
                  >
                    <FaFacebookF className={styles.icon} />
                  </a>
                  <a
                    style={dat.linkenlnlink ? null : { display: "none" }}
                    className={styles.iconContain}
                    href={dat.linkenlnlink || ""}
                  >
                    <FaLinkedinIn className={styles.icon} />
                  </a>
                </div>
              </div>
              <div className={styles.name}> {dat.name}</div>
              <div className={styles.position}>{dat.position} </div>
            </div>
          ))}
        </div>
      </Container>
    </Portfolio>
  );
}
