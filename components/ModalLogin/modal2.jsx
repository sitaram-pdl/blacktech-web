import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SignInForm from "./style";
import SigninBgImg from "~image/accounts/sign-in.jpg";
import styles from "./Modal2.module.css";
import Link from "next/link";
import cx from "classnames";
import "antd/dist/antd.css";
import axios from "axios";

import Modal from "~components/ModalLogin/ModalLogin";
import { notification } from "antd";

import { useRouter } from "next/router";
import { backgrounds } from "polished";

export default function modal2(props) {
  const inputRef = React.useRef("");
  const router = useRouter();
  const [islogin, setIslogin] = useState(false);
  const [show, setShow] = useState(false);
  const [data, setData] = useState("");
  const [show1, setShow1] = useState(false);
  const [errormsg, setErrormsg] = useState("");
  const [errormsg1, setErrormsg1] = useState("");
  const [value, setValue] = useState("");
  const [state, setState] = useState({
    email: "",
    password: "",

    checkMe: false,
  });
  const handleChange = (evt) => {
    setShow(false);
    setIslogin(false);
    setShow1(false);
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

    if (state.email === "") {
      setShow(true);
      setErrormsg("Email is empty");
      return;
    }
    if (!validateEmail(state.email)) {
      setShow(true);
      setErrormsg("Invalid email entry ");
      return;
    }

    if (state.password === "") {
      setShow1(true);
      setErrormsg1("Password is empty");
      return;
    }
    if (state.password.length < 8) {
      setShow1(true);
      setErrormsg1("Password is too short");
      return;
    }
    if (state.password.length > 32) {
      setShow1(true);
      setErrormsg1("Password is too long");
      return;
    }
    if (state.email === props.emailbefore) {
      setShow1(true);
      setErrormsg1("New Email references to self");
      return;
    }

    setIslogin(true);
    submit();
  };

  const submit = () => {
    const data = localStorage.getItem("userdata");

    var userdata;
    if (data) {
      userdata = JSON.parse(data);
    }
    const userId = userdata.user._id;

    axios
      .patch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/employee/${userId}/toOldAccount?version=1.0`,
        {
          email: state.email,
          password: state.password,
        },
        {
          headers: {
            Authorization: "Bearer " + userdata.token,
          },
        }
      )
      .then((res) => {
        console.log(res.data);

        localStorage.setItem("userdata", JSON.stringify(res.data));
        router.push("/innerpage/welcome");
        setIslogin(false);
      })
      .catch((error) => {
        if (error.response.status === 401) {
          setShow1(true);
          setErrormsg1(error.response.data.message);
        }
        setIslogin(false);
      });
  };

  return (
    <div className={styles.container}>
      <div>Please login to access your account.</div>

      <form>
        <div className={styles.inputContainer}>
          <input
            type="text"
            value={state.email}
            name="email"
            onChange={handleChange}
            style={{ color: "black" }}
          />
          <label
            className={state.email === "" ? null : styles.filled}
            htmlFor={name}
          >
            Email
          </label>
        </div>
        {show ? (
          <div
            style={{
              color: "red",
              textAlign: "left",
              width: "100%",
              marginTop: "-1px",
              marginBottom: "5px",
              marginLeft: "1em",
            }}
          >
            {errormsg}
          </div>
        ) : (
          <div style={{ padding: "0.4em 0.2em" }} />
        )}
        <div className={styles.inputContainer}>
          <input
            type="password"
            value={state.password}
            name="password"
            onChange={handleChange}
            style={{ color: "black" }}
          />
          <label
            className={state.password === "" ? null : styles.filled}
            htmlFor={name}
          >
            Password
          </label>
        </div>
        {show1 ? (
          <div
            style={{
              color: "red",
              textAlign: "left",
              width: "100%",
              marginTop: "-1px",
              marginBottom: "5px",
              marginLeft: "1em",
            }}
          >
            {errormsg1}
          </div>
        ) : (
          <div style={{ padding: "0.4em 0.2em" }} />
        )}{" "}
        <div className={styles.continue} onClick={validate}>
          Continue
        </div>
        <div className={styles.new} onClick={() => props.setShow(true)}>
          New to RestroX
        </div>
      </form>
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
    </div>
  );
}
