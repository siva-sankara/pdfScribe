import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Button from "../button/Button";
function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <nav>
        <div className="nav-bar">
          <svg
            className="bar"
            onClick={()=>setShowMenu(!showMenu)}
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20"
            height="20"
            viewBox="0 0 50 50"
          >
            <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
          </svg>
          <div className={showMenu ? "showmenu" : "hidemenu"}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/home">Features</Link>
              </li>
              <li>
                <Link to="/pdfconvertor">Testimonals</Link>
              </li>
            
            </ul>
          </div>
          <div className={showMenu ? "hidemenu" :"navbar-left-btn"}>
            <Link to="/">
              <svg
                width="164"
                height="40"
                viewBox="0 0 164 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.0075 24.3022C13.7121 24.3022 13.513 24.3311 13.4103 24.36V26.2511C13.5323 26.2799 13.6848 26.288 13.8951 26.288C14.664 26.288 15.1376 25.8995 15.1376 25.2429C15.1376 24.6554 14.7298 24.3022 14.0075 24.3022ZM19.6051 24.3215C19.2841 24.3215 19.0754 24.3504 18.9518 24.3793V28.5691C19.0754 28.598 19.2744 28.598 19.4542 28.598C20.7658 28.6076 21.6198 27.8853 21.6198 26.357C21.6294 25.0246 20.8509 24.3215 19.6051 24.3215Z"
                  fill="#008080"
                />
                <path
                  d="M23.2106 3.94696H10.3682C9.51669 3.94696 8.70006 4.28522 8.09796 4.88733C7.49585 5.48943 7.15759 6.30606 7.15759 7.15757V32.8424C7.15759 33.6939 7.49585 34.5106 8.09796 35.1127C8.70006 35.7148 9.51669 36.053 10.3682 36.053H29.6318C30.4833 36.053 31.3 35.7148 31.9021 35.1127C32.5042 34.5106 32.8424 33.6939 32.8424 32.8424V13.5788L23.2106 3.94696ZM15.9835 26.7262C15.4875 27.1917 14.7555 27.4004 13.9031 27.4004C13.7378 27.4022 13.5726 27.3926 13.4086 27.3715V29.6607H11.9735V23.3422C12.6212 23.2456 13.2756 23.2016 13.9304 23.2106C14.8245 23.2106 15.4602 23.3808 15.8888 23.7227C16.2966 24.047 16.5727 24.5783 16.5727 25.2044C16.5711 25.8337 16.3624 26.365 15.9835 26.7262ZM22.0949 28.9014C21.4207 29.4616 20.3949 29.7281 19.1412 29.7281C18.3899 29.7281 17.8585 29.68 17.4973 29.6318V23.3438C18.1453 23.2493 18.7995 23.2047 19.4542 23.2106C20.6694 23.2106 21.4592 23.4289 22.0757 23.8945C22.7419 24.3889 23.1593 25.1771 23.1593 26.3088C23.1593 27.5337 22.7114 28.3797 22.0949 28.9014ZM28.0265 24.4467H25.5672V25.9091H27.866V27.0874H25.5672V29.6623H24.1128V23.2588H28.0265V24.4467ZM23.2106 15.1841H21.6053V7.15757L29.6318 15.1841H23.2106Z"
                  fill="#008080"
                />
                <path
                  d="M23.2106 3.94696H10.3682C9.51669 3.94696 8.70006 4.28522 8.09796 4.88733C7.49585 5.48943 7.15759 6.30606 7.15759 7.15757V32.8424C7.15759 33.6939 7.49585 34.5106 8.09796 35.1127C8.70006 35.7148 9.51669 36.053 10.3682 36.053H29.6318C30.4833 36.053 31.3 35.7148 31.9021 35.1127C32.5042 34.5106 32.8424 33.6939 32.8424 32.8424V13.5788L23.2106 3.94696ZM15.9835 26.7262C15.4875 27.1917 14.7555 27.4004 13.9031 27.4004C13.7378 27.4022 13.5726 27.3926 13.4086 27.3715V29.6607H11.9735V23.3422C12.6212 23.2456 13.2756 23.2016 13.9304 23.2106C14.8245 23.2106 15.4602 23.3808 15.8888 23.7227C16.2966 24.047 16.5727 24.5783 16.5727 25.2044C16.5711 25.8337 16.3624 26.365 15.9835 26.7262ZM22.0949 28.9014C21.4207 29.4616 20.3949 29.7281 19.1412 29.7281C18.3899 29.7281 17.8585 29.68 17.4973 29.6318V23.3438C18.1453 23.2493 18.7995 23.2047 19.4542 23.2106C20.6694 23.2106 21.4592 23.4289 22.0757 23.8945C22.7419 24.3889 23.1593 25.1771 23.1593 26.3088C23.1593 27.5337 22.7114 28.3797 22.0949 28.9014ZM28.0265 24.4467H25.5672V25.9091H27.866V27.0874H25.5672V29.6623H24.1128V23.2588H28.0265V24.4467ZM23.2106 15.1841H21.6053V7.15757L29.6318 15.1841H23.2106Z"
                  fill="#008080"
                />
                <path
                  d="M8.32507 7.15756H24.67L31.0912 17.665V34.0099H8.32507V7.15756Z"
                  fill="#008080"
                />
                <path
                  d="M19.1244 27.005L22.1891 20.4378L25.2538 27.005M20.0001 25.2537H24.3782M14.7463 18.0275C15.9082 17.8829 17.078 17.8106 18.2488 17.811M18.2488 17.811C18.9026 17.811 19.5523 17.8331 20.195 17.8775M18.2488 17.811V16.4975M20.195 17.8775C19.519 20.9679 17.4841 23.5492 14.7463 24.963M20.195 17.8775C20.7181 17.9131 21.237 17.9633 21.7513 18.0275M19.0725 22.9865C18.1151 22.0131 17.3563 20.8628 16.8385 19.5996"
                  stroke="white"
                  stroke-width="1.11136"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M46.4065 12.0749C48.5906 12.0749 50.1844 12.5225 51.1877 13.4178C52.191 14.313 52.6926 15.5672 52.6926 17.1802C52.6926 17.9134 52.5769 18.6118 52.3453 19.2756C52.1215 19.9316 51.7511 20.5143 51.234 21.0237C50.7169 21.5253 50.0339 21.9228 49.1849 22.2161C48.3437 22.5093 47.3056 22.656 46.0708 22.656H44.2648V29H41.4864V12.0749H46.4065ZM46.2213 14.3786H44.2648V20.3406H45.7814C46.6535 20.3406 47.3944 20.2403 48.0041 20.0396C48.6138 19.8312 49.0769 19.5032 49.3933 19.0556C49.7097 18.608 49.8679 18.0176 49.8679 17.2844C49.8679 16.3042 49.5708 15.5749 48.9765 15.0964C48.39 14.6179 47.4716 14.3786 46.2213 14.3786ZM69.8146 20.3754C69.8146 22.2817 69.4596 23.8754 68.7495 25.1565C68.0395 26.43 67.0092 27.3908 65.6586 28.0391C64.3079 28.6797 62.6795 29 60.7732 29H56.073V12.0749H61.2826C63.0345 12.0749 64.5472 12.3913 65.8206 13.0241C67.0941 13.6493 68.0781 14.5793 68.7727 15.8141C69.4673 17.0413 69.8146 18.5617 69.8146 20.3754ZM66.9204 20.4564C66.9204 19.0672 66.7005 17.925 66.2605 17.0297C65.8284 16.1344 65.1878 15.4707 64.3388 15.0385C63.4976 14.5986 62.4595 14.3786 61.2247 14.3786H58.8515V26.6731H60.8195C62.8647 26.6731 64.3928 26.1521 65.4039 25.1102C66.4149 24.0683 66.9204 22.517 66.9204 20.4564ZM76.2165 29H73.4613V12.0749H83.0236V14.4134H76.2165V19.6923H82.5837V22.0192H76.2165V29ZM95.8738 24.3925C95.8738 25.3958 95.6268 26.2602 95.1328 26.9857C94.6466 27.7111 93.9443 28.2668 93.0259 28.6527C92.1152 29.0386 91.027 29.2315 89.7613 29.2315C89.1438 29.2315 88.5534 29.1968 87.99 29.1273C87.4266 29.0579 86.8941 28.9576 86.3924 28.8263C85.8985 28.6874 85.447 28.5215 85.038 28.3286V25.7122C85.7248 26.0132 86.4928 26.2872 87.3417 26.5342C88.1907 26.7734 89.0551 26.893 89.9349 26.893C90.6527 26.893 91.2469 26.8004 91.7177 26.6152C92.1962 26.4223 92.5512 26.1521 92.7828 25.8048C93.0143 25.4498 93.1301 25.0369 93.1301 24.5661C93.1301 24.0645 92.995 23.64 92.7249 23.2927C92.4548 22.9454 92.0457 22.629 91.4978 22.3434C90.9575 22.0501 90.2783 21.7375 89.4603 21.4057C88.9046 21.1819 88.3721 20.9272 87.8627 20.6416C87.361 20.3561 86.9134 20.0203 86.5198 19.6344C86.1262 19.2486 85.8136 18.7932 85.5821 18.2684C85.3583 17.7359 85.2463 17.1107 85.2463 16.393C85.2463 15.436 85.474 14.6179 85.9294 13.9387C86.3924 13.2595 87.0407 12.7386 87.8743 12.3759C88.7155 12.0131 89.6957 11.8317 90.8147 11.8317C91.7023 11.8317 92.5358 11.9244 93.3153 12.1096C94.1025 12.2948 94.8743 12.5572 95.6306 12.8968L94.7508 15.1311C94.0562 14.8455 93.3809 14.6179 92.7249 14.4481C92.0766 14.2783 91.4129 14.1934 90.7337 14.1934C90.1471 14.1934 89.6493 14.2821 89.2403 14.4597C88.8313 14.6372 88.5187 14.888 88.3026 15.2121C88.0942 15.5286 87.99 15.9067 87.99 16.3467C87.99 16.8406 88.1096 17.2574 88.3489 17.5969C88.5959 17.9288 88.974 18.2337 89.4834 18.5115C90.0005 18.7893 90.6642 19.0981 91.4746 19.4376C92.4085 19.8235 93.1995 20.2287 93.8478 20.6532C94.5038 21.0777 95.0055 21.5871 95.3528 22.1813C95.7001 22.7679 95.8738 23.5049 95.8738 24.3925ZM106.351 14.1934C105.54 14.1934 104.815 14.34 104.174 14.6333C103.541 14.9266 103.005 15.3511 102.565 15.9067C102.125 16.4547 101.789 17.1223 101.558 17.9095C101.326 18.689 101.211 19.5688 101.211 20.549C101.211 21.861 101.396 22.9917 101.766 23.941C102.137 24.8826 102.7 25.608 103.456 26.1174C104.213 26.6191 105.17 26.8699 106.328 26.8699C107.045 26.8699 107.744 26.8004 108.423 26.6615C109.102 26.5226 109.804 26.3335 110.53 26.0942V28.4559C109.843 28.726 109.148 28.9228 108.446 29.0463C107.744 29.1698 106.933 29.2315 106.015 29.2315C104.286 29.2315 102.851 28.8727 101.708 28.1549C100.574 27.4371 99.7249 26.4261 99.1615 25.1218C98.6059 23.8175 98.328 22.2894 98.328 20.5374C98.328 19.2563 98.5055 18.0832 98.8605 17.0181C99.2156 15.9531 99.7327 15.0346 100.412 14.2629C101.091 13.4834 101.928 12.8852 102.924 12.4685C103.927 12.044 105.073 11.8317 106.362 11.8317C107.211 11.8317 108.045 11.9282 108.863 12.1212C109.689 12.3064 110.453 12.5727 111.155 12.92L110.183 15.2121C109.596 14.9343 108.982 14.6951 108.342 14.4944C107.701 14.2937 107.038 14.1934 106.351 14.1934ZM118.923 12.0749C120.382 12.0749 121.586 12.2524 122.535 12.6074C123.492 12.9624 124.202 13.5027 124.665 14.2281C125.136 14.9536 125.371 15.8759 125.371 16.995C125.371 17.8285 125.217 18.5385 124.908 19.1251C124.599 19.7116 124.194 20.1978 123.693 20.5837C123.191 20.9696 122.655 21.2783 122.083 21.5099L126.888 29H123.75L119.664 22.2161H116.943V29H114.165V12.0749H118.923ZM118.738 14.3902H116.943V19.9239H118.865C120.154 19.9239 121.088 19.6846 121.667 19.2061C122.253 18.7276 122.546 18.0214 122.546 17.0876C122.546 16.1074 122.234 15.4128 121.609 15.0038C120.991 14.5947 120.034 14.3902 118.738 14.3902ZM129.307 29V12.0749H132.086V29H129.307ZM136.554 12.0749H141.59C143.774 12.0749 145.422 12.3913 146.533 13.0241C147.645 13.657 148.2 14.7491 148.2 16.3004C148.2 16.9487 148.085 17.5352 147.853 18.06C147.629 18.5771 147.301 19.0054 146.869 19.345C146.437 19.6769 145.904 19.9007 145.272 20.0165V20.1322C145.928 20.248 146.51 20.4525 147.02 20.7458C147.537 21.0391 147.942 21.4597 148.235 22.0077C148.536 22.5556 148.687 23.2657 148.687 24.1378C148.687 25.172 148.44 26.0518 147.946 26.7773C147.46 27.5027 146.761 28.0546 145.85 28.4327C144.947 28.8109 143.875 29 142.632 29H136.554V12.0749ZM139.333 19.0556H141.995C143.253 19.0556 144.125 18.8511 144.612 18.442C145.098 18.033 145.341 17.4349 145.341 16.6477C145.341 15.845 145.052 15.2662 144.473 14.9112C143.902 14.5561 142.991 14.3786 141.741 14.3786H139.333V19.0556ZM139.333 21.3015V26.6731H142.262C143.558 26.6731 144.469 26.4223 144.994 25.9206C145.519 25.4189 145.781 24.7398 145.781 23.8831C145.781 23.3583 145.661 22.9029 145.422 22.517C145.191 22.1312 144.808 21.834 144.276 21.6256C143.743 21.4095 143.026 21.3015 142.123 21.3015H139.333ZM161.768 29H152.183V12.0749H161.768V14.4134H154.961V19.0093H161.34V21.3362H154.961V26.6499H161.768V29Z"
                  fill="#008080"
                />
              </svg>
            </Link>
          </div>
          <div className="navbar-items">
            <ul>
              <li>
                <Link to="/" className="link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/home" className="link">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pdfconvertor" className="link">
                  Testimonals
                </Link>
              </li>
              <li>
                <Link to="/home" className="link">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/pdfconvertor" className="link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className={showMenu ? "hidemenu" :"navbar-right-btn"}>
            <Button text="Get Started" />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
