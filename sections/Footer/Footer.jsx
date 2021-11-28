import React from "react";
import styles from "./Footer.module.css";
import { FaFacebook, FaYoutube, FaPinterest } from "react-icons/fa";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";
import Image from "next/image";
import Dexktop from "~image/marketing/apps/restrologo.png";
const Footer = (props) => {
  const features = [
    "Account Management",
    "Inventory Management",
    "Built-in POS",
    "Staff Management",
    "Productivity Tools",
    "Unlimited Menus",
    "Tailored Apps",
    "Social Media Management",
    "Free Website",
    "Own Delivery App",
  ];
  const company = [
    "About Us",
    "Contact Us",
    "Careers",
    "Press",
    "Apps",
    "Merch Store",
    "Security",
    "Tearms Of Service",
    "Privacy Policy",
    "Cookie Policy & Preferences",
    "Referral Programme",
    "Become an Affiliate",
  ];
  const learn = [
    "Support",
    "Billing & Subscription",
    "Blog",
    "Tutorial Videos",
    "Ebooks",
    "Forum",
    "Community",
    "Hire an Expert",
    "Customers",
    "Restro X vs Others",
  ];
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.first}>
          <div className={styles.logo}>
            <img src={Dexktop.src} layout="responsive" alt="hero image main" />
          </div>
          <div className={styles.text}>
            RestroX is the quintessential Restaurant Operating System,
            encompassing all the multi faceted requirement from orders,
            billings.
          </div>
          <div className={styles.icons}>
            <FaFacebook size="1.5em" color="#3b5998" />
            <AiFillInstagram size="1.5em" color="#C13584" />
            <AiOutlineTwitter size="1.5em" color=" #00acee" />
            <AiFillLinkedin size="1.5em" color="#0077b5" />
            <FaYoutube size="1.5em" color="#c4302b" />
            <FaPinterest size="1.5em" color="#c8232c" />
          </div>
        </div>
        <div className={styles.second}>
          <div className={styles.textTitle}>Features</div>
          {features.map((dat) => (
            <div className={styles.subText}>{dat}</div>
          ))}
        </div>
        <div className={styles.second}>
          <div className={styles.textTitle}>Features</div>
          {company.map((dat) => (
            <div className={styles.subText}>{dat}</div>
          ))}
        </div>
        <div className={styles.second}>
          <div className={styles.textTitle}>Learn & Get Help</div>
          {learn.map((dat) => (
            <div className={styles.subText}>{dat}</div>
          ))}
        </div>
      </div>
      <div className={styles.copyright}>
        © {new Date().getFullYear()} Restro X, Inc. All rights reserved
      </div>
    </div>
  );
};

export default Footer;
