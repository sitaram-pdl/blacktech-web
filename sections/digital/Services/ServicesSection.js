import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ServiceCard from "./Components/Card";
import Service from "./style";
import servicesIcon1 from "~image/home-digital-agency/services-icon-1.png";
import servicesIcon2 from "~image/home-digital-agency/services-icon-2.png";
import servicesIcon3 from "~image/home-digital-agency/services-icon-3.png";

export default function ServicesSection() {
  return (
    <Service>
      <Container>
        <Row>
          <Col
            xs="12"
            className="col-xl-5 col-lg-6 col-md-9 col-xs-10 order-2 order-lg-1"
          >
            <Service.Subtitle fontColor="#fd346e" as="h4" mb="22px">
              Our Services
            </Service.Subtitle>
            <Service.Title as="h2" mb="40px">
              Get your business noticed with our tailored services for you
            </Service.Title>
            {/* <Service.Button
              pl="15px"
              pr="15px"
              sizeY="56px"
              sizeX="168px"
              className="btn"
              href="#"
            >
              Learn More
            </Service.Button> */}
          </Col>
          <Col
            xs="12"
            className="col-xxl-6 offset-xxl-1 col-xl-7 col-lg-6 col-md-11 order-1 order-lg-2"
          >
            <Service.Box mlXL="35px" mb="20px" mbLG="0px">
              <Service.Text mb="40px">
                To ensure the growth of your company, we offer a variety of
                services. Taking into account the requirements of your company.
              </Service.Text>
              <ServiceCard
                image={servicesIcon1.src}
                title="Web Application"
                text="We design, build and develop web-based software. We deliver you with efficient, impactful, and easy-to-use corporate and customer-faced web apps, web portals, and more.
                "
                mb="25px"
              />
              <ServiceCard
                image={servicesIcon2.src}
                title="App Development"
                text="We develop cross-platform applications for both android and iOS. We develop outstanding design with innovative functionality."
                mb="25px"
              />
              <ServiceCard
                image={servicesIcon3.src}
                title="Digital Marketing and SEO"
                text="We provide the best SEO services techniques and digital marketing strategies to increase the flow of traffic to your website"
                mb="25px"
              />
            </Service.Box>
          </Col>
        </Row>
      </Container>
    </Service>
  );
}
