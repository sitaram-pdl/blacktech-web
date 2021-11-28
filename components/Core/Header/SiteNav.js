import React from "react";
import Image from "next/image";
import { Navbar } from "react-bootstrap";
import siteBrandDark from "~image/logo/logo-black.png";
import siteBrandLight from "~image/logo/logo-white.png";
import Menu from "./Menu";
import { useRouter } from "next/router";
import styles from "./custom.module.css";
import cx from "classnames";
const SiteNavbar = ({ buttonBlock, darkLogo, customLogo, defaultLogo }) => {
  const router = useRouter();
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="site-navbar"
        style={{ padding: "10px" }}
      >
        <Navbar.Brand href="/">
          {defaultLogo ? (
            <img src={defaultLogo.src} alt="site-brand" />
          ) : customLogo ? (
            <img src={customLogo.src} alt="site-brand" />
          ) : (
            <img
              src={darkLogo ? siteBrandDark.src : siteBrandLight.src}
              alt="site-brand"
              //style={{ width: "99px", marginLeft: "8em" }}
              className={styles.image}
              onClick={() => router.replace("/")}
            />
          )}
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className={cx("hamburgur", styles.navbarImportant)}
          style={{ border: "none" }}
        />
        <Menu />
        {/* {buttonBlock} */}
      </Navbar>
    </>
  );
};

export default SiteNavbar;
