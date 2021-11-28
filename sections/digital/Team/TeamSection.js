import React from "react";
import Slider from "react-slick";
import { Images } from "~data";
import { Col, Container, Row } from "react-bootstrap";
import TeamCard from "./Components/Card";
import Team from "./style";
import swadesh from "~image/home-digital-agency/swadesh.png";
import prem from "~image/home-digital-agency/Prem.png";
import aswin from "~image/home-digital-agency/aswin.png";
import jyotsana from "~image/home-digital-agency/Jyotsana.png";
import anis from "~image/home-digital-agency/Anis.png";
import sizan from "~image/home-digital-agency/sizan.png";
import anubhav from "~image/home-digital-agency/anubhav.png";
import sitaram from "~image/home-digital-agency/Sitaram.png";
export default function TeamSection({ ...rest }) {
  const elSlider = React.useRef();

  const sliderConfig = {
    centerMode: true,
    centerPadding: "180px",
    slidesToShow: 3,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "40px",
          slidesToShow: 1,
          dots: true,
        },
      },
      {
        breakpoint: 400,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "100px",
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <Team {...rest} backgroundColor="#f3f4f6">
      <Container>
        <Row className="justify-content-center">
          <Col className="col-xxl-6 col-md-8 col-xs-10">
            <Team.Box className="text-center">
              <Team.Subtitle as="h4" fontColor="#fd346e">
                Our Team
              </Team.Subtitle>
              <Team.Title as="h2">
                Meet the minds shaping your digital business
              </Team.Title>
            </Team.Box>
          </Col>
        </Row>
      </Container>
      <Container fluid={true}>
        <Team.SliderWrapper>
          <Slider ref={elSlider} {...sliderConfig}>
            <TeamCard
              image={swadesh.src}
              userName="Swadesh Nepali"
              userPosition="Founder & CEO"
            />
            <TeamCard
              image={prem.src}
              userName="Prem Regmi"
              userPosition="Project Manager"
            />
            <TeamCard
              image={anis.src}
              userName="Anis Acharya"
              userPosition="Backend Developer"
            />
            <TeamCard
              image={aswin.src}
              userName="Aashbin Sunar"
              userPosition="Senior Flutter Developer"
            />
            <TeamCard
              image={sizan.src}
              userName="Sizan Rana"
              userPosition="React Developer"
            />
             <TeamCard
              image={sitaram.src}
              userName="Sitaram Poudel"
              userPosition="React Developer"
            />
             <TeamCard
              image={anubhav.src}
              userName="Anubhav Bhudathoki"
              userPosition="QA Engineer"
            />
             <TeamCard
              image={jyotsana.src}
              userName="Jyotsana Ale"
              userPosition="Content Writer"
            />
            
            
          </Slider>
        </Team.SliderWrapper>
      </Container>
    </Team>
  );
}
