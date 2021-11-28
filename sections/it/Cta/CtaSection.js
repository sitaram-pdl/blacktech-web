import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "~components";
import promoBg from "~image/it-services/promo-bg.png";
import Cta from "./style";

export default function CtaSection() {
  return (
    <Cta backgroundImage={promoBg.src}>
      <Container>
        <Row className="justify-content-center">
          <Col xs="12" className="col-xl-7 text-center">
            <Cta.Title as="h2" fontColor="#fff" mb="10px">
              {" "}
              Black Tech? Sounds like a great choice.
            </Cta.Title>
            <Cta.Text fontColor="#fff">
              {" "}
              Let your goal be our next project
            </Cta.Text>
            <Cta.Button
              mt="20px"
              //   href="/innerpage/contact/contact-1"
              as={Link}
              to="/innerpage/contact/contact-1"
            >
              Contact Us
            </Cta.Button>
          </Col>
        </Row>
      </Container>
    </Cta>
  );
}

// style={{backgroundImage: `url(${})`}}
