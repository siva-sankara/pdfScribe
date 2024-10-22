import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./HomePage.css";
import FileUploader from "../../components/fileuploader/FileUploader";
import TranslatorContent from "../../components/Translator/TranslatorContent";
import Testmonial from "../../components/testmonial/Testmonial";
import PricingContent from "../../components/price/PricingContent";
import FAQComponent from "../../components/faqs/FAQComponent";
import ContactForm from "../../components/Contact/ContactForm";
import Footer from "../../components/footer/Footer";
function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="home-main-con">
        <div className="description">
          <p className="hash-text"> #AI-Powered Precision</p>
          <h1 className="home-heading">
            Transform Your Documents with AI-Powered Precision
          </h1>
          <p className="heading-subtext">
            Seamless, Accurate, and Fast Translations at Your Fingertips
          </p>
        </div>
        <div className="file-uploaders">
          <FileUploader />
        </div>
       
        <div className="best-feature">
        <h4 style={{margin:"10px 0" , color:"#008080" , marginTop:"30px"}}>#Best feature</h4>
          <TranslatorContent />
        </div>
        <Testmonial />
        <hr />
       <PricingContent />
       <FAQComponent />
       <ContactForm />
       <Footer />
      </div>
    </div>
  );
}

export default HomePage;
