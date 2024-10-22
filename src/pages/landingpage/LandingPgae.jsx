import React, { useRef, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./LandingPage.css";
import image1 from "../../images/image1.jpeg";
import TranslatorContent from "../../components/Translator/TranslatorContent";
import FileUploader from "../../components/fileuploader/FileUploader";
function LandingPgae() {
  return (
    <div>
      <Navbar />
      <div className="landingpage-con">
        <div className="landing-description">
          <p className="hash-text"># AI-Powered Precision</p>
          <h1 className="heading-text">
            Transform Your Documents with AI-Powered Precision
          </h1>
          <div className="landingpage-sub">
            <p className="second-heading">
              Seamless, Accurate, and Fast Translations at Your Fingertips
            </p>
            <img src={image1} className="image" />
          </div>
          <div
            style={{
              display: "flex",
              padding: "0 15px",
              alignContent: "center",
              gap: "10px",
              justifyContent: "center",
            }}
          >
            <span className="underline"
              style={{
                backgroundColor: "gray",
                // width: "480px",
                height: "1px",
                marginTop: "9px",
              }}
            ></span>
            <p className="underline-text" style={{ color: "gray" }}>How to use</p>
          </div>
        </div>
        <FileUploader />
      </div>
      <TranslatorContent />
    </div>
  );
}

export default LandingPgae;
