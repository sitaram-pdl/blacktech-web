import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SignInForm from "./style";
import SigninBgImg from "~image/accounts/sign-in.jpg";
import styles from "./style.module.css";
import Link from "next/link";
import AbsoluteHeaderLeft from "~components/AbsoluteHeaderLeft/AbsoluteHeaderLeft";
import cx from "classnames";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/router";
import axios from "axios";
import Select from "react-select";
import PhoneInput from "react-phone-number-input";
import { countries } from "~data/countries";

export default function Subsribe() {
  const [selectedOption, setSelectedOption] = useState(null);
  const router = useRouter();

  const [temp, setTemp] = useState(false);
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    restaurentName: "",
    phone: "",
    countryCode: "977",
    checkMe: false,
  });
  const [islogin, setIslogin] = useState(false);
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [errormsg, setErrormsg] = useState("");
  const [errormsg1, setErrormsg1] = useState("");
  const [errormsg2, setErrormsg2] = useState("");
  const [errormsg3, setErrormsg3] = useState("");
  const [errormsg4, setErrormsg4] = useState("");
  const handleChange = (evt) => {
    setIslogin(false);
    setShow(false);
    setShow1(false);
    setShow2(false);
    setShow3(false);
    setShow4(false);
    const name = evt.target.name;
    const value =
      evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
    setState({
      ...state,
      [name]: value,
    });
  };
  const login = (e) => {
    axios
      .post(`${process.env.NEXT_PUBLIC_BASE_URL}/otp/preSignUp?version=1.0`, {
        email: state.email,
        name: {
          first: state.firstname,
          last: state.lastname,
        },
        restaurantName: state.restaurantName,
      })
      .then(function (response) {
        router.push({
          pathname: "/GettingStarted/EmailVerification",
          query: {
            prevpath: "/GettingStarted/Subsribe",
            email: state.email,
          },
        });
        localStorage.setItem("userdata", JSON.stringify(state));
        setIslogin(false);
      })
      .catch(function (error) {
        setIslogin(false);
        if (error.response.status === 401) {
          setShow4(true);
          setErrormsg4("Email already exist");
        }
        if (error.response.status === 500) {
          setShow4(true);
          setErrormsg4("Something Went wrong");
        }

        console.log(error.response);
      });
  };

  const loginvalidate = (e) => {
    const validateEmail = (email) => {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    };
    e.preventDefault();
    if (state.firstname === "") {
      setShow(true);
      setErrormsg("Firstname is empty");
      return;
    }
    if (state.firstname.length < 2) {
      setShow(true);
      setErrormsg("Firstname is too short");
      return;
    }
    if (state.firstname.length > 32) {
      setShow(true);
      setErrormsg("Firstname is too long");
      return;
    }
    if (state.lastname === "") {
      setShow1(true);
      setErrormsg1("Lastname is empty");
      return;
    }
    if (state.lastname.length < 2) {
      setShow1(true);
      setErrormsg1("Lastname is too short");
      return;
    }
    if (state.lastname.length > 32) {
      setShow1(true);
      setErrormsg1("Lastname is too long");
      return;
    }
    if (state.restutantName === "") {
      setShow2(true);
      setErrormsg2("Restaurant is empty");
      return;
    }
    if (state.restaurentName.length < 2) {
      setShow2(true);
      setErrormsg2("Restaurant is too short");
      return;
    }
    if (state.restaurentName.length > 32) {
      setShow2(true);
      setErrormsg2("Restaurant is too long");
      return;
    }
    if (state.email === "") {
      setShow3(true);
      setErrormsg3("Email is empty");
      return;
    }
    if (!validateEmail(state.email)) {
      setShow3(true);
      setErrormsg3("Invalid email entry ");
      return;
    }
    if (state.phone === "") {
      setShow4(true);
      setErrormsg4("Phone no is emptyy");
      return;
    }
    if (state.checkMe === false) {
      setShow4(true);
      setErrormsg4("You must agree the terms and conditions.");
      return;
    }
    setIslogin(true);

    login();
  };

  return (
    <SignInForm backgroundColor="#f3f4f6">
      <Container className="position-static" style={{ position: "relative" }}>
        <AbsoluteHeaderLeft />
        <Col className="align-items-center justify-content-center position-static">
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
              <SignInForm.FromSection>
                <div>
                  <p className={styles.text1}> Join us!</p>
                  <p className={styles.text2}>
                    To begin this journey,register your resturant with RestroX
                    <br />& enjoy your resturant experience.
                  </p>
                </div>

                <form action="./">
                  <div className={styles.name}>
                    <div className={styles.leftname}>
                      <div className="form-floating">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Leave a comment here"
                          id="floatinginput"
                          name="firstname"
                          value={state.firstname}
                          onChange={handleChange}
                        />
                        <label htmlFor="floatinginput">First Name</label>
                      </div>
                    </div>
                    <div className={styles.rightname}>
                      <div className="form-floating">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Leave a comment here"
                          id="floatinginput"
                          name="lastname"
                          value={state.lastname}
                          onChange={handleChange}
                        />
                        <label htmlFor="floatinginput">Last Name</label>
                      </div>
                    </div>
                  </div>
                  <div className={styles.name}>
                    <div className={styles.leftname}>
                      {show ? (
                        <div
                          style={{
                            color: "red",

                            width: "100%",
                            marginTop: "-1px",
                            marginBottom: "5px",
                          }}
                        >
                          {errormsg}
                        </div>
                      ) : (
                        <div style={{ padding: "1em 0" }} />
                      )}
                    </div>
                    <div className={styles.rightname}>
                      {show1 ? (
                        <div
                          style={{
                            color: "red",

                            width: "100%",
                            marginTop: "-1px",
                            marginBottom: "5px",
                          }}
                        >
                          {errormsg1}
                        </div>
                      ) : (
                        <div style={{ padding: "1em 0" }} />
                      )}{" "}
                    </div>
                  </div>
                  <div className="form-floating">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Leave a comment here"
                      id="floatinginput"
                      name="restaurentName"
                      value={state.restaurentName}
                      onChange={handleChange}
                    />
                    <label htmlFor="floatinginput">Resturent Name</label>
                  </div>
                  {show2 ? (
                    <div
                      style={{
                        color: "red",

                        width: "100%",
                        marginTop: "-1px",
                        marginBottom: "5px",
                      }}
                    >
                      {errormsg2}
                    </div>
                  ) : (
                    <div style={{ padding: "1em 0" }} />
                  )}
                  <div className="form-floating">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Leave a comment here"
                      id="floatinginput"
                      name="email"
                      value={state.email}
                      onChange={handleChange}
                    />
                    <label htmlFor="floatinginput">Your Email</label>
                  </div>
                  {show3 ? (
                    <div
                      style={{
                        color: "red",

                        width: "100%",
                        marginTop: "-1px",
                        marginBottom: "5px",
                      }}
                    >
                      {errormsg3}
                    </div>
                  ) : (
                    <div style={{ padding: "1em 0" }} />
                  )}
                  <div
                    className={styles.relative}
                    style={{ backgroundColor: "#fff" }}
                  >
                    <div className="form-floating">
                      <input
                        className="form-control"
                        type="tel"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        placeholder="Leave a comment here"
                        id="floatinginput2"
                        name="phone"
                        value={state.phone}
                        onChange={handleChange}
                      />
                      <label htmlFor="floatinginput2">Your Phone Number </label>
                    </div>

                    <div className={styles.select}></div>
                  </div>
                  {show4 ? (
                    <div
                      style={{
                        color: "red",

                        width: "100%",
                        marginTop: "-1px",
                        marginBottom: "5px",
                      }}
                    >
                      {errormsg4}
                    </div>
                  ) : (
                    <div style={{ padding: "1em 0" }} />
                  )}

                  <div className="form-check d-flex align-items-center mt-6 mb-3 justify-content-center">
                    <input
                      className="form-check-input bg-white float-none mt-0 mb-0 me-3"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault"
                      style={{ marginTop: "0.4em" }}
                      name="checkMe"
                      checked={state.checkMe}
                      onChange={handleChange}
                    />
                    <SignInForm.FormText htmlFor="flexCheckDefault">
                      I agree to{" "}
                      <text
                        className={styles.blueText}
                        onClick={() => router.push("/innerpage/terms")}
                      >
                        {" "}
                        Terms & Conditions& Privacy Policies{" "}
                      </text>
                    </SignInForm.FormText>
                  </div>
                  <SignInForm.FormButton
                    className=" mt-2"
                    onClick={loginvalidate}
                  >
                    Continue
                  </SignInForm.FormButton>
                </form>
                <div className={styles.text33}>
                  your data is safely secured.
                </div>
              </SignInForm.FromSection>
            </SignInForm.Box>
          </Col>
        </Col>
      </Container>
      {islogin ? (
        <div className={styles.modal1}>
          <div className={styles.absolute1} />
          <div className={styles.contain1}>
            <img
              src={
                "https://icon-library.com/images/progress-icon-gif/progress-icon-gif-1.jpg"
              }
              style={{ width: "11em" }}
            />
          </div>
        </div>
      ) : null}
    </SignInForm>
  );
}
