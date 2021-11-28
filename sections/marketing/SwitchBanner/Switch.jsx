import React from "react";
import styles from "./Switch.module.css";
import Shape2 from "~image/marketing/banner2.png";
import Image from "next/image";

const Switch = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Image src={Shape2} />
      </div>
      <div className={styles.right}>
        <div className={styles.subTitle}>Easy</div>
        <div className={styles.title}>
          Switching to <br />
          RestroX ?
        </div>
        <div className={styles.hrr} />
        <div className={styles.desc}>
          Get an easy walk-through for restroX installation
        </div>
        <div className={styles.getStarted}>Learn More</div>
      </div>
    </div>
  );
};

export default Switch;
