import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Video from "~components/VideoModal";
import { Link } from "~components";
import ImageGroup from "./Components/ImageGroup";
import imageOne from "~image/marketing/software.gif"
import Hero from "./style";
export default function HeroSection() {
  return (
    <Hero>
      <Container>
        <Row className="align-items-center justify-content-center justify-content-md-start">
          {/* Welcome content Area */}
          <Col
            xs="12"
            className="col-xxl-5 col-xl-6 col-lg-7 col-md-8 col-xs-11"
          >
            <div className="welcome-content welcome-content--l3">
              {/* <Hero.Subtitle>Get Started</Hero.Subtitle> */}
              <Hero.Title>
                We are the ones to get you noticed in this tech world.
              </Hero.Title>
              <Hero.Text>
                We are dynamic team of professionals who specializes in software
                engineering, product development, web/mobile application
                development, and digital modification.
              </Hero.Text>
              {/* <Hero.BtnGroup>
            <Hero.Button className="btn-primary btn-1 text-white" as={Video} id="LWZ7iytIA6k">Watch
              Video</Hero.Button>
            <Hero.Button className="btn-electric-violet-2 btn-2" as={Link} to="/">Get Started</Hero.Button>
          </Hero.BtnGroup> */}
            </div>
          </Col>
          <Col
            xs="12"
            className="col-xxl-7 col-xl-6 col-lg-5 col-md-8 col-6 position-static d-none d-lg-block"
            style={{marginBottom:'0em'}}
          >
            {/* <ImageGroup /> */}
            <img src={imageOne.src} style={{width:'700px',marginLeft:'5em',marginTop:"-1em"}}></img>
          </Col>
        </Row>
      </Container>
    </Hero>
  );
}
