import React from "react";
import Link from "next/link";

import styles from "./AbsoluteHeader.module.css";
import HeaderButton from "~sections/marketing/Header";
import siteBrandDark from "~image/logo/logo-black.png";

const AbsoluteHeader2 = () => {
  return (
    <div className={styles.container} style={{ width: "55vw" }}>
      <div className={styles.image}>Back</div>
      <div style={{ marginRight: "1em", display: "flex" }}>
        <div className={styles.text}>Already a user? </div>
        <HeaderButton
          className="ms-auto d-none d-xs-inline-flex"
          btnOneLink="GettingStarted/GettingStarted"
          btnTwoLink="/innerpage/sign-in"
          btnTwoText="Log In"
          mr="15px"
          mrLG="0"
        />
      </div>
    </div>
  );
};
export default AbsoluteHeader2;
