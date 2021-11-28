import React from "react";
import Image from "next/image";
import Content from "./style";
import { Link, SuperTag } from "~components";
import { Col, Container, Row } from "react-bootstrap";
import shapeOne from "~image/project-management/l2-content-2-shape.png";
import shapeTwo from "~image/project-management/l2-content-2-shape-2.png";
import imageTwo from "~image/project-management/l2-content-img-2.png";
import imageOne from "~image/marketing/app.gif"
import styles from './style.module.css'
export default function ContentSectionTwo() {
  return (
    <Content backgrounColor="#fff">
      <Content.ContentShape>
        <Image src={shapeOne} alt="content" placeholder="blur" />
      </Content.ContentShape>
      <Container>
        <Content.Block>
          <Row className="align-items-center justify-content-center justify-content-lg-start">
            <Col className="col-xl-7 col-lg-6 col-md-8 col-xs-10">
              {/* <Content.Image>
                <Image src={imageTwo} alt="content" placeholder="blur" />
                <Content.ContentShape>
                  <Image src={shapeTwo} alt="content" placeholder="blur" />
                </Content.ContentShape>
              </Content.Image> */}
              <img src={imageOne.src} className={styles.image} />
            </Col>
            <Col xs="12" className="col-xl-5 col-lg-6 col-md-8 col-xs-10">
              <Content.Box>
                <div
                  style={{
                    fontSize: "35px",
                    fontWeight: "600",
                    color: "black",
                    opacity: "0.8",
                  }}
                >
                  App Development
                </div>
                <div
                  style={{
                    fontSize: "24px",
                    fontWeight: "400",
                    color: "black",
                    opacity: "0.5",
                  }}
                >
                  Discover all the possibilities app development can bring to
                  your business
                </div>

                <Content.Text>
                  <div
                    style={{
                      color: "black",
                      margin: "20px 0 0 0",
                    }}
                  >
                    Developing and creating computer applications for use on
                    mobile devices. We develop cross-platform applications for
                    both android and iOS and Android. You can track and make
                    instant updates from your phone right at your fingertips.
                    <br />
                    <div style={{ marginTop: "1em" }} />
                    Our app development teams are highly trained analysts, UX
                    specialists, and certified software engineers who are
                    well-versed in developing applications for all main
                    platforms, including iOS and Android.
                  </div>
                </Content.Text>
                {/* <Content.Button to="/">Get Started Now</Content.Button> */}
              </Content.Box>
            </Col>
          </Row>
        </Content.Block>
      </Container>
    </Content>
  );
}
