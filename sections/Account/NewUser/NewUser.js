import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SignInForm from "./style";
import SigninBgImg from "~image/accounts/sign-in.jpg";
import AbsoluteHeader from "~components/AbsoluteHeader/AbsoluteHeader";
import styles from "./style.module.css";
import { useRouter } from "next/router";
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
              <SignInForm.Title as="h2">
                👋
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
                  <div className="form-floating">
                    <input
                      className="form-control"
                      type="password"
                      placeholder="Leave a comment here"
                      id="floatinginput2"
                    />
                    <label htmlFor="floatinginput2">Your Password</label>
                  </div>
                  <div className="form-check d-flex align-items-center mt-6 mb-3">
                    <input
                      className="form-check-input bg-white float-none mt-0 mb-0 me-3"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault"
                    />
                    <div
                      style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "space-between",
                      }}
                    >
                      <SignInForm.FormText htmlFor="flexCheckDefault">
                        Remember me
                      </SignInForm.FormText>
                      <SignInForm.FormText htmlFor="flexCheckDefault">
                        Forgot password
                      </SignInForm.FormText>
                    </div>
                  </div>
                  <SignInForm.FormButton className=" mt-2">
                    Login
                  </SignInForm.FormButton>
                </form>
              </SignInForm.FromSection>
              <div className={styles.center}>
                <div>Need Help ?</div>
              </div>
            </SignInForm.Box>
          </Col>
        </Row>
      </Container>
      <div className={styles.absolute} onClick={() => router.back()}>
        {"<"} Back
      </div>
    </SignInForm>
  );
}
