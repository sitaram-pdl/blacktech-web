import React from "react";
import Link from "next/link";

import styles from "./AbsoluteHeader.module.css";
import HeaderButton from "~sections/marketing/Header";
import siteBrandDark from "~image/logo/logo-black.png";

const AbsoluteHeaderLeft = (props) => {
  return (
    <div className={styles.container} style={{ width: "55vw" }}>
      <div className={styles.image}>
        <Link href="/">
          <img
            src={siteBrandDark.src}
            alt="site-brand"
            style={{ width: "119px", cursor: "pointer" }}
          />
        </Link>
      </div>
      <div>
        <HeaderButton
          className="ms-auto d-none d-xs-inline-flex"
          btnOneText="Already a user?"
          btnOneLink="/"
          btnTwoLink="/innerpage/sign-in"
          btnTwoText="Log In"
          mr="15px"
          mrLG="0"
        />
      </div>
    </div>
  );
};
export default AbsoluteHeaderLeft;
