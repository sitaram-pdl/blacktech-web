import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SignInForm from "./style";
import SigninBgImg from "~image/accounts/sign-in.jpg";
import styles from "./style.module.css";
import Link from "next/link";
import AbsoluteHeader from "~components/AbsoluteHeader2/AbsoluteHeader2";
import cx from "classnames";
import { useRouter } from "next/router";
export default function GettingStarted() {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [temp, setTemp] = useState(false);
  const option = [
    {
      main: "Subscribe RestroX",
      sub: "Start using RestroX,pay and get acess to RestroX.",
      color: "#CC0B04",
    },
    {
      main: "Get Demo",
      sub: "Qwn or belong to a company,this is for you.",
      color: "#CC0B04",
    },
  ];
  const linking = (a) => {
    {
      a === "Subscribe RestroX"
        ? router.push("/GettingStarted/Subsribe")
        : router.push("/GettingStarted/GetDemo");
    }
  };
  return (
    <SignInForm backgroundColor="#f3f4f6">
      <Container className="position-static" style={{ position: "relative" }}>
        <AbsoluteHeader />
        <Row className="align-items-center justify-content-center position-static">
          <Col xs="12" className="col-xl-6 col-lg-5 position-static">
            <SignInForm.Image
              backgroundImage={SigninBgImg.src}
            ></SignInForm.Image>
          </Col>
          <Col
            xs="12"
            className="col-xxl-5 col-xl-6 col-lg-7 col-md-8 col-xs-10"
          >
            <SignInForm.Box>
              <div className={styles.contain}>
                <div>
                  <p className={styles.text1}> Join Us !</p>
                  <p className={styles.text2}>
                    To begin this journey,tell us what type of
                    <br />
                    account you'd be opening
                  </p>
                </div>
                <div className={styles.mapContain}>
                  {option.map((dat, i) => (
                    <div
                      className={cx(
                        styles.boxContain,
                        i === temp ? styles.border : null
                      )}
                      onMouseEnter={() => setTemp(i)}
                      onMouseLeave={() => setTemp(null)}
                      onClick={() => linking(dat.main)}
                    >
                      <div className={styles.icon}>
                        <div className={styles.relativeIcon}>
                          <svg
                            width="59"
                            height="57"
                            viewBox="0 0 50 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M25 0L49.7275 17.9656L40.2824 47.0344H9.71758L0.272532 17.9656L25 0Z"
                              fill={i === temp ? " #CC0B04" : "none"}
                              stroke="#CC0B04"
                              stroke-width="1.4"
                            />
                          </svg>
                          <div className={styles.absoluteIcon}>
                            {dat.main === "Subscribe RestroX" ? (
                              <div className={styles.usericon}>
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M3.72039 12.8864C4.50179 12.105 5.5616 11.666 6.66667 11.666H13.3333C14.4384 11.666 15.4982 12.105 16.2796 12.8864C17.061 13.6678 17.5 14.7276 17.5 15.8327V17.4994C17.5 17.9596 17.1269 18.3327 16.6667 18.3327C16.2064 18.3327 15.8333 17.9596 15.8333 17.4994V15.8327C15.8333 15.1696 15.5699 14.5338 15.1011 14.0649C14.6323 13.5961 13.9964 13.3327 13.3333 13.3327H6.66667C6.00363 13.3327 5.36774 13.5961 4.8989 14.0649C4.43006 14.5338 4.16667 15.1696 4.16667 15.8327V17.4994C4.16667 17.9596 3.79357 18.3327 3.33333 18.3327C2.8731 18.3327 2.5 17.9596 2.5 17.4994V15.8327C2.5 14.7276 2.93899 13.6678 3.72039 12.8864Z"
                                    fill={i === temp ? "white" : "#CC0B04"}
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M10.0007 3.33268C8.61994 3.33268 7.50065 4.45197 7.50065 5.83268C7.50065 7.21339 8.61994 8.33268 10.0007 8.33268C11.3814 8.33268 12.5007 7.21339 12.5007 5.83268C12.5007 4.45197 11.3814 3.33268 10.0007 3.33268ZM5.83398 5.83268C5.83398 3.5315 7.69946 1.66602 10.0007 1.66602C12.3018 1.66602 14.1673 3.5315 14.1673 5.83268C14.1673 8.13387 12.3018 9.99935 10.0007 9.99935C7.69946 9.99935 5.83398 8.13387 5.83398 5.83268Z"
                                    fill={i === temp ? "white" : "#CC0B04"}
                                  />
                                </svg>
                              </div>
                            ) : (
                              <div className={styles.briefcase}>
                                <svg
                                  width="20"
                                  height="18"
                                  viewBox="0 0 20 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M3.33398 5.66602C2.87375 5.66602 2.50065 6.03911 2.50065 6.49935V14.8327C2.50065 15.2929 2.87375 15.666 3.33398 15.666H16.6673C17.1276 15.666 17.5006 15.2929 17.5006 14.8327V6.49935C17.5006 6.03911 17.1276 5.66602 16.6673 5.66602H3.33398ZM0.833984 6.49935C0.833984 5.11864 1.95327 3.99935 3.33398 3.99935H16.6673C18.048 3.99935 19.1673 5.11864 19.1673 6.49935V14.8327C19.1673 16.2134 18.048 17.3327 16.6673 17.3327H3.33398C1.95327 17.3327 0.833984 16.2134 0.833984 14.8327V6.49935Z"
                                    fill={i === temp ? "white" : "#CC0B04"}
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M6.56622 1.39825C7.03506 0.929408 7.67094 0.666016 8.33398 0.666016H11.6673C12.3304 0.666016 12.9662 0.929408 13.4351 1.39825C13.9039 1.86709 14.1673 2.50297 14.1673 3.16602V16.4993C14.1673 16.9596 13.7942 17.3327 13.334 17.3327C12.8737 17.3327 12.5006 16.9596 12.5006 16.4993V3.16602C12.5006 2.945 12.4129 2.73304 12.2566 2.57676C12.1003 2.42048 11.8883 2.33268 11.6673 2.33268H8.33398C8.11297 2.33268 7.90101 2.42048 7.74473 2.57676C7.58845 2.73304 7.50065 2.945 7.50065 3.16602V16.4993C7.50065 16.9596 7.12755 17.3327 6.66732 17.3327C6.20708 17.3327 5.83398 16.9596 5.83398 16.4993V3.16602C5.83398 2.50297 6.09738 1.86709 6.56622 1.39825Z"
                                    fill={i === temp ? "white" : "#CC0B04"}
                                  />
                                </svg>
                              </div>
                            )}
                            {/**icon nemes are in div */}
                          </div>
                        </div>
                      </div>
                      <div className={styles.div2}>
                        <div className={styles.main}>{dat.main}</div>

                        <div className={styles.sub}>{dat.sub}</div>
                      </div>

                      <div className={styles.arrow}>
                        {i === temp ? (
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.5899 3.57806C10.2645 3.25263 9.73683 3.25263 9.4114 3.57806C9.08596 3.9035 9.08596 4.43114 9.4114 4.75657L13.8221 9.16732H4.16732C3.70708 9.16732 3.33398 9.54041 3.33398 10.0007C3.33398 10.4609 3.70708 10.834 4.16732 10.834H13.8221L9.4114 15.2447C9.08596 15.5702 9.08596 16.0978 9.4114 16.4232C9.73683 16.7487 10.2645 16.7487 10.5899 16.4232L16.4232 10.5899C16.7487 10.2645 16.7487 9.73683 16.4232 9.4114L10.5899 3.57806Z"
                              fill="#CC0B04"
                            />
                          </svg>
                        ) : null}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SignInForm.Box>
          </Col>
        </Row>
      </Container>
    </SignInForm>
  );
}
