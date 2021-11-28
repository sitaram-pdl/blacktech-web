import React from "react";
import Promo from "./style";
import { Col, Container, Row } from "react-bootstrap";
import l4promoBg from "~image/home-services/promo-l4-img.png";
import { Link } from "~components";

export default function PromoSection({ ...rest }) {
  return (
    <Promo>
      <Container>
        <Row className="justify-content-center">
          <Col className="col-xl-12 text-center">
            <Promo.InnerWrapper
              style={{ backgroundImage: `url(${l4promoBg.src})` }}
            >
              <Promo.Subtitle fontColor="#ffce3e"></Promo.Subtitle>
              <Promo.Title as="h2" fontColor="#fff">
                Black Tech? Sounds like a great choice.
              </Promo.Title>
              <Promo.Text fontColor="#fff">
                Let your goal be our next project
              </Promo.Text>
              <Promo.Button
                className="btn-torch-red"
                as="a"
                href="/innerpage/contact/contact-1"
                sizeX="180px"
                sizeY="56px"
                mt="20px"
              >
                Contact Us
              </Promo.Button>
            </Promo.InnerWrapper>
          </Col>
        </Row>
      </Container>
    </Promo>
  );
}
