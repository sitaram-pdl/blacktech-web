import React from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import Content from "./style";
import ContentImageOne from "~image/home-digital-agency/content-l7-2-img-1.png";
import ContentImageTwo from "~image/home-digital-agency/content-l7-2-img-2.png";
import styles from './style.module.css';
export default function ContentSectionTwo({ ...rest }) {
  return (
    <Content {...rest}>
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col
            xs="12"
            className="col-xl-6 col-lg-7 col-md-8 col-xs-9 order-2 order-lg-1"
          >
            {/* Section Title */}
            <Content.Box>
              <Content.Subtitle fontColor="#fd346e" as="h4">
                Our Mission
              </Content.Subtitle>
              <Content.Title as="h2">
                Create better value to your business through technology
              </Content.Title>
              <Content.Text>
                We prioritize your needs and contribute to faster and innovative
                customization for you. We help make your product development
                practices faster and more reliable
              </Content.Text>
              {/* <Content.Button
                pl="15px"
                pr="15px"
                sizeY="56px"
                sizeX="168px"
                className="btn"
                href="#"
                mt="40px"
              >
                Get started
              </Content.Button> */}
            </Content.Box>
          </Col>
          <Col
            xs="12"
            className="col-xl-6 col-lg-5 col-sm-8 col-xs-10 order-1 order-lg-2"
          >
            <Content.Images>
              
                  <Image
                    src={ContentImageOne}
                    alt="content"
                    placeholder="blur"
                   style={{height:'100px'}}
                  />
               
                <Image
                    src={ContentImageTwo}
                    alt="content"
                    placeholder="blur"
                    className={styles.image}
                  />
               
            </Content.Images>
          </Col>
        </Row>
      </Container>
    </Content>
  );
}
