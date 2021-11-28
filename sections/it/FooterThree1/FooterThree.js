import { Link } from "~components";
import LogoBlack from "~image/logo/blacktech.png";
import React from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import instaImg1 from "~image/it-services/insta-1.png";
import instaImg2 from "~image/it-services/insta-2.png";
import instaImg3 from "~image/it-services/insta-3.png";
import instaImg4 from "~image/it-services/insta-4.png";
import instaImg5 from "~image/it-services/insta-5.png";
import instaImg6 from "~image/it-services/insta-6.png";
import Footer from "./style";
export default function FooterThree() {
  return (
    <Footer>
      <Container>
        <Footer.Box pbXL="95px">
          <Row>
            <Col xs="12" className="col-lg-4 col-md-8 col-xs-10">
              <Footer.Widgets className="footer-widgets footer-widgets--l7">
                {/* Brand Logo*/}
                <Footer.Box mb="30px">
                  <Link to="/">
                    <img
                      src={LogoBlack.src}
                      alt="logo"
                      style={{ width: "180px", marginLeft: "1.4em" }}
                    />
                  </Link>
                </Footer.Box>
                <Footer.Text mb="36px">
                  We’re the digital agency to create
                  <br className="d-none d-xl-block" /> your digital presence for
                  better
                  <br className="d-none d-xl-block" /> conversion and sales.
                </Footer.Text>
              </Footer.Widgets>
            </Col>
            <Col xs="12" className="col-lg-8">
              <Row>
                <Col xs="12" className="col-lg-4 col-xs-6">
                  <Footer.Widgets>
                    <Footer.Title>Contact Details</Footer.Title>
                    <Footer.Address className="widgets-address">
                      <Footer.AddressItem>
                        <span>
                          New Road, Pokhara <br className="d-block" />
                          Kaski, Nepal
                        </span>
                      </Footer.AddressItem>
                      <Footer.AddressItem>
                        <a href="tel:+9779802839909">+9779802839909</a>
                        <a href="mailto:hello@blacktech.com.np">
                          hello@blacktech.com.np
                        </a>
                      </Footer.AddressItem>
                      <Footer.AddressItem></Footer.AddressItem>
                    </Footer.Address>
                  </Footer.Widgets>
                </Col>
                <Col xs="12" className="col-lg-4 col-xs-6">
                  <Footer.Widgets>
                    <Footer.Title>Company</Footer.Title>
                    <Footer.List>
                      <Footer.ListItems>
                        <Link to="/">Home</Link>
                      </Footer.ListItems>
                      <Footer.ListItems>
                        <Link to="/">Service</Link>
                      </Footer.ListItems>
                      <Footer.ListItems>
                        <Link to="/portfolio/masonry/portfolio-masonary-3">
                          Portfolio
                        </Link>
                      </Footer.ListItems>
                      <Footer.ListItems>
                        <Link to="/digital">About Us</Link>
                      </Footer.ListItems>
                      <Footer.ListItems>
                        <Link to="/innerpage/contact/contact-1">Contact</Link>
                      </Footer.ListItems>
                    </Footer.List>
                  </Footer.Widgets>
                </Col>

                <Col xs="12" className="col-lg-4 col-xs-7">
                  <Footer.Widgets>
                    <Footer.Title>Instagram</Footer.Title>
                    <Footer.Gallery as={Row}>
                      <Col xs="4">
                        <Image
                          src={instaImg1}
                          alt="insta-image"
                          className="w-100"
                        />
                      </Col>
                      <Col xs="4">
                        <Image
                          src={instaImg2}
                          alt="insta-image"
                          className="w-100"
                        />
                      </Col>
                      <Col xs="4">
                        <Image
                          src={instaImg3}
                          alt="insta-image"
                          className="w-100"
                        />
                      </Col>
                      <Col xs="4">
                        <Image
                          src={instaImg4}
                          alt="insta-image"
                          className="w-100"
                        />
                      </Col>
                      <Col xs="4">
                        <Image
                          src={instaImg5}
                          alt="insta-image"
                          className="w-100"
                        />
                      </Col>
                      <Col xs="4">
                        <Image
                          src={instaImg6}
                          alt="insta-image"
                          className="w-100"
                        />
                      </Col>
                    </Footer.Gallery>
                  </Footer.Widgets>
                </Col>
              </Row>
            </Col>
          </Row>
        </Footer.Box>
        <Footer.Copyright>
          <Footer.CopyrightText>
            © 2021 Black Tech Pvt.Ltd. All Rights Reserved.
          </Footer.CopyrightText>
          <Footer.SocialShare>
            <Footer.SocialShareItem>
              <a target="_blank" href="https://www.facebook.com/blacktechnepal">
                <i className="fab fa-facebook-square" />
              </a>
            </Footer.SocialShareItem>

            <Footer.SocialShareItem>
              <a target="_blank" href="https://www.instagram.com/black___tech/">
                <i className="fab fa-instagram" />
              </a>
            </Footer.SocialShareItem>
            <Footer.SocialShareItem>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/71957293/admin/"
              >
                <i className="fab fa-linkedin" />
              </a>
            </Footer.SocialShareItem>
            <Footer.SocialShareItem>
              <a target="_blank" href="tel:+9779802839909">
                <i className="fas fa-phone" />
              </a>
            </Footer.SocialShareItem>
          </Footer.SocialShare>
        </Footer.Copyright>
      </Container>
    </Footer>
  );
}
