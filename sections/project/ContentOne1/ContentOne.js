import React from "react";
import Image from "next/image";
import Content from "./style";
import { SuperTag } from "~components";
import { Col, Container, Row } from "react-bootstrap";
import contentShapeOne from "~image/project-management/l2-content-1-shape.png";
import contentImage from "~image/project-management/l2-content-img-1.png";
import contentShapeTwo from "~image/project-management/l2-content-img-2.png";
import imageOne from "~image/marketing/hosting3.gif"
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
                  Web Hosting - We host it for you!
                </div>
                <div
                  style={{
                    fontSize: "24px",
                    fontWeight: "400",
                    color: "black",
                    opacity: "0.5",
                  }}
                >
                  Web hosting is a stressful job, and we’re here to make it easy
                </div>

                <Content.Text>
                  <div
                    style={{
                      color: "black",
                      margin: "20px 0 0 0",
                    }}
                  >
                    Web hosting plays a major role in allocating space on a
                    particular domain of the server to store the site and make
                    it accessible. We provide the best services for shared
                    hosting, cloud hosting, reseller hosting, cloud VPD, and
                    dedicated servers.
                  </div>
                </Content.Text>
                {/* <Content.Button to="/">Get Started Now</Content.Button> */}
              </Content.Box>
            </Col>
            <Col
              xs="12"
              className="col-xl-7 col-lg-6 col-md-8 col-xs-10 order-1 order-lg-2"
            >
              {/* <Content.Image>
                <Image src={contentImage} alt="content" placeholder="blur" />
                <Content.ContentShape>
                  <Image
                    src={contentShapeTwo}
                    alt="content"
                    placeholder="blur"
                  />
                </Content.ContentShape>
              </Content.Image> */}
               <img src={imageOne.src} className={styles.image} />
            </Col>
          </Row>
        </Content.Inner>
      </Container>
    </Content>
  );
}
