import React, { useState } from "react";
import styles from "./Pricing.module.css";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { IoIosCheckmarkCircle } from "react-icons/io";
import AbsoluteHeader from "~components/AbsoluteHeaderLeft/AbsoluteHeaderLeft";
import siteBrandDark from "~image/logo/logo-black.png";
import cx from "classnames";
import Image from "next/image";
import Dexktop from "~image/marketing/apps/apple.png";
const Pricing = () => {
  const [indexStat, setIndex] = useState(1);
  const [data, setData] = useState([
    {
      name: "Base",
      desc: "Pro account gives you freedom with uploading HD videos and can also meet all your business needs apasih kamu",
      price: "",
      discount: "",
    },
    {
      name: "Pro",
      desc: "Pro account gives you freedom with uploading HD videos and can also meet all your business needs apasih kamu",
      price: "",
      discount: "",
    },
    {
      name: "Enterprise",
      desc: "Pro account gives you freedom with uploading HD videos and can also meet all your business needs apasih kamu",
      price: "",
      discount: "",
    },
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.title}>
          Simple pricing <br />
          for your Restaurant.
        </div>
        <div className={styles.desc}>
          We have several powerful plans to showcase your restaurant and get
          discovered as a creative entrepreneurs. Everything you need.
        </div>
        <div className={styles.options}>
          <div>
            <IoIosCheckmarkCircle />
          </div>
          <div className={styles.text}>Free 1 month trial for new user</div>
        </div>

        <div className={styles.options}>
          <div>
            <IoIosCheckmarkCircle />
          </div>
          <div className={styles.text}>Free 1 month trial for new user</div>
        </div>

        <div className={styles.row}>
          <div className={styles.absolute}>
            <Image className={styles.image} src={Dexktop} />
          </div>

          <div className={styles.getStarted}>Full Pricing Comparison</div>
        </div>
      </div>
      <div className={styles.right}>
        {data.map((dat, index) => (
          <div
            onClick={() => setIndex(index)}
            className={cx(styles.box, index != indexStat ? styles.white : null)}
          >
            <div className={styles.download}>
              <div className={styles.top}>
                {dat.name}
                {index === indexStat ? (
                  <div className={styles.save}>Save $40</div>
                ) : null}
              </div>

              {index === indexStat ? (
                <div className={styles.drop2}>
                  <RiArrowDropUpLine />
                </div>
              ) : (
                <div className={styles.drop}>
                  <RiArrowDropDownLine />
                </div>
              )}
            </div>
            {index === indexStat ? (
              <div className={styles.descri}>{dat.desc}</div>
            ) : null}
            {index === indexStat ? (
              <div className={styles.download}>
                <div className={styles.price}>
                  $<div className={styles.number}>123</div>/month
                </div>
                <div className={styles.getStarted2}>Try 1 month</div>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
