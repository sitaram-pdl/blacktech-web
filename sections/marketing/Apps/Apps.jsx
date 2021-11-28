import React from "react";
import styles from "./Apps.module.css";
import cx from "classnames";
import Image from "next/image";
import Mobileicon from "~image/marketing/apps/mobileicon.png";
import GooglePlay from "~image/marketing/apps/Google Play.png";
import AppStore from "~image/marketing/apps/App Store.png";
import Moilecrop from "~image/marketing/apps/moilecrop.png";
import Tablet from "~image/marketing/apps/tablet.png";
import DesktopIcon from "~image/marketing/apps/desktopIcon.png";
import Dexktop from "~image/marketing/apps/desktop.png";

const Apps = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.title}>
          Apps for
          <br />
          anywhere.
        </div>
        <div className={styles.hrr} />
        <div className={styles.desc}>
          Download RestroX for any platform to manage everything form any
          device.
        </div>
        <div className={styles.getStarted}>Download App</div>
      </div>
      <div className={styles.right}>
        <div className={styles.box}>
          <div className={styles.first}>
            <div className={styles.icon}>
              <Image src={Mobileicon} />
            </div>
            <div className={styles.rightTitle}>Mobile</div>
            <div className={styles.descri}>Get work done on the go.</div>
            <div className={styles.bottom}>
              <div>
                <Image src={GooglePlay} />
              </div>

              <div>
                <Image src={AppStore} />
              </div>
            </div>
          </div>
          <div className={styles.second}>
            <div>
              <Image src={Moilecrop} />
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.first}>
            <div className={styles.icon}>
              <Image src={Mobileicon} />
            </div>
            <div className={styles.rightTitle}>Tablets</div>
            <div className={styles.descri}>Get work done on the go.</div>
            <div className={styles.bottom}>
              <div>
                <Image src={GooglePlay} />
              </div>

              <div>
                <Image src={AppStore} />
              </div>
            </div>
          </div>
          <div className={styles.second2}>
            <div>
              <Image src={Tablet} />
            </div>
          </div>
        </div>
        <div className={cx(styles.box, styles.color)}>
          <div className={styles.first}>
            <div className={styles.icon}>
              <Image src={DesktopIcon} />
            </div>
            <div className={styles.rightTitle}>Desktop</div>
            <div className={styles.descri}>Get work done on the go.</div>
            <div className={styles.bottom}>
              <div>
                <Image src={GooglePlay} />
              </div>

              <div>
                <Image src={AppStore} />
              </div>
            </div>
          </div>
          <div className={styles.second3}>
            <div>
              <Image src={Dexktop} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apps;
