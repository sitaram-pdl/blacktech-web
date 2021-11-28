import React, { useEffect, useRef, useState } from "react";
import styles from "./RestroX.module.css";
import { FaQuoteLeft } from "react-icons/fa";
import cx from "classnames";
import Shape from "~image/marketing/quote.png";
import Shape1 from "~image/marketing/quote2.png";
import Shape2 from "~image/marketing/image2.png";
import Image from "next/image";

const RestroX = () => {
  const [indexStat, setIndex] = useState(1);
  const ref = useRef();
  var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

  function preventDefault(e) {
    e.preventDefault();
  }
  function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
      preventDefault(e);
      return false;
    }
  }

  var supportsPassive = false;
  try {
    window.addEventListener(
      "test",
      null,
      Object.defineProperty({}, "passive", {
        get: function () {
          supportsPassive = true;
        },
      })
    );
  } catch (e) {}

  var wheelOpt = supportsPassive ? { passive: false } : false;
  var wheelEvent =
    "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

  // call this to Disable
  function disableScroll() {
    var slider = document.getElementById("slider");
    slider.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
    slider.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    slider.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
    slider.addEventListener("keydown", preventDefaultForScrollKeys, false);
  }
  const scrolHandle = (index) => {
    setIndex(index);
    var element = document.getElementById(`box${index}`);
    element.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  };
  useEffect(() => {
    disableScroll();
    // const interval = setInterval(() => {
    //  setIndex((dat) => {
    //   if (dat == 4 || dat > 4) {
    //      return 0;
    //  } else {
    //      return dat + 1;
    //      }
    //    });
    //    scrolHandle(indexStat);
    //   }, 5000);
    //   return () => clearInterval(interval);
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.title}>What is RestroX?</div>
      <div className={styles.hr}></div>

      <div className={styles.desc}>
        RestroX is the quintessential Restaurant Operating System, encompassing
        all the multi faceted requirement from orders, billings, sales and
        accounting in a single system. RestroX aims to please the all restaurant
        stakesholders and their beloved customers.
      </div>
      <div className={styles.slider} id="slider">
        <div className={styles.sliderBox}>
          {[0, 1, 3, 4].map((dat, index) => (
            <div
              id={`box${index}`}
              className={cx(
                styles.box,
                index === indexStat ? styles.active : styles.opacity
              )}
              onClick={() => {
                scrolHandle(index);
              }}
            >
              <div className={styles.quote}>
                <Image src={Shape} />
              </div>
              <div className={styles.row}>
                <div>
                  <div className={styles.boxTitle}>64% believe</div>
                  <div className={styles.subBoxTitle}>
                    that keeping track of orders and requests in restaurant are
                    tiring task.
                  </div>
                </div>
                <div className={styles.image}>
                  <Image src={Shape2} />
                </div>
              </div>

              <div className={styles.button}>
                <div className={styles.source}>
                  SOURCE: Harvard Business Review
                </div>
                <div className={styles.quote}>
                  <Image src={Shape1} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.getStarted}>Sign up today</div>
    </div>
  );
};

export default RestroX;
