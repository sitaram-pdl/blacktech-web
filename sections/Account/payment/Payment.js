import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SignInForm from "./style";
import SigninBgImg from "~image/accounts/sign-in.jpg";
import styles from "./style.module.css";
import Link from "next/link";
import AbsoluteHeaderLeft from "~components/AbsoluteHeaderLeft/AbsoluteHeaderLeft";
import cx from "classnames";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/router";
import Pricing from "~sections/marketing/Banner1";
import axios from "axios";
import Select from "react-select";
import PhoneInput from "react-phone-number-input";
import { countries } from "~data/countries";
import siteBrandDark from "~image/logo/logo-black.png";
import Payment from ".";
import { saturate } from "polished";

export default function Subsribe() {
  const [selectedOption, setSelectedOption] = useState(null);
  const router = useRouter();

  const [showmodal, setShowmodal] = useState(false);
  const [showmodal1, setShowmodal1] = useState(false);
  const [show, setShow] = useState(false);

  const [errormsg, setErrormsg] = useState("");
  const [show1, setShow1] = useState(false);

  const [errormsg1, setErrormsg1] = useState("");
  const [state1, setState1] = useState([]);
  const [state, setState] = useState({
    email: "",
    newpassword: "",
    confirmpassword: "",
    checkMe: false,
  });

  const handleChange = (evt) => {
    setShow(false);
    setShow1(false);

    setState(state1.email);
    const name = evt.target.name;
    const value =
      evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
    setState({
      ...state,
      [name]: value,
    });
  };
  const Payment = () => {
    axios
      .post(`${process.env.NEXT_PUBLIC_BASE_URL}/employee/signup?version=1.0`, {
        name: {
          first: state1.firstname,
          last: state1.lastname,
        },
        email: state1.email,
        contact: {
          countryCode: state1.countryCode,
          phoneNo: state1.phone,
        },
        password: state.confirmpassword,
        restaurantName: state1.restaurentName,
      })
      .then((res) => {
        console.log(res);
        window.location = "https://dunga.restrox.co/";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const paynowvalidate = (e) => {
    e.preventDefault();

    if (state.newpassword === "") {
      setShow(true);
      setErrormsg("New Password is empty");
      return;
    }
    if (state.newpassword.length < 8) {
      setShow(true);
      setErrormsg("New Password is too short");
      return;
    }
    if (state.newpassword.length > 32) {
      setShow(true);
      setErrormsg("New Password is too long");
      return;
    }
    if (state.confirmpassword === "") {
      setShow1(true);
      setErrormsg1("Confirm Password is empty");
      return;
    }
    if (state.confirmpassword.length < 8) {
      setShow1(true);
      setErrormsg1("Confirm Password is too short");
      return;
    }
    if (state.confirmpassword.length > 32) {
      setShow1(true);
      setErrormsg1("Confirm Password is too long");
      return;
    }
    if (state.newpassword != state.confirmpassword) {
      setShow1(true);
      setErrormsg1("Password must match");
      return;
    }
    Payment();
  };

  useEffect(() => {
    const data = localStorage.getItem("userdata");

    if (data) {
      setState1(JSON.parse(data));
    }

    console.log(state1.phone);
  }, []);

  return (
    <div styles={{ pasition: "relative" }}>
      <div>
        <img
          src={siteBrandDark.src}
          alt="site-brand"
          style={{
            width: "119px",
            cursor: "pointer",
            top: "20px",
            left: "20px",
            position: "fixed",
          }}
        />
      </div>
      <div className={styles.container} style={{ marginTop: "30px" }}>
        <div className={styles.row1}>
          <Pricing />
        </div>
        <div className={styles.row2}>
          <div className={styles.button} onClick={() => setShowmodal(true)}>
            pay
          </div>
        </div>
      </div>

      {showmodal ? (
        //modal
        <div className={styles.fixed}>
          <div
            className={styles.absolute}
            onClick={() => setShowmodal(false)}
          />
          <div className={styles.contain} style={{ position: "relative" }}>
            <div>
              <img
                src={siteBrandDark.src}
                alt="site-brand"
                style={{
                  width: "129px",
                  cursor: "pointer",
                }}
              />
            </div>

            <div className={styles.inputContainer}>
              <input type="text" value={state1.email} name="email" disabled />
              <text
                className={styles.filled1}
                htmlFor={name}
                style={{
                  position: "absolute",
                  top: "1px",
                  left: "14px",
                  fontSize: "0.8em",
                }}
              >
                Email
              </text>
            </div>
            <div className={styles.passcontain}>
              <div className={styles.leftpass}>
                <div className={styles.inputContainer}>
                  <input
                    type="password"
                    value={state.newpassword}
                    name="newpassword"
                    onChange={handleChange}
                  />
                  <label
                    className={state.password === "" ? null : styles.filled}
                    htmlFor={name}
                  >
                    New Password
                  </label>
                </div>
              </div>
              <div className={styles.rightpass}>
                <div className={styles.inputContainer}>
                  <input
                    type="password"
                    value={state.confirmpassword}
                    name="confirmpassword"
                    onChange={handleChange}
                  />
                  <label
                    className={state.password === "" ? null : styles.filled}
                    htmlFor={name}
                  >
                    Confirm Password
                  </label>
                </div>
              </div>
            </div>
            <div className={styles.passcontain1}>
              <div className={styles.leftpass}>
                {show ? (
                  <div
                    style={{
                      color: "red",
                      marginLeft: "1em",
                      width: "100%",
                      marginTop: "5px",
                      marginBottom: "5px",
                      fontSize: "0.8em",
                    }}
                  >
                    {errormsg}
                  </div>
                ) : (
                  <div style={{ padding: "1em 0" }} />
                )}
              </div>
              <div className={styles.rightpass1}>
                {show1 ? (
                  <div
                    style={{
                      color: "red",
                      marginLeft: "1em",
                      width: "100%",
                      marginTop: "5px",
                      marginBottom: "5px",
                      fontSize: "0.8em",
                    }}
                  >
                    {errormsg1}
                  </div>
                ) : (
                  <div style={{ padding: "1em 0" }} />
                )}{" "}
              </div>
            </div>

            <div className={styles.paynow} onClick={paynowvalidate}>
              Pay Now
            </div>
          </div>
        </div>
      ) : null}
      {showmodal1 ? (
        <div className={styles.relative1}>
          <div className={styles.absolute1} />
          <div className={styles.contain1}>
            <div>Thank You</div>
            <div>SuccessFul</div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
