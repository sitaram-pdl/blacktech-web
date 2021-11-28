import React from "react";
import SectionTitle from "./Components/SectionTitle";
import Image from "next/image";
import ImageOne from "~image/home-startup/home1.png";
import ImageTwo from "~image/home-startup/home11.png";
import { Col, Container, Row } from "react-bootstrap";
import Service from "./style";
export default function ServicesSectionTwo() {
  return (
    <Service backgroundColor="rgba(230, 248, 249, 0.4)">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col className="col-xl-5 col-lg-6 col-md-8 col-xs-10 order-2 order-lg-1">
            <Service.Box>
              {/* Section Title */}
              <SectionTitle
                subTitle="Process"
                title="Even more ways to help
you succeed"
                // text="Our team is a diverse network of consultants and industry professionals with a global mindset and a collaborative culture."
                titleProps={{ mb: "20px" }}
                subTitleProps={{
                  mb: "10px",
                  className: "subline",
                  fontColor: "#5034fc",
                }}
                // style={{ backgroundColor: "red", fontSize: "25px" }}
              />
              {/*/ .Section Title */}
              <Service.List mt="20px">
                <li>24 hrs Customer Service</li>
                <li>99.9% client satisfaction</li>
                <li>Over 100 Business Cases</li>
                <li>Operated over the Globe</li>
              </Service.List>
            </Service.Box>
          </Col>
          <Col
            xs="12"
            className="col-xl-7 col-lg-6 col-md-6 col-xs-10 order-1 order-lg-2"
          >
            <Service.Box>
              <Row>
                <Col xs="12" className="col-lg-6 pt-lg-7 mb-5 mb-lg-0">
                  <Service.Image>
                    <Image src={ImageOne} alt="content" placeholder="blur" />
                  </Service.Image>
                </Col>
                <Col xs="12" className="col-lg-6 mb-5 mb-lg-0">
                  <Service.Image>
                    <Image src={ImageTwo} alt="content" placeholder="blur" />
                  </Service.Image>
                </Col>
              </Row>
            </Service.Box>
          </Col>
        </Row>
      </Container>
    </Service>
  );
}
