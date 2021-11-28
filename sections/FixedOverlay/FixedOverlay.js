import React, { useState } from "react";
import styles from "./FixedOverlay.module.css";
import Shape from "~image/favicon.png";
import Image from "~image/backGround.png";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import useOutsideClick from "./useOutsideClick";
import { useRef } from "react";
import { useRouter } from "next/router";

const FixedOverlay = (props) => {
  const router = useRouter();
  const [social, setSocial] = useState([
    { name: "Facebook" },
    {
      name: "Linkeden",
    },
    {
      name: "Instagram",
    },
  ]);
  const ref = useRef();
  // const myref = useRef();
  useOutsideClick(ref, () => {
    if (props.open) props.setOpen(false);
  });
  return (
    <div className={styles.overlay} ref={ref}>
      <div className={styles.contain}>
        <div className={styles.topDiv}>
          <div className={styles.WelcomeText}>Welcome to Blacktech</div>
          <div className={styles.Close} onClick={() => props.setOpen(false)}>
            Close
          </div>
        </div>
        <div className={styles.scroll}>
          <div>
            <img
              src={Image.src}
              // style={{
              //   width: "350px",
              //   height: "150px",
              //   marginLeft: "50px",
              //   marginTop: "1em",
              //   borderRadius: "10px",
              // }}
              className={styles.image111}
              // style={{ borderRadius: "30%" }}
            ></img>
          </div>
          <div className={styles.socialMedia}>
            <div className={styles.socialmediatext}>Social Account</div>
            <div className={styles.socialMap}>
              <a
                className={styles.socialdiv}
                target="_blank"
                href="https://www.facebook.com/blacktechnepal"
              >
                <div className={styles.icon}>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="48px"
                    height="48px"
                  >
                    <linearGradient
                      id="Ld6sqrtcxMyckEl6xeDdMa"
                      x1="9.993"
                      x2="40.615"
                      y1="9.993"
                      y2="40.615"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stop-color="#2aa4f4" />
                      <stop offset="1" stop-color="#007ad9" />
                    </linearGradient>
                    <path
                      fill="url(#Ld6sqrtcxMyckEl6xeDdMa)"
                      d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
                    />
                    <path
                      fill="#fff"
                      d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
                    />
                  </svg>
                </div>
                <div> Facebook </div>
              </a>
              <a
                className={styles.socialdiv}
                target="_blank"
                href="https://www.linkedin.com/company/71957293/admin/"
              >
                <div className={styles.icon}>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="48px"
                    height="48px"
                  >
                    <path
                      fill="#0288D1"
                      d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                    />
                    <path
                      fill="#FFF"
                      d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                    />
                  </svg>{" "}
                </div>
                <div> Linkeden </div>
              </a>
              <a
                className={styles.socialdiv}
                arget="_blank"
                href="https://www.instagram.com/black___tech/"
              >
                <div className={styles.icon}>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="48px"
                    height="48px"
                  >
                    <radialGradient
                      id="yOrnnhliCrdS2gy~4tD8ma"
                      cx="19.38"
                      cy="42.035"
                      r="44.899"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stop-color="#fd5" />
                      <stop offset=".328" stop-color="#ff543f" />
                      <stop offset=".348" stop-color="#fc5245" />
                      <stop offset=".504" stop-color="#e64771" />
                      <stop offset=".643" stop-color="#d53e91" />
                      <stop offset=".761" stop-color="#cc39a4" />
                      <stop offset=".841" stop-color="#c837ab" />
                    </radialGradient>
                    <path
                      fill="url(#yOrnnhliCrdS2gy~4tD8ma)"
                      d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                    />
                    <radialGradient
                      id="yOrnnhliCrdS2gy~4tD8mb"
                      cx="11.786"
                      cy="5.54"
                      r="29.813"
                      gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stop-color="#4168c9" />
                      <stop
                        offset=".999"
                        stop-color="#4168c9"
                        stop-opacity="0"
                      />
                    </radialGradient>
                    <path
                      fill="url(#yOrnnhliCrdS2gy~4tD8mb)"
                      d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                    />
                    <path
                      fill="#fff"
                      d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
                    />
                    <circle cx="31.5" cy="16.5" r="1.5" fill="#fff" />
                    <path
                      fill="#fff"
                      d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
                    />
                  </svg>
                </div>
                <div> Instagram </div>
              </a>
            </div>
          </div>
          <div className={styles.contactus}>
            <div className={styles.socialmediatext}>Contact Us</div>
            <div className={styles.contactUsmap}>
              <a href="tel:+9779802839909" className={styles.contact}>
                <div className={styles.contacticon}>
                  <svg
                    width="31"
                    height="31"
                    viewBox="0 0 31 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_1139:110)">
                      <path
                        d="M18.05 5C19.0267 5.19057 19.9244 5.66826 20.6281 6.37194C21.3317 7.07561 21.8094 7.97326 22 8.95L18.05 5ZM18.05 1C20.0793 1.22544 21.9716 2.13417 23.4162 3.57701C24.8609 5.01984 25.772 6.91101 26 8.94L18.05 1ZM25 16.92V19.92C25.0011 20.1985 24.9441 20.4742 24.8325 20.7293C24.7209 20.9845 24.5573 21.2136 24.3521 21.4019C24.1468 21.5901 23.9046 21.7335 23.6407 21.8227C23.3769 21.9119 23.0974 21.9451 22.82 21.92C19.7428 21.5856 16.787 20.5341 14.19 18.85C11.7738 17.3147 9.72533 15.2662 8.18999 12.85C6.49997 10.2412 5.44824 7.27099 5.11999 4.18C5.095 3.90347 5.12787 3.62476 5.21649 3.36162C5.30512 3.09849 5.44756 2.85669 5.63476 2.65162C5.82196 2.44655 6.0498 2.28271 6.30379 2.17052C6.55777 2.05833 6.83233 2.00026 7.10999 2H10.11C10.5953 1.99522 11.0658 2.16708 11.4338 2.48353C11.8017 2.79999 12.0421 3.23945 12.11 3.72C12.2366 4.68007 12.4714 5.62273 12.81 6.53C12.9445 6.88792 12.9737 7.27691 12.8939 7.65088C12.8141 8.02485 12.6289 8.36811 12.36 8.64L11.09 9.91C12.5135 12.4135 14.5864 14.4864 17.09 15.91L18.36 14.64C18.6319 14.3711 18.9751 14.1858 19.3491 14.1061C19.7231 14.0263 20.1121 14.0555 20.47 14.19C21.3773 14.5286 22.3199 14.7634 23.28 14.89C23.7658 14.9585 24.2094 15.2032 24.5265 15.5775C24.8437 15.9518 25.0122 16.4296 25 16.92Z"
                        stroke="#139511"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_1139:110"
                        x="-1"
                        y="0"
                        width="32"
                        height="32"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_1139:110"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_1139:110"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
                <div className={styles.contactcolumn}>
                  <div className={styles.num}>+977 9802839909</div>
                  <div className={styles.contacttext}>Direct Call </div>
                </div>
              </a>
            </div>
            <div className={styles.contactUsmap}>
              <div className={styles.contact}>
                <div className={styles.contacticon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="30px"
                    height="30px"
                  >
                    <radialGradient
                      id="8O3wK6b5ASW2Wn6hRCB5xa"
                      cx="11.087"
                      cy="7.022"
                      r="47.612"
                      gradientTransform="matrix(1 0 0 -1 0 50)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stop-color="#1292ff" />
                      <stop offset=".079" stop-color="#2982ff" />
                      <stop offset=".23" stop-color="#4e69ff" />
                      <stop offset=".351" stop-color="#6559ff" />
                      <stop offset=".428" stop-color="#6d53ff" />
                      <stop offset=".754" stop-color="#df47aa" />
                      <stop offset=".946" stop-color="#ff6257" />
                    </radialGradient>
                    <path
                      fill="url(#8O3wK6b5ASW2Wn6hRCB5xa)"
                      d="M44,23.5C44,34.27,35.05,43,24,43c-1.651,0-3.25-0.194-4.784-0.564	c-0.465-0.112-0.951-0.069-1.379,0.145L13.46,44.77C12.33,45.335,11,44.513,11,43.249v-4.025c0-0.575-0.257-1.111-0.681-1.499	C6.425,34.165,4,29.11,4,23.5C4,12.73,12.95,4,24,4S44,12.73,44,23.5z"
                    />
                    <path
                      d="M34.992,17.292c-0.428,0-0.843,0.142-1.2,0.411l-5.694,4.215	c-0.133,0.1-0.28,0.15-0.435,0.15c-0.15,0-0.291-0.047-0.41-0.136l-3.972-2.99c-0.808-0.601-1.76-0.918-2.757-0.918	c-1.576,0-3.025,0.791-3.876,2.116l-1.211,1.891l-4.12,6.695c-0.392,0.614-0.422,1.372-0.071,2.014	c0.358,0.654,1.034,1.06,1.764,1.06c0.428,0,0.843-0.142,1.2-0.411l5.694-4.215c0.133-0.1,0.28-0.15,0.435-0.15	c0.15,0,0.291,0.047,0.41,0.136l3.972,2.99c0.809,0.602,1.76,0.918,2.757,0.918c1.576,0,3.025-0.791,3.876-2.116l1.211-1.891	l4.12-6.695c0.392-0.614,0.422-1.372,0.071-2.014C36.398,17.698,35.722,17.292,34.992,17.292L34.992,17.292z"
                      opacity=".05"
                    />
                    <path
                      d="M34.992,17.792c-0.319,0-0.63,0.107-0.899,0.31l-5.697,4.218	c-0.216,0.163-0.468,0.248-0.732,0.248c-0.259,0-0.504-0.082-0.71-0.236l-3.973-2.991c-0.719-0.535-1.568-0.817-2.457-0.817	c-1.405,0-2.696,0.705-3.455,1.887l-1.21,1.891l-4.115,6.688c-0.297,0.465-0.32,1.033-0.058,1.511c0.266,0.486,0.787,0.8,1.325,0.8	c0.319,0,0.63-0.107,0.899-0.31l5.697-4.218c0.216-0.163,0.468-0.248,0.732-0.248c0.259,0,0.504,0.082,0.71,0.236l3.973,2.991	c0.719,0.535,1.568,0.817,2.457,0.817c1.405,0,2.696-0.705,3.455-1.887l1.21-1.891l4.115-6.688c0.297-0.465,0.32-1.033,0.058-1.511	C36.051,18.106,35.531,17.792,34.992,17.792L34.992,17.792z"
                      opacity=".07"
                    />
                    <path
                      fill="#fff"
                      d="M34.394,18.501l-5.7,4.22c-0.61,0.46-1.44,0.46-2.04,0.01L22.68,19.74	c-1.68-1.25-4.06-0.82-5.19,0.94l-1.21,1.89l-4.11,6.68c-0.6,0.94,0.55,2.01,1.44,1.34l5.7-4.22c0.61-0.46,1.44-0.46,2.04-0.01	l3.974,2.991c1.68,1.25,4.06,0.82,5.19-0.94l1.21-1.89l4.11-6.68C36.434,18.901,35.284,17.831,34.394,18.501z"
                    />
                  </svg>
                </div>
                <div className={styles.contactcolumn}>
                  <div className={styles.num}>Black Tech</div>
                  <div className={styles.contacttext}>
                    Send message at messenger{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.contactUsmap}>
              <div className={styles.contact}>
                <div className={styles.contacticon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="32px"
                    height="32px"
                  >
                    <path
                      fill="#fff"
                      d="M24,5C21.361,5,13.33,5,8.89,9.054C6.246,11.688,5,15.494,5,21v3c0,5.506,1.246,9.312,3.921,11.976 c1.332,1.215,3.148,2.186,5.368,2.857L15,39.047v5.328C15,45,15.181,45,15.241,45c0.123,0,0.32-0.039,0.694-0.371 c0.09-0.089,0.75-0.803,3.96-4.399l0.324-0.363l0.485,0.031C21.779,39.965,22.888,40,24,40c2.639,0,10.67,0,15.11-4.055 C41.753,33.311,43,29.505,43,24v-3c0-5.506-1.246-9.312-3.921-11.976C34.67,5,26.639,5,24,5z"
                    />
                    <path
                      fill="#7e57c2"
                      d="M33.451 28.854c-1.111-.936-1.624-1.219-3.158-2.14C29.654 26.331 28.68 26 28.169 26c-.349 0-.767.267-1.023.523C26.49 27.179 26.275 28 25.125 28c-1.125 0-3.09-1.145-4.5-2.625C19.145 23.965 18 22 18 20.875c0-1.15.806-1.38 1.462-2.037C19.718 18.583 20 18.165 20 17.816c0-.511-.331-1.47-.714-2.109-.921-1.535-1.203-2.048-2.14-3.158-.317-.376-.678-.548-1.056-.549-.639-.001-1.478.316-2.046.739-.854.637-1.747 1.504-1.986 2.584-.032.147-.051.295-.057.443-.046 1.125.396 2.267.873 3.234 1.123 2.279 2.609 4.485 4.226 6.455.517.63 1.08 1.216 1.663 1.782.566.582 1.152 1.145 1.782 1.663 1.97 1.617 4.176 3.103 6.455 4.226.958.472 2.086.906 3.2.874.159-.005.318-.023.477-.058 1.08-.238 1.947-1.132 2.584-1.986.423-.568.74-1.406.739-2.046C33.999 29.532 33.827 29.171 33.451 28.854zM34 24c-.552 0-1-.448-1-1v-1c0-4.962-4.038-9-9-9-.552 0-1-.448-1-1s.448-1 1-1c6.065 0 11 4.935 11 11v1C35 23.552 34.552 24 34 24zM27.858 22c-.444 0-.85-.298-.967-.748-.274-1.051-1.094-1.872-2.141-2.142-.535-.139-.856-.684-.718-1.219.138-.534.682-.855 1.219-.718 1.748.453 3.118 1.822 3.575 3.574.139.535-.181 1.08-.715 1.22C28.026 21.989 27.941 22 27.858 22z"
                    />
                    <path
                      fill="#7e57c2"
                      d="M31,23c-0.552,0-1-0.448-1-1c0-3.188-2.494-5.818-5.678-5.986c-0.552-0.029-0.975-0.5-0.946-1.051 c0.029-0.552,0.508-0.976,1.051-0.946C28.674,14.241,32,17.748,32,22C32,22.552,31.552,23,31,23z"
                    />
                    <path
                      fill="#7e57c2"
                      d="M24,4C19.5,4,12.488,4.414,8.216,8.316C5.196,11.323,4,15.541,4,21c0,0.452-0.002,0.956,0.002,1.5 C3.998,23.043,4,23.547,4,23.999c0,5.459,1.196,9.677,4.216,12.684c1.626,1.485,3.654,2.462,5.784,3.106v4.586 C14,45.971,15.049,46,15.241,46h0.009c0.494-0.002,0.921-0.244,1.349-0.624c0.161-0.143,2.02-2.215,4.042-4.481 C21.845,40.972,22.989,41,23.999,41c0,0,0,0,0,0s0,0,0,0c4.5,0,11.511-0.415,15.784-4.317c3.019-3.006,4.216-7.225,4.216-12.684 c0-0.452,0.002-0.956-0.002-1.5c0.004-0.544,0.002-1.047,0.002-1.5c0-5.459-1.196-9.677-4.216-12.684C35.511,4.414,28.5,4,24,4z M41,23.651l0,0.348c0,4.906-1.045,8.249-3.286,10.512C33.832,38,26.437,38,23.999,38c-0.742,0-1.946-0.001-3.367-0.1 C20.237,38.344,16,43.083,16,43.083V37.22c-2.104-0.505-4.183-1.333-5.714-2.708C8.045,32.248,7,28.905,7,23.999l0-0.348 c0-0.351-0.001-0.73,0.002-1.173C6.999,22.078,6.999,21.7,7,21.348L7,21c0-4.906,1.045-8.249,3.286-10.512 C14.167,6.999,21.563,6.999,24,6.999c2.437,0,9.832,0,13.713,3.489c2.242,2.263,3.286,5.606,3.286,10.512l0,0.348 c0,0.351,0.001,0.73-0.002,1.173C41,22.922,41,23.3,41,23.651z"
                    />
                  </svg>
                </div>
                <div className={styles.contactcolumn}>
                  <div className={styles.num}>+977 9802839909</div>
                  <div className={styles.contacttext}>Viber Number </div>
                </div>
              </div>
            </div>
            <div className={styles.contactUsmap}>
              <div className={styles.contact}>
                <div className={styles.contacticon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="32px"
                    height="32px"
                  >
                    <path
                      fill="#e0e0e0"
                      d="M5.5,40.5h37c1.933,0,3.5-1.567,3.5-3.5V11c0-1.933-1.567-3.5-3.5-3.5h-37C3.567,7.5,2,9.067,2,11v26C2,38.933,3.567,40.5,5.5,40.5z"
                    />
                    <path
                      fill="#d9d9d9"
                      d="M26,40.5h16.5c1.933,0,3.5-1.567,3.5-3.5V11c0-1.933-1.567-3.5-3.5-3.5h-37C3.567,7.5,2,9.067,2,11L26,40.5z"
                    />
                    <path
                      fill="#eee"
                      d="M6.745,40.5H42.5c1.933,0,3.5-1.567,3.5-3.5V11.5L6.745,40.5z"
                    />
                    <path
                      fill="#e0e0e0"
                      d="M25.745,40.5H42.5c1.933,0,3.5-1.567,3.5-3.5V11.5L18.771,31.616L25.745,40.5z"
                    />
                    <path
                      fill="#ca3737"
                      d="M42.5,9.5h-37C3.567,9.5,2,9.067,2,11v26c0,1.933,1.567,3.5,3.5,3.5H7V12h34v28.5h1.5c1.933,0,3.5-1.567,3.5-3.5V11C46,9.067,44.433,9.5,42.5,9.5z"
                    />
                    <path
                      fill="#f5f5f5"
                      d="M42.5,7.5H24H5.5C3.567,7.5,2,9.036,2,11c0,1.206,1.518,2.258,1.518,2.258L24,27.756l20.482-14.497c0,0,1.518-1.053,1.518-2.258C46,9.036,44.433,7.5,42.5,7.5z"
                    />
                    <path
                      fill="#e84f4b"
                      d="M43.246,7.582L24,21L4.754,7.582C3.18,7.919,2,9.297,2,11c0,1.206,1.518,2.258,1.518,2.258L24,27.756l20.482-14.497c0,0,1.518-1.053,1.518-2.258C46,9.297,44.82,7.919,43.246,7.582z"
                    />
                  </svg>
                </div>
                <div className={styles.contactcolumn}>
                  <div className={styles.num}>hello@restrox.co</div>
                  <div className={styles.contacttext}>Send Mail</div>
                </div>
              </div>
            </div>
            <div className={styles.socialmediatext}>SiteMap</div>
            <div className={styles.bottombar}>
              <div
                className={styles.bottom}
                onClick={() =>
                  router.push("/portfolio/masonry/portfolio-masonary-3")
                }
              >
                Portfolio
              </div>
              <div
                className={styles.bottom}
                onClick={() => router.push("/portfolio/grid/portfolio-grid-4")}
              >
                Team
              </div>
              <div className={styles.bottom} onClick={() => router.push("/it")}>
                Services
              </div>
            </div>
            <div className={styles.bottombar} style={{ marginTop: "10px" }}>
              <div
                className={styles.bottom}
                onClick={() => router.push("/digital")}
              >
                About Us
              </div>
              <div
                className={styles.bottom}
                style={{ padding: "0 1.2em", marginLeft: "-10px" }}
                onClick={() => router.push("/blog/blog-reguler")}
              >
                Blog{" "}
              </div>
              <div
                className={styles.bottom}
                style={{ padding: "0 1.4em" }}
                // onClick={() => router.push("/innerpage/terms")}
              >
                News
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixedOverlay;
