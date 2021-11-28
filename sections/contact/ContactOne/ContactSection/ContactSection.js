import React from "react";
import Contact from "./style";
import SectionTitle from "./Components/SectionTitle";
import { Col, Container, Row } from "react-bootstrap";
import LogoBlack from "~image/contact.png";
import styles from "./Custom.module.css";
import cx from "classnames";
export default function ContactOne() {
  const option = [
    {
      name: "+977 9825165567",
      label: "We are always happy to help.",
    },
    {
      name: "Chat",
      label: "We are always happy to help.",
    },
    {
      name: "support@restrox.co",
      label: "We are always happy to help.",
    },
  ];
  return (
    <Contact backgroundColor="#f3f4f6">
      <Container>
        <Row>
          <Col
            xs="12"
            className={cx("col-xl-7 col-lg-7", styles.image)}
            style={{ marginRight: "1em" }}
          >
            <img src={LogoBlack.src} className={styles.image2} />
          </Col>

          <Col className={cx("col-xl-4 col-lg-4", styles.margintop)}>
            <Contact.Box>
              <SectionTitle
                subTitle="Contact Us"
                title="Get in Touch"
                text="Have an inquiry or some feedback for us? Fill out the form below to contact our team."
                subTitleProps={{ mb: "10px" }}
                titleProps={{ mb: "10px", as: "h6" }}
                mb="50px"
              />
            </Contact.Box>
            <Contact.From>
              <form action="./">
                <Row>
                  <Col xs="12" className="col-lg-6 mb-4">
                    <div className="form-floating">
                      <input
                        className="form-control"
                        placeholder="Leave a comment here"
                        id="floatinginput"
                      />
                      <label htmlFor="floatinginput">First Name</label>
                    </div>
                  </Col>
                  <Col xs="12" className="col-lg-6 mb-4">
                    <div className="form-floating">
                      <input
                        className="form-control"
                        placeholder="Leave a comment here"
                        id="floatinginput2"
                      />
                      <label htmlFor="floatinginput2">Last Name</label>
                    </div>
                  </Col>
                  <Col xs="12" className="col-lg-6 mb-4">
                    <div className="form-floating">
                      <input
                        className="form-control"
                        placeholder="Leave a comment here"
                        id="floatinginput"
                      />
                      <label htmlFor="floatinginput">Your Email</label>
                    </div>
                  </Col>
                  <Col xs="12" className="col-lg-6 mb-4">
                    <div className="form-floating">
                      <input
                        className="form-control"
                        placeholder="Leave a comment here"
                        id="floatinginput2"
                      />
                      <label htmlFor="floatinginput2">Phone number</label>
                    </div>
                  </Col>
                  <Col xs="12" className="col-lg-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave a comment here"
                        id="floatingTextarea3"
                      />
                      <label htmlFor="floatingTextarea3">
                        Your Message Here{" "}
                      </label>
                    </div>
                  </Col>
                  <Col xs="12" className="col-lg-12">
                    <Row className="align-items-center mt-3">
                      <div className="col-md-8 col-lg-7 col-md-6 col-xl-8 pt-3">
                        <div className="form-check d-flex align-items-center">
                          <input
                            className="form-check-input bg-white float-none mt-0"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            Your email address will not be published. Required
                            fields are marked *
                          </label>
                        </div>
                      </div>
                      <Col
                        xs="12"
                        className="col-md-4 col-lg-5 col-xl-4 text-md-end pt-3"
                      >
                        <Contact.Button>Send Message</Contact.Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </form>
            </Contact.From>
          </Col>
        </Row>
      </Container>
    </Contact>
  );
}
