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
export default function Subsribe() {
  const router = useRouter();
  const [showmodal, setShowmodal] = useState(false);
  const [temp, setTemp] = useState(false);
  const [userdata, setUserdata] = useState(
    JSON.parse(localStorage.getItem("userdata"))
  );
  const [state, setState] = useState({
    firstname: userdata.user.name.first,
    lastname: userdata.user.name.last,
    email: userdata.user.email[0],
    phone: userdata.user.contact.phoneNo,
    countryCode: userdata.user.contact.countryCode,
    newpassword: "",
    confirmpassword: "",
    checkMe: false,
  });
  const [showemailmodal, setShowemailmodal] = useState(false);
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [islogin, setIslogin] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [errormsg, setErrormsg] = useState("");
  const [errormsg1, setErrormsg1] = useState("");

  const [errormsg3, setErrormsg3] = useState("");
  const [errormsg4, setErrormsg4] = useState("");
  const [errormsg5, setErrormsg5] = useState("");
  const [errormsg6, setErrormsg6] = useState("");

  const handleChange = (evt) => {
    setShow(false);
    setShow1(false);
    setIslogin(false);
    setShow3(false);
    setShow4(false);
    setShow5(false);
    setShow6(false);
    const name = evt.target.name;
    const value =
      evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
    setState({
      ...state,
      [name]: value,
    });
  };
  const validate = (e) => {
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
    if (state.newpassword === "") {
      setShow5(true);
      setErrormsg5("New Password is empty");
      return;
    }
    if (state.newpassword.length < 8) {
      setShow5(true);
      setErrormsg5("New Password is too short");
      return;
    }
    if (state.newpassword.length > 32) {
      setShow5(true);
      setErrormsg5("New Password is too long");
      return;
    }
    if (state.confirmpassword === "") {
      setShow6(true);
      setErrormsg6("Confirm Password is empty");
      return;
    }
    if (state.confirmpassword.length < 8) {
      setShow6(true);
      setErrormsg6("Confirm Password is too short");
      return;
    }
    if (state.confirmpassword.length > 32) {
      setShow6(true);
      setErrormsg6("Confirm Password is too long");
      return;
    }
    if (state.newpassword != state.confirmpassword) {
      setShow6(true);
      setErrormsg6("Password must match");
      return;
    }
    if (state.checkMe === false) {
      setShow5(true);
      setErrormsg5("You must agree the terms and conditions.");
      return;
    }

    saveandcontinue();
  };

  const saveandcontinue = (e) => {
    setIslogin(true);
    const data = localStorage.getItem("userdata");

    var userdata;
    if (data) {
      userdata = JSON.parse(data);
    }
    const userId = userdata.user._id;

    axios
      .patch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/employee/${userId}/completeProfile?version=1.0`,
        {
          name: {
            first: state.firstname,
            last: state.lastname,
          },
          email: state.email,
          contact: {
            countryCode: state.countryCode,
            phoneNo: state.phone,
          },
          password: state.confirmpassword,
        },
        {
          headers: {
            Authorization: "Bearer " + userdata.token,
          },
        }
      )
      .then((res) => {
        console.log(res);
        setIslogin(false);
        router.push("/innerpage/sign-in");
      })
      .catch((error) => {
        setIslogin(false);
        if (error.response.status === 401) {
          setShow3(true);
          setErrormsg3("Email is already used  ");
        }
      });
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
                  <p className={styles.text1}> Complete Your Profile!</p>
                  <p className={styles.text2}>
                    For the purpose of industry regulation,your details are
                    required
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
                        <div style={{ padding: "0.8em 0.2em" }} />
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
                        <div style={{ padding: "0.8em 0.2em" }} />
                      )}{" "}
                    </div>
                  </div>

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
                    <div style={{ padding: "0.8em 0.2em" }} />
                  )}

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
                    <div style={{ padding: "0.8em 0.2em" }} />
                  )}

                  <div className={styles.name}>
                    <div className={styles.leftname}>
                      <div className="form-floating">
                        <input
                          className="form-control"
                          type="password"
                          placeholder="Leave a comment here"
                          id="floatinginput"
                          name="newpassword"
                          value={state.newpassword}
                          onChange={handleChange}
                        />
                        <label htmlFor="floatinginput">New Password</label>
                      </div>
                    </div>
                    <div className={styles.rightname}>
                      <div className="form-floating">
                        <input
                          className="form-control"
                          type="password"
                          placeholder="Leave a comment here"
                          id="floatinginput"
                          name="confirmpassword"
                          value={state.confirmpassword}
                          onChange={handleChange}
                        />
                        <label htmlFor="floatinginput">Confirm Password</label>
                      </div>
                    </div>
                  </div>
                  <div className={styles.name}>
                    <div className={styles.leftname}>
                      {show5 ? (
                        <div
                          style={{
                            color: "red",

                            width: "100%",
                            marginTop: "-1px",
                            marginBottom: "5px",
                          }}
                        >
                          {errormsg5}
                        </div>
                      ) : (
                        <div style={{ padding: "0.8em 0.2em" }} />
                      )}
                    </div>
                    <div className={styles.rightname}>
                      {show6 ? (
                        <div
                          style={{
                            color: "red",

                            width: "100%",
                            marginTop: "-1px",
                            marginBottom: "5px",
                          }}
                        >
                          {errormsg6}
                        </div>
                      ) : (
                        <div style={{ padding: "0.8em 0.2em" }} />
                      )}{" "}
                    </div>
                  </div>
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
                  <SignInForm.FormButton className=" mt-2" onClick={validate}>
                    Save & Continue
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
      {showmodal ? (
        <div className={styles.fixed}>
          <div
            className={styles.absolute}
            onClick={() => setShowmodal(false)}
          />
          <div className={styles.contain}>
            <div>succesful</div>
            <div> Done</div>
          </div>
        </div>
      ) : null}
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
