import React from "react";
import { Link } from "~components";
import { Container, Row, Col } from "react-bootstrap";
import { useRouter } from "next/router";
// import { Images } from '~data'
import Footer from "./style";
import LogoWhite from "~image/logo/logo-black.png";
import styles from "./style.module.css";
export default function FooterOne() {
  const router = useRouter();
  return (
    <Footer>
      <Container>
        <Footer.Box pbXL="95px">
          <Row>
            <Col xs="12" className="col-lg-4 col-md-8 col-xs-10">
              <Footer.Widgets className="footer-widgets footer-widgets--l7">
                {/* Brand Logo*/}
                <Footer.Box mb="30px">
                  <Link to="#">
                    <img
                      src={LogoWhite.src}
                      alt="logo"
                      style={{ width: "159px" }}
                    />
                  </Link>
                </Footer.Box>
                <Footer.Text mb="36px">
                  The best medicines & biggest
                  <br className="d-none d-xl-block" />
                  brands within 30 minutes at your
                  <br className="d-none d-xl-block" />
                  home. Experience the power of
                  <br className="d-none d-xl-block" />
                  MedCartel today.
                </Footer.Text>
              </Footer.Widgets>
            </Col>
            <Col xs="12" className="col-xl-8">
              <Row>
                <Col xs="6" className="col-md-4 col-xs-6">
                  <Footer.Widgets>
                    <Footer.Title>Features</Footer.Title>
                    <Footer.List>
                      <Footer.ListItems>
                        <Link to="">Account Management</Link>
                      </Footer.ListItems>
                      <Footer.ListItems>
                        <Link to="/">Inventory Management</Link>
                      </Footer.ListItems>
                      <Footer.ListItems>
                        <Link to="s">Built-in POS</Link>
                      </Footer.ListItems>
                      <Footer.ListItems>
                        <Link to="">Staff Management</Link>
                      </Footer.ListItems>
                      <Footer.ListItems>
                        <Link to="">Productivity Tools</Link>
                      </Footer.ListItems>
                      <Footer.ListItems>
                        <Link to="">Unlimited Menus</Link>
                      </Footer.ListItems>{" "}
                      <Footer.ListItems>
                        <Link to="">Tailored Apps</Link>
                      </Footer.ListItems>{" "}
                      <Footer.ListItems>
                        <Link to="">Social Media Management</Link>
                      </Footer.ListItems>{" "}
                      <Footer.ListItems>
                        <Link to="">Free Website</Link>
                      </Footer.ListItems>{" "}
                      <Footer.ListItems>
                        <Link to="">Own Delivery App</Link>
                      </Footer.ListItems>
                    </Footer.List>
                  </Footer.Widgets>
                </Col>
                <Col xs="6" className="col-md-4 col-xs-6">
                  <Footer.Widgets>
                    <Footer.Title>Learn More</Footer.Title>
                    <Footer.List>
                      <Footer.ListItems>
                        <Link to="">Support</Link>
                      </Footer.ListItems>
                      <Footer.ListItems>
                        <Link to="/">Billing & Subscription</Link>
                      </Footer.ListItems>
                      <Footer.ListItems>
                        <Link to="s">Blog</Link>
                      </Footer.ListItems>
                      <Footer.ListItems>
                        <Link to="">Tutorial Videos</Link>
                      </Footer.ListItems>
                      <Footer.ListItems>
                        <Link to="">Ebooks</Link>
                      </Footer.ListItems>
                      <Footer.ListItems>
                        <Link to="">Forum</Link>
                      </Footer.ListItems>{" "}
                      <Footer.ListItems>
                        <Link to="">Community</Link>
                      </Footer.ListItems>{" "}
                      <Footer.ListItems>
                        <Link to="">Hire an Expert</Link>
                      </Footer.ListItems>{" "}
                      <Footer.ListItems>
                        <Link to="">Customers</Link>
                      </Footer.ListItems>{" "}
                      <Footer.ListItems>
                        <Link to="">Restro X vs Others</Link>
                      </Footer.ListItems>
                    </Footer.List>
                  </Footer.Widgets>
                </Col>
                <Col xs="12" className="col-md-4 col-xs-6">
                  <Footer.Widgets>
                    <Footer.Title>Company</Footer.Title>
                    <Footer.List>
                      <Footer.ListItems>
                        <Link to="">About Us</Link>
                      </Footer.ListItems>
                      <Footer.ListItems>
                        <Link to="/">Contact Us</Link>
                      </Footer.ListItems>
                      <Footer.ListItems>
                        <div className={styles.link}>
                          <div onClick={() => router.push("/innerpage/career")}>
                            Careers
                          </div>
                          <div style={{ color: "red", marginLeft: "1em" }}>
                            we're hiring.
                          </div>
                        </div>
                      </Footer.ListItems>
                      <Footer.ListItems>
                        <Link to="">Press</Link>
                      </Footer.ListItems>
                      <Footer.ListItems>
                        <Link to="">Apps</Link>
                      </Footer.ListItems>
                      <Footer.ListItems>
                        <Link to="">Security</Link>
                      </Footer.ListItems>{" "}
                      <Footer.ListItems>
                        <div className={styles.link}>
                          <div onClick={() => router.push("/innerpage/terms")}>
                            Tearms & Condition
                          </div>
                        </div>
                      </Footer.ListItems>{" "}
                      <Footer.ListItems>
                        <div className={styles.link}>
                          <div onClick={() => router.push("/innerpage/terms")}>
                            Refund Poilcy
                          </div>
                        </div>
                      </Footer.ListItems>{" "}
                      <Footer.ListItems>
                        <div className={styles.link}>
                          <div onClick={() => router.push("/innerpage/terms")}>
                            Privacy & Security Policy
                          </div>
                        </div>
                      </Footer.ListItems>{" "}
                      <Footer.ListItems>
                        <div className={styles.link}>
                          <div onClick={() => router.push("/innerpage/terms")}>
                            Cookie Policy & Preferences
                          </div>
                        </div>
                      </Footer.ListItems>
                      <Footer.ListItems>
                        <Link to="">Referral Programme</Link>
                      </Footer.ListItems>{" "}
                      <Footer.ListItems>
                        <Link to="">Become an Affiliate</Link>
                      </Footer.ListItems>
                    </Footer.List>
                  </Footer.Widgets>
                </Col>
              </Row>
            </Col>
          </Row>
        </Footer.Box>
        <Footer.Copyright>
          <Footer.CopyrightText>
            © 2021 RestroX by Blacktech. All Rights Reserved
          </Footer.CopyrightText>
          <Footer.SocialShare>
            <Footer.SocialShareItem>
              <a target="_blank" href="https://www.facebook.com">
                <i className="fab fa-facebook-square" />
              </a>
            </Footer.SocialShareItem>
            <Footer.SocialShareItem>
              <a target="_blank" href="https://twitter.com">
                <i className="fab fa-twitter" />
              </a>
            </Footer.SocialShareItem>
            <Footer.SocialShareItem>
              <a target="_blank" href="https://www.instagram.com">
                <i className="fab fa-instagram" />
              </a>
            </Footer.SocialShareItem>
            <Footer.SocialShareItem>
              <a target="_blank" href="https://www.linkedin.com">
                <i className="fab fa-linkedin" />
              </a>
            </Footer.SocialShareItem>
          </Footer.SocialShare>
        </Footer.Copyright>
      </Container>
    </Footer>
  );
}
