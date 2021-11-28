import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "~components";
import herol6Img from "~image/home-digital-agency/hero-l7-bg.png";
import Hero from "./style";

export default function HeroSection() {
  return (
    <Hero backgroundImage={herol6Img.src}>
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col className="col-xl-9">
            <Hero.Content className="text-center">
              <Hero.Icon>
                <i className="fa fa-bell" />
              </Hero.Icon>
              <Hero.Title as="h1" fontColor="#fff">
                We aren’t just a software company, we are your partner in the
                tech world
              </Hero.Title>
              <Hero.Text fontColor="#fff">
                We are a leading software company building high-end software for
                better user experience and to boost your product business.
              </Hero.Text>
              {/* <Hero.Button as={Link} to="/">
                Get Started
              </Hero.Button> */}
            </Hero.Content>
          </Col>
        </Row>
      </Container>
    </Hero>
  );
}
