import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import ContentImageOne from "~image/home-digital-agency/content-l7-1.png";
import ContentImageTwo from "~image/home-digital-agency/content-l7-2.png";
import Content from "./style";

export default function ContentSectionOne() {
  return (
    <Content>
      <Container>
        <Content.InnerBlock className="border-bottom">
          <Row className="justify-content-center">
            {/* about-us Content */}
            <Col xs="12" className="col-lg-7 col-md-6 col-xs-10">
              <Content.Box>
                <Content.Subtitle as="h6" mb="40px" fontColor="#fd346e">
                  About us
                </Content.Subtitle>
                <Content.Title as="h2" mb="30px" mbXL="50px">
                  We are here to take your business to the next level
                </Content.Title>
                <Content.ImageOne mb="40px">
                  <Image
                    src={ContentImageOne}
                    alt="content"
                    placeholder="blur"
                  />
                </Content.ImageOne>
              </Content.Box>
            </Col>
            {/*/ .about-us Content */}
            <Col xs="12" className="col-lg-4 offset-xl-1 col-md-6 col-xs-10">
              <Content.Subtitle as="h6" mb="30px" fontColor="#fd346e">
                {/* Our customer */}
              </Content.Subtitle>
              <Content.Text mb="40px" mbXL="60px">
                Black tech is a leading software company building high-end
                software. We build high-end software using modern platforms to
                meet your ultimate requirements. We make product development
                practices faster and more reliable.
              </Content.Text>
              <Content.ImageTwo mb="40px">
                <Image src={ContentImageTwo} alt="content" placeholder="blur" />
              </Content.ImageTwo>
              <Content.Text mb="30px" ptXL="30px">
                We prioritize your needs and contribute to faster and innovative
                customization for you. We are a group of a dynamic team of
                professionals who specialize in software engineering, product
                development, web/mobile application development, and digital
                modification.
              </Content.Text>
            </Col>
          </Row>
        </Content.InnerBlock>
      </Container>
    </Content>
  );
}
