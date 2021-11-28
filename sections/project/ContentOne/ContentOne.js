import React from "react";
import Image from "next/image";
import Content from "./style";
import { SuperTag } from "~components";
import { Col, Container, Row } from "react-bootstrap";
import contentShapeOne from "~image/project-management/l2-content-1-shape.png";
import contentImage from "~image/project-management/l2-content-img-1.png";
import contentShapeTwo from "~image/project-management/l2-content-img-2.png";
import imageOne from "~image/marketing/webdev.gif"
import styles from './style.module.css'
export default function ContentSectionOne() {
  return (
    <Content>
      <Content.SectionShape>
        <Image src={contentShapeOne} alt="content" placeholder="blurred" />
      </Content.SectionShape>
      <Container>
        <Content.Inner>
          <Row className="align-items-center justify-content-center justify-content-lg-start">
            <Col className="col-xl-5 col-lg-6 col-md-8 col-xs-10 order-2 order-lg-1">
              <Content.Box>
                <div
                  style={{
                    fontSize: "35px",
                    fontWeight: "600",
                    color: "black",
                    opacity: "0.8",
                  }}
                >
                  Digital Marketing / SEO
                </div>
                <div
                  style={{
                    fontSize: "24px",
                    fontWeight: "400",
                    color: "black",
                    opacity: "0.5",
                  }}
                >
                  Advertise, analyze, and optimize! We do it all for you
                </div>

                <Content.Text>
                  <div
                    style={{
                      color: "black",
                      margin: "20px 0 0 0",
                    }}
                  >
                    Embrace the new technology with a unique approach through
                    digital marketing. You can reach out to more and more
                    customers and enable them to get convenient options which as
                    a result brings you profit through digital marketing. <br />
                    <div style={{ marginTop: "1em" }} />
                    Reach a higher rank on the search engine results page with
                    the help of search engine optimization. Having your website
                    ranked higher in the search engines will result more in
                    targeted visitors landing on your website and thus more
                    customers.
                  </div>
                </Content.Text>
                {/* <Content.Button to="/">Get Started Now</Content.Button> */}
              </Content.Box>
            </Col>
            <Col
              xs="12"
              className="col-xl-7 col-lg-6 col-md-8 col-xs-10 order-1 order-lg-2"
              style={{marginLeft:'0'}}
            >
                <img src={imageOne.src} className={styles.image} ></img>
            </Col>
          </Row>
        </Content.Inner>
      </Container>
    </Content>
  );
}
