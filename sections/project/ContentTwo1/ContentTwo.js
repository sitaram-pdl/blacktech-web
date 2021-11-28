import React from "react";
import Image from "next/image";
import Content from "./style";
import { Link, SuperTag } from "~components";
import { Col, Container, Row } from "react-bootstrap";
import shapeOne from "~image/project-management/l2-content-2-shape.png";
import shapeTwo from "~image/project-management/l2-content-2-shape-2.png";
import imageTwo from "~image/project-management/l2-content-img-2.png";
import imageOne from "~image/marketing/digital1.gif"
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
                  Web Development - Make your site great again
                </div>
                <div
                  style={{
                    fontSize: "24px",
                    fontWeight: "400",
                    color: "black",
                    opacity: "0.5",
                  }}
                >
                  We build and design fantastic websites that work for you!
                </div>

                <Content.Text>
                  <div
                    style={{
                      color: "black",
                      margin: "20px 0 0 0",
                    }}
                  >
                    Building and designing websites to your best. We take your
                    ideas and turn them into reality by building one of the
                    finest websites and web apps for you. It’s the work that
                    happens behind the scenes to make a website look great, work
                    fast and perform well with a seamless user experience
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
