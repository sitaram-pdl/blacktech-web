import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SignInForm from "./style";
import SigninBgImg from "~image/accounts/sign-in.jpg";
import styles from "./style.module.css";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/router";
import { PageWrapper } from "~components/Core";
import AbsoluteHeader from "~components/AbsoluteHeader/AbsoluteHeader";

export default function SignIn() {
  const [show, setShow] = useState(true);
  const router = useRouter();
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
              <div className={styles.absolute} onClick={() => router.push("/")}>
                {"<"} Back
              </div>
              <SignInForm.Title as="h2">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.05728 27.2809C8.77603 27.2246 8.55103 27.1684 8.26978 27.0559C7.98853 26.9434 7.76353 26.8871 7.53853 26.7746C7.03228 26.5496 6.58228 26.2684 6.13228 25.9309C5.23228 25.3121 4.50103 24.4684 3.93853 23.4559C3.37603 22.4996 3.03853 21.3746 2.98228 20.3059C2.92603 19.7434 2.98228 19.2371 3.03853 18.6746C3.09478 18.3934 3.15103 18.1684 3.20728 17.8871C3.26353 17.6059 3.37603 17.3809 3.43228 17.0996L3.48853 17.8871C3.48853 18.1684 3.54478 18.3934 3.60103 18.6746C3.65728 19.1809 3.76978 19.6871 3.88228 20.1371C4.10728 21.0934 4.44478 21.9934 4.95103 22.8371C5.45728 23.6809 6.01978 24.4684 6.75103 25.1996C7.08853 25.5371 7.48228 25.8746 7.87603 26.2121C8.04478 26.3809 8.26978 26.5496 8.49478 26.7184L9.05728 27.2809Z"
                    fill="#66BCE8"
                  />
                  <path
                    d="M8.8875 29.3059C8.71875 29.4184 8.49375 29.4746 8.26875 29.5309C8.04375 29.5871 7.875 29.6434 7.65 29.6434C7.25625 29.6996 6.80625 29.7559 6.35625 29.6996C5.5125 29.6434 4.6125 29.4184 3.88125 29.0246C3.09375 28.6309 2.41875 28.0121 1.96875 27.2809C1.74375 26.9434 1.51875 26.5496 1.35 26.1559C1.29375 25.9871 1.2375 25.7621 1.18125 25.5371C1.18125 25.3684 1.125 25.1996 1.125 24.9746C1.29375 25.1434 1.40625 25.3121 1.51875 25.4246C1.6875 25.5934 1.8 25.7621 1.9125 25.8746C2.19375 26.1559 2.41875 26.4371 2.7 26.6621C3.2625 27.1684 3.825 27.6184 4.5 27.9559C5.11875 28.2934 5.85 28.5746 6.525 28.7996C6.8625 28.9121 7.25625 28.9684 7.65 29.0809C7.81875 29.1371 8.04375 29.1371 8.2125 29.1934C8.49375 29.2496 8.6625 29.2496 8.8875 29.3059Z"
                    fill="#66BCE8"
                  />
                  <path
                    d="M21.5996 1.96875C21.8809 2.025 22.1059 2.1375 22.3871 2.25C22.6684 2.3625 22.8934 2.475 23.1184 2.5875C23.6246 2.86875 24.0746 3.15 24.5246 3.4875C25.4246 4.1625 26.1559 5.0625 26.6621 6.075C27.1684 7.0875 27.4496 8.2125 27.4496 9.28125C27.4496 9.84375 27.3934 10.35 27.2809 10.9125C27.2246 11.1937 27.1684 11.4187 27.0559 11.7C26.9434 11.9812 26.8871 12.2063 26.7746 12.4313L26.7184 11.6438C26.7184 11.3625 26.7184 11.1375 26.6621 10.8562L26.4934 9.3375C26.3246 8.38125 25.9871 7.425 25.5371 6.525C25.0871 5.625 24.5246 4.8375 23.8496 4.10625C23.5121 3.7125 23.1184 3.375 22.7809 2.98125C22.6121 2.8125 22.3871 2.64375 22.1621 2.475L21.5996 1.96875Z"
                    fill="#66BCE8"
                  />
                  <path
                    d="M26.4941 1.74414C26.7191 1.80039 26.8879 1.85664 27.0566 1.96914C27.2254 2.02539 27.4504 2.13789 27.6191 2.25039C27.9566 2.47539 28.2941 2.70039 28.6316 2.98164C29.2504 3.54414 29.7566 4.21914 30.0379 5.00664C30.3754 5.79414 30.4879 6.63789 30.3754 7.48164C30.3191 7.87539 30.2066 8.26914 30.0941 8.66289C30.0379 8.83164 29.9254 9.05664 29.8691 9.22539C29.7566 9.39414 29.7004 9.56289 29.5316 9.73164V8.60664C29.5316 8.21289 29.4754 7.87539 29.4754 7.53789C29.3629 6.80664 29.2504 6.13164 28.9691 5.51289C28.6879 4.83789 28.3504 4.27539 27.9566 3.65664C27.7316 3.37539 27.5066 3.03789 27.2816 2.75664C27.1691 2.58789 27.0566 2.47539 26.8879 2.30664C26.7754 2.02539 26.6066 1.85664 26.4941 1.74414Z"
                    fill="#66BCE8"
                  />
                  <path
                    d="M5.62452 10.1255C4.49952 10.6318 4.10577 11.9818 4.61202 13.1068L11.6995 27.9005L15.637 26.0443L8.54952 11.1943C8.04327 10.0693 6.74952 9.56304 5.62452 10.1255Z"
                    fill="#FFDD67"
                  />
                  <path
                    d="M24.2431 21.8818L28.4056 19.913L20.3056 3.03804C19.7431 1.91304 18.3931 1.40679 17.2119 1.96929C16.0869 2.53179 15.5806 3.88179 16.1431 5.06304L24.2431 21.8818Z"
                    fill="#FFDD67"
                  />
                  <path
                    d="M17.2691 1.91339C17.1566 1.96964 17.0441 2.02589 16.9316 2.13839C18.0004 1.85714 19.1254 2.36339 19.6316 3.37589L27.7316 20.2509L28.4629 19.9134L20.3629 3.03839C19.8004 1.85714 18.4504 1.35089 17.2691 1.91339Z"
                    fill="#EBA352"
                  />
                  <path
                    d="M15.6372 25.9876L19.9685 23.9063L11.6997 6.69382C11.1372 5.51257 9.67472 4.95007 8.49347 5.51257C7.31222 6.07507 6.80597 7.53757 7.36847 8.71882L15.6372 25.9876Z"
                    fill="#FFDD67"
                  />
                  <path
                    d="M8.49375 5.56845C8.38125 5.6247 8.26875 5.68095 8.15625 5.79345C9.225 5.5122 10.4625 6.01845 10.9687 7.0872L16.0875 17.831L17.325 18.5622L11.7 6.7497C11.1375 5.5122 9.73125 5.00595 8.49375 5.56845Z"
                    fill="#EBA352"
                  />
                  <path
                    d="M19.2935 22.5558L23.6247 20.4746L15.356 3.26208C14.7935 2.08083 13.331 1.51833 12.1497 2.13708C10.9685 2.69958 10.4622 4.16208 11.0247 5.34333L19.2935 22.5558Z"
                    fill="#FFDD67"
                  />
                  <path
                    d="M12.15 2.08212C12.0375 2.13837 11.925 2.25087 11.8125 2.30712C12.8813 2.02587 14.1188 2.53212 14.625 3.60087L20.4187 15.7509L21.6562 16.4821L15.3562 3.26337C14.7937 2.02587 13.3313 1.51962 12.15 2.08212Z"
                    fill="#EBA352"
                  />
                  <path
                    d="M5.62461 10.1263C5.51211 10.1825 5.39961 10.2388 5.28711 10.3513C6.29961 10.07 7.36836 10.5763 7.81836 11.5888L12.0371 20.42L13.2746 21.1513L8.54961 11.2513C8.04336 10.07 6.74961 9.56378 5.62461 10.1263Z"
                    fill="#EBA352"
                  />
                  <path
                    d="M34.1999 8.43667C32.6812 7.25542 30.2062 8.54917 28.9687 12.5992C28.1249 15.4117 28.0124 16.2554 26.2124 17.0992L25.1999 15.0179C25.1999 15.0179 9.22494 22.7242 9.84369 23.9617C9.84369 23.9617 11.7562 29.9242 15.0187 32.6804C19.8562 36.8429 31.1624 32.3992 31.6687 21.6554C31.9499 15.4117 35.8312 9.73042 34.1999 8.43667Z"
                    fill="#FFDD67"
                  />
                  <path
                    d="M34.1996 8.43672C33.9184 8.21172 33.5809 8.09922 33.2434 8.04297C33.2996 8.09922 33.4121 8.09922 33.4684 8.15547C35.1559 9.44922 33.4121 12.4305 32.4559 15.1305C31.6684 17.268 30.9934 19.4617 31.1059 21.5992C31.5559 30.9367 22.1621 35.3805 16.5371 33.693C22.0496 35.9992 32.2871 31.6117 31.8371 21.8805C31.7246 19.743 32.3434 17.6617 33.1871 15.4117C34.0871 12.7117 35.8309 9.73047 34.1996 8.43672Z"
                    fill="#EBA352"
                  />
                  <path
                    d="M26.7191 16.875C23.2316 17.2687 18.1129 22.275 21.7129 27.7312C19.0691 22.2187 23.4004 18.5063 26.1566 17.2125C26.4379 16.9875 26.7191 16.875 26.7191 16.875Z"
                    fill="#EBA352"
                  />
                </svg>
                <br />
                Welcome !
              </SignInForm.Title>
              <SignInForm.Text as="p">
                Please login to access your account.
              </SignInForm.Text>
              <SignInForm.FromSection>
                <form action="./">
                  <div className="form-floating">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Leave a comment here"
                      id="floatinginput"
                    />
                    <label htmlFor="floatinginput">Your Email</label>
                  </div>

                  <SignInForm.FormButton className=" mt-2">
                    Continue
                  </SignInForm.FormButton>
                </form>
              </SignInForm.FromSection>
              <div className={styles.flexdisplay}>
                <div className={styles.newanddemo}>
                  <div className={styles.hr} />
                </div>
                <div className={styles.text}>or continue with</div>
                <div className={styles.newanddemo}>
                  <div className={styles.hr} />
                </div>
              </div>
              <SignInForm.FormButton1 className=" mt-2">
                <FcGoogle size={"1.3em"} style={{ marginRight: "20px" }} /> Or
                sign-in with google
              </SignInForm.FormButton1>
            </SignInForm.Box>
          </Col>
        </Row>
      </Container>
    </SignInForm>
  );
}
