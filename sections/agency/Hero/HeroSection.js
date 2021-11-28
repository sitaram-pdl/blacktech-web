import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Video from "~components/VideoModal";
import herol5Img from "~image/home-agency/4.jpg";
import herol5ImgOverlay from "~image/home-agency/hero-bg-overlay.png";
import Hero from "./style";
export default function HeroSection() {
  return (
    <div>
      <Hero
        backgroundImage={herol5Img.src}
        backgroundOverlay={herol5ImgOverlay.src}
        style={{ backgroundColor: "black", height: "100vh" }}
      >
        <Container>
          <Row className="align-items-center justify-content-center justify-content-md-start">
            <Col className="col-xxl-6 col-xl-7 col-lg-8 col-md-8 col-xs-11 order-2 order-lg-1">
              <Hero.Content mb="40px" mbMD="40px" mt="30px" mtLG="0">
                <Hero.Subtitle as="h3" fontColor="#b93421" mb="28px">
                 
                </Hero.Subtitle>
                <Hero.Title as="h1" fontColor="#fff">
                  We aren’t just <br />a software company, we're your partner{" "}
                  <br />
                  in the tech world
                </Hero.Title>
                <Hero.Text>
                  A leading software company building high-end software. We
                  create beautiful, intuitive customer-focused designs. We
                  integrate and connect time-saving functionality. We build
                  high-end software using modern platforms to meet your ultimate
                  requirements.
                  <br className="d-none d-sm-block" />
                  {/* and digital marketing services to meet your ideal requirements. */}
                  {/* meridian sun strikes the upper impenetroble. */}
                </Hero.Text>
                <Hero.Video mt="40px">
                  {/* <Video id="LWZ7iytIA6k" className="video-block">
                  <i className="fa fa-play" />
                  <span className="btn-text">
                    Watch 1 min video testimony from
                    <br className="d-none d-xs-block" /> our satisfied customers
                  </span>
                </Video> */}
                </Hero.Video>
              </Hero.Content>
            </Col>
          </Row>
        </Container>
      </Hero>
    </div>
  );
}
