import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import AboutImage from "~image/home-startup/home.jpg";
import SectionTitle from "./Components/SectionTitle";
import About from "./style";

export default function AboutusSection() {
  return (
    <About>
      <Container>
        <Row className="align-items-center justify-content-center g-0">
          <Col xs="12" className="col-xxl-6 col-lg-5 col-md-10">
            <About.Image>
              <Image src={AboutImage} alt="content" placeholder="blur" />
            </About.Image>
          </Col>
          <Col className="col-xxl-6 col-lg-7 col-md-10">
            <About.Box>
              {/* Section Title */}
              <About.Content>
                <SectionTitle
                  subTitle="About us"
                  title="We're the one to get you noticed."
                  text="We create a world-class user experience for digital leaders that want to progress faster. We prioritize customers’ needs and contribute to faster and innovative customization for the clients. We make product development practices faster and more reliable.
                  "
                  subTitleProps={{
                    mb: "10px",
                    className: "subline",
                    fontColor: "#5034fc",
                  }}
                  titleProps={{ mb: "10px", as: "h2" }}
                  mb="69px"
                />
              </About.Content>
              {/*/ .Section Title */}
            </About.Box>
          </Col>
        </Row>
      </Container>
    </About>
  );
}
