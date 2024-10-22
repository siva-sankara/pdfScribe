import React, { useState } from "react";
import './FAQComponent.css'
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        <p className="question-text">{question}</p>
          <div>{isOpen ? (
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="28.5557"
                y="28.9946"
                width="27.6097"
                height="27.6097"
                rx="13.8049"
                transform="rotate(-180 28.5557 28.9946)"
                stroke="#008080"
                stroke-width="1.45314"
              />
              <path
                d="M14.586 11.315L14.586 10.4379L13.9659 11.0581L11.488 13.536C11.4236 13.6003 11.3194 13.6003 11.255 13.536C11.1907 13.4717 11.1907 13.3673 11.255 13.303L14.6343 9.92377C14.6986 9.85942 14.8029 9.85942 14.8673 9.92377L15.1241 9.66689L14.8673 9.92377L18.2464 13.3028C18.2464 13.3028 18.2464 13.3028 18.2464 13.3028C18.2787 13.3352 18.2948 13.3768 18.2948 13.4194C18.2948 13.4621 18.2787 13.5037 18.2465 13.5359C18.1822 13.6003 18.0779 13.6003 18.0135 13.5359L18.0135 13.5359L15.5357 11.0581L14.9155 10.438L14.9155 11.315L14.9155 20.3399C14.9155 20.4308 14.8417 20.5046 14.7508 20.5046C14.6598 20.5046 14.586 20.4309 14.586 20.3399L14.586 11.315Z"
                fill="#008080"
                stroke="#008080"
                stroke-width="0.726571"
              />
            </svg>
          ) : (
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1.21949" y="1.47193" width="27.6097" height="27.6097" rx="13.8049" stroke="#008080" stroke-width="1.45314"/>
            <path d="M15.1893 20.0289L15.1893 19.1518L15.1893 10.1269C15.1893 10.0359 15.1156 9.96216 15.0246 9.96216C14.9337 9.96216 14.8599 10.036 14.8599 10.1269L14.8599 19.1518L14.8599 20.0288L14.2397 19.4087L11.7618 16.9309L11.7618 16.9309C11.6975 16.8665 11.5933 16.8665 11.5289 16.9308L15.1893 20.0289ZM15.1893 20.0289L15.8095 19.4087L18.2874 16.9308C18.3517 16.8664 18.456 16.8664 18.5204 16.9308C18.5847 16.9951 18.5847 17.0995 18.5204 17.1638L15.1411 20.543C15.0768 20.6074 14.9725 20.6074 14.9081 20.543L14.6513 20.7999L14.9081 20.543L11.529 17.164L15.1893 20.0289ZM11.4806 17.0474C11.4806 17.0047 11.4967 16.9631 11.5289 16.9309L11.5289 17.1638C11.4966 17.1315 11.4806 17.0899 11.4806 17.0474Z" fill="#008080" stroke="#008080" stroke-width="0.726571"/>
            </svg>
            
          )}</div>
      </div>
      {isOpen && <p className="faq-answer">{answer}</p>}
    </div>
  );
};

const FAQComponent = () => {
  const faqData = [
    {
      question: "What is UX design?",
      answer:
        "UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.",
    },
    {
      question: "What are the key principles of UX design?",
      answer:
        "The key principles include usability, accessibility, consistency, and user-centered design.",
    },
    {
      question: "What is the difference between UX and UI design?",
      answer:
        "UX design focuses on the overall experience of the user, while UI design is concerned with the specific visual and interactive elements.",
    },
    {
      question: "What is a wireframe?",
      answer:
        "A wireframe is a simple, visual guide that represents the skeletal framework of a website or app.",
    },
    {
      question: "What is user testing?",
      answer:
        "User testing involves evaluating a product by testing it with real users to identify usability issues.",
    },
  ];

  return (
    <div className="faq-con">
      <div style={{display:"flex", flexDirection:"column", marginBottom:"10px", alignItems:"center"}}>
        <h4
          style={{ margin: "10px 0", color: "#008080", marginTop: "30px" }}
          className="hash-text"
        >
          #FAQ
        </h4>
        <h3 className="testimonial-heading">Frequently Asked Questions</h3>
      </div>
      <div className="faq-section">
        {faqData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQComponent;
