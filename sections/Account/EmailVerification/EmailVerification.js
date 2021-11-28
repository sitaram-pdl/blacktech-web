import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SignInForm from "./style";
import SigninBgImg from "~image/accounts/sign-in.jpg";
import styles from "./style.module.css";
import Link from "next/link";
import AbsoluteHeaderLeft from "~components/AbsoluteHeaderLeft/AbsoluteHeaderLeft";
import cx from "classnames";
import OTPInput from "otp-input-react";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/router";
import { withRouter } from "next/router";
import axios from "axios";

export default function GettingStarted() {
  console.log(prevpath);
  const router = useRouter();
  const { prevpath, email } = router.query;
  const [islogin, setIslogin] = useState(false);
  const [show, setShow] = useState(false);
  const [temp, setTemp] = useState(false);
  const [OTP, setOTP] = useState("");
  const [errormsg1, setErrormsg1] = useState("");
  const [show1, setShow1] = useState(false);

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
  const emailHide = (a) => {
    let str = a;
    let att = "******";
    let first = str.slice(0, 3);

    let last = str.slice(-13);
    let half = first.concat(att);
    return half.concat(last);
  };
  const resend = (e) => {
    setShow(true);
    axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/otp?version=1.0`, {
      email,
    });
  };

  const loginvalidate = () => {
    if (OTP === "") {
      setShow1(true);
      setErrormsg1("Otp is empty");
      return;
    }
    if (OTP.length != 6) {
      setShow1(true);
      setErrormsg1("Otp length must be 6");
      return;
    }
    setIslogin(true);
    submit();
  };
  const submit = (e) => {
    axios
      .post(`${process.env.NEXT_PUBLIC_BASE_URL}/otp/verify?version=1.0`, {
        email,
        OTP,
      })
      .then(function (response) {
        console.log(response);
        response.data.OTPMatched
          ? router.push({
              pathname: "/GettingStarted/Payment",
            })
          : null;
        setIslogin(false);
      })
      .catch(function (error) {
        setShow1(true);
        setErrormsg1("Otp did not matched");
        setIslogin(false);
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
              <div className={styles.container1}>
                <div>
                  <p className={styles.text1}> Email Verification!</p>
                </div>
                <div>
                  <div className={styles.mobilesvg}>
                    <svg
                      width="144"
                      height="144"
                      viewBox="0 0 144 144"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      styles={{ position: "absolute", zIndex: "100" }}
                    >
                      <path
                        d="M122 85C122 112.614 99.6142 135 72 135C44.3858 135 22 112.614 22 85C22 57.3858 44.3858 35 72 35C99.6142 35 122 57.3858 122 85Z"
                        fill="#b8b8b8"
                      />
                      <path
                        d="M102.683 115.534H42.6788C40.9064 115.534 39.4688 114.097 39.4688 112.324V12.2101C39.4688 10.4376 40.9064 9 42.6788 9H102.683C104.456 9 105.893 10.4376 105.893 12.2101V112.324C105.893 114.097 104.456 115.534 102.683 115.534Z"
                        fill="#407BFF"
                      />
                      <path
                        d="M102.683 9H94.7539V115.534H102.683C104.456 115.534 105.893 114.097 105.893 112.324V12.2101C105.893 10.4376 104.456 9 102.683 9Z"
                        fill="#2D56B3"
                      />
                      <path
                        d="M39.4688 21.4102H105.893V103.124H39.4688V21.4102Z"
                        fill="#D9E5FF"
                      />
                      <path
                        d="M97.4361 76.4697C100.442 76.4697 103.301 77.0941 105.893 78.2195V21.4102H94.7539V76.6376C95.6317 76.5268 96.5272 76.4697 97.4361 76.4697Z"
                        fill="#D9E5FF"
                      />
                      <path
                        d="M95.3197 68.4696H50.0405C48.9646 68.4696 48.0918 67.5977 48.0918 66.5218V48.1627C48.0918 47.0868 48.9646 46.2148 50.0405 46.2148H95.3197C96.3964 46.2148 97.2684 47.0868 97.2684 48.1627V66.5218C97.2684 67.5977 96.3955 68.4696 95.3197 68.4696Z"
                        fill="#EDEDED"
                      />
                      <path
                        d="M95.3202 46.2148H86.1289V68.4696H95.3202C96.3969 68.4696 97.2689 67.5977 97.2689 66.5209V48.1627C97.2689 47.0868 96.3961 46.2148 95.3202 46.2148Z"
                        fill="#EDEDED"
                      />
                      <path
                        d="M75.297 13.2832H68.2147C67.2974 13.2832 66.5547 14.0259 66.5547 14.9432C66.5547 15.8596 67.2974 16.6032 68.2147 16.6032H75.297C76.2134 16.6032 76.9561 15.8596 76.9561 14.9432C76.9561 14.0259 76.2134 13.2832 75.297 13.2832Z"
                        fill="#EDEDED"
                      />
                      <path
                        d="M64.1227 54.7716C64.0371 54.7716 61.4321 55.6545 61.4321 55.6545L61.5395 53.2434C61.5186 52.6408 61.0662 52.3613 60.5492 52.3613C60.0331 52.3613 59.5808 52.6408 59.5598 53.2434L59.6672 55.6335C59.6672 55.6335 57.0622 54.7724 56.9976 54.7724C56.4169 54.7724 55.9863 55.3104 55.9863 55.8055C55.9863 56.2579 56.1802 56.6448 56.6107 56.7312L59 57.4202L57.4928 59.5292C57.3635 59.6803 57.2561 59.8741 57.2561 60.1108C57.2561 60.7134 57.9879 61.0793 58.4184 61.0793C58.6769 61.0793 58.8926 61.0147 59.0646 60.7352L60.5492 58.4961L62.0137 60.7134C62.2286 61.0356 62.508 61.0793 62.7237 61.0793C63.2617 61.0793 63.8432 60.6697 63.8432 60.0672C63.8432 59.8733 63.7786 59.6585 63.6922 59.551L62.1211 57.312L64.4458 56.7304C64.8973 56.6448 65.0912 56.2789 65.0912 55.913C65.092 55.375 64.7043 54.7716 64.1227 54.7716Z"
                        fill="#7CC788"
                      />
                      <path
                        d="M77.0797 54.7716C76.9941 54.7716 74.3891 55.6545 74.3891 55.6545L74.4966 53.2434C74.4756 52.6408 74.0232 52.3613 73.5071 52.3613C72.9901 52.3613 72.5378 52.6408 72.5168 53.2434L72.6242 55.6335C72.6242 55.6335 70.0193 54.7724 69.9546 54.7724C69.3739 54.7724 68.9434 55.3104 68.9434 55.8055C68.9434 56.2579 69.1372 56.6448 69.5677 56.7312L71.957 57.4202L70.4498 59.5292C70.3214 59.6803 70.2131 59.8741 70.2131 60.1108C70.2131 60.7134 70.9458 61.0793 71.3763 61.0793C71.6339 61.0793 71.8496 61.0147 72.0217 60.7352L73.5071 58.4961L74.9707 60.7134C75.1856 61.0356 75.4659 61.0793 75.6807 61.0793C76.2195 61.0793 76.8003 60.6697 76.8003 60.0672C76.8003 59.8733 76.7356 59.6585 76.6492 59.551L75.0782 57.312L77.4028 56.7304C77.8552 56.6448 78.049 56.2789 78.049 55.913C78.049 55.375 77.6613 54.7716 77.0797 54.7716Z"
                        fill="#7CC788"
                      />
                      <path
                        d="M90.0376 54.7716C89.9512 54.7716 87.347 55.6545 87.347 55.6545L87.4544 53.2434C87.4326 52.6408 86.9811 52.3613 86.4641 52.3613C85.948 52.3613 85.4957 52.6408 85.4738 53.2434L85.5813 55.6335C85.5813 55.6335 82.9771 54.7724 82.9125 54.7724C82.3309 54.7724 81.9004 55.3104 81.9004 55.8055C81.9004 56.2579 82.0943 56.6448 82.5248 56.7312L84.9141 57.4202L83.4077 59.5292C83.2784 59.6803 83.171 59.8741 83.171 60.1108C83.171 60.7134 83.9028 61.0793 84.3333 61.0793C84.5918 61.0793 84.8067 61.0147 84.9787 60.7352L86.4641 58.4961L87.9278 60.7134C88.1434 61.0356 88.4229 61.0793 88.6378 61.0793C89.1765 61.0793 89.7573 60.6697 89.7573 60.0672C89.7573 59.8733 89.6927 59.6585 89.6062 59.551L88.0352 57.312L90.3599 56.7304C90.8122 56.6448 91.0061 56.2789 91.0061 55.913C91.0061 55.375 90.6183 54.7716 90.0376 54.7716Z"
                        fill="#7CC788"
                      />
                    </svg>
                  </div>
                </div>
                <div className={styles.textdiv}>
                  <div className={styles.textverification}>
                    Enter the verification code we sent to
                  </div>

                  <div className={styles.email}>{emailHide(email)}</div>
                  <div className={styles.reactcodeinput}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        padding: "0 0 0 1em",
                      }}
                    >
                      <OTPInput
                        value={OTP}
                        onChange={setOTP}
                        inputClassName={styles.box}
                        autoFocus
                        OTPLength={6}
                        otpType="number"
                        disabled={false}
                        containerStyle={{ backgroundColor: "red" }}
                      />
                    </div>
                  </div>
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
                  )}

                  <SignInForm.FormButton
                    className=" mt-2"
                    onClick={loginvalidate}
                  >
                    Submit
                  </SignInForm.FormButton>
                  <div style={{ marginTop: "1em" }}>
                    Didnt get the code ?{" "}
                    <text style={{ color: "blue" }} onClick={() => resend()}>
                      Resend{" "}
                    </text>
                  </div>
                </div>
              </div>
            </SignInForm.Box>
          </Col>
        </Col>
      </Container>
      {show ? (
        <div className={styles.fixed}>
          <div className={styles.absolute} onClick={() => setShow(false)} />
          <div className={styles.contain} style={{ overflow: "hidden" }}>
            <img src="https://cdn.dribbble.com/users/1363659/screenshots/3285428/done800x600.gif" />
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
