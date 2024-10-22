
import React, { useState, useEffect } from "react";
import AceEditor from "react-ace";
import "./Notepad.css";
import "ace-builds/src-noconflict/mode-text";
import "ace-builds/src-noconflict/theme-github";
import { PDFDownloadLink, Document, Page, Text } from "@react-pdf/renderer";
import { pdfjs } from "react-pdf";
import ResumeEditor from "../resume/ResmeEditor";


const MyDocument = ({ text }) => (
  <Document>
    <Page size="A4">
      <Text>{text}</Text>
    </Page>
  </Document>
);
function Notepad() {
  // Set a default message as the initial state
  const defaultMessage = `
  Enter Data according to the templet :--> 
  name: Harpreet Singh
  role/Degination: Full stack developer
  Conatct Information:
  phone : 123456789
  email : inforamation@gmail.com
  Proffesional Summary:  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur maxime quisquam cumque expedita eius. Labore amet ut voluptatem laboriosam nulla voluptas deleniti, commodi fugit nemo ipsum incidunt minus dolorem ipsam?  
  Education: Aundhra Univercity
            🎯 Bachelor of Technology in Computer Science
            🎯 2015-2019
  Skills:
            🎯 Html
            🎯 Css
            🎯 Java Script
            🎯 Recat js
            🎯 React Native
            🎯 MongoDb
            🎯 Node js
            🎯 sql
  Activites:
            🎯 reading
            🎯 playing cricket
            🎯 travelling
  Projects:
            🎯 React Native app for a travel blog
            🎯 React Native app for a restaurant booking system
            🎯 Node js app for a chat app

  `;

  const [text, setText] = useState(defaultMessage);
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [inputText, setInputText] = useState("");
  const handleTextChange = (newValue) => {
    setText(newValue);
    saveToHistory(newValue);
  };

  const saveToHistory = (newText) => {
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(newText);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  const handleSaveToFile = () => {
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "resume.txt";
    link.click();
  };

  const handleClearText = () => {
    setText(defaultMessage); 
  };

  const applyFormatting = (format) => {
    const start = text.lastIndexOf("\n") + 1;
    let formattedText = "";

    switch (format) {
      case "bold":
        formattedText = ` **${text.substring(start)}**`;
        break;
      case "italic":
        formattedText = ` *${text.substring(start)}*`;
        break;
      case "underline":
        formattedText = `<u>${text.substring(start)}</u>`;
        break;
      case "list":
        formattedText = `👉 ${text.substring(start)}`;
        break;
      case "header":
        formattedText = `<h1>${text.substring(start)}</h1>`;
        break;
      case "subheader":
        formattedText = `<h2>${text.substring(start)}</h2>`;
        break;
      default:
        return;
    }

    const newText = text.substring(0, start) + formattedText;
    setText(newText);
    saveToHistory(newText);
  };

  const handleUndo = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
      setText(history[historyIndex - 1]);
    }
  };

  const handleRedo = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1);
      setText(history[historyIndex + 1]);
    }
  };

  return (
    <div>
      <div className="main-con">
        <ResumeEditor />
        <div className="resume-editor-container">
          <div className="top">
            <h3>Translate to the PDF</h3>
           <div style={{alignItems:"center" , display:"flex"}}> 
           <button onClick={handleClearText}>Clear</button>
           <svg
              onClick={handleSaveToFile}
              width="25"
              height="25"
              viewBox="0 0 16 17"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 11.5V13C2 13.3978 2.15804 13.7794 2.43934 14.0607C2.72064 14.342 3.10218 14.5 3.5 14.5H12.5C12.8978 14.5 13.2794 14.342 13.5607 14.0607C13.842 13.7794 14 13.3978 14 13V11.5M11 8.5L8 11.5M8 11.5L5 8.5M8 11.5V2.5"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              width="20"
              height="20"
              viewBox="0 0 14 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.81112 6.77134C3.6497 6.48088 3.39639 6.25225 3.09097 6.12133C2.78555 5.99041 2.4453 5.96461 2.12363 6.04799C1.80196 6.13137 1.51708 6.3192 1.31371 6.58201C1.11034 6.84481 1 7.1677 1 7.50001C1 7.83231 1.11034 8.1552 1.31371 8.418C1.51708 8.68081 1.80196 8.86864 2.12363 8.95202C2.4453 9.0354 2.78555 9.0096 3.09097 8.87868C3.39639 8.74776 3.6497 8.51913 3.81112 8.22867M3.81112 6.77134C3.93112 6.98734 3.99979 7.23534 3.99979 7.50001C3.99979 7.76467 3.93112 8.01334 3.81112 8.22867M3.81112 6.77134L10.1885 3.22867M3.81112 8.22867L10.1885 11.7713M10.1885 3.22867C10.282 3.40476 10.4096 3.56045 10.564 3.68662C10.7184 3.8128 10.8964 3.90693 11.0875 3.96352C11.2787 4.02011 11.4793 4.03802 11.6774 4.0162C11.8756 3.99438 12.0675 3.93327 12.2417 3.83645C12.416 3.73962 12.5693 3.60902 12.6925 3.45228C12.8157 3.29554 12.9065 3.11581 12.9594 2.92359C13.0124 2.73138 13.0265 2.53053 13.0009 2.3328C12.9753 2.13507 12.9106 1.94442 12.8105 1.77201C12.6132 1.43223 12.2904 1.18343 11.9117 1.07908C11.5329 0.974732 11.1283 1.02317 10.7848 1.21397C10.4414 1.40478 10.1865 1.72273 10.075 2.09947C9.96345 2.47621 10.0042 2.88166 10.1885 3.22867ZM10.1885 11.7713C10.0928 11.9436 10.0319 12.133 10.0095 12.3288C9.98696 12.5245 10.0033 12.7228 10.0574 12.9122C10.1115 13.1017 10.2025 13.2787 10.325 13.433C10.4475 13.5873 10.5992 13.716 10.7715 13.8117C10.9437 13.9074 11.1331 13.9682 11.3289 13.9907C11.5246 14.0132 11.7229 13.9969 11.9124 13.9427C12.1018 13.8886 12.2788 13.7977 12.4331 13.6752C12.5874 13.5526 12.7161 13.4009 12.8118 13.2287C13.005 12.8808 13.0522 12.4704 12.9429 12.0878C12.8335 11.7051 12.5767 11.3816 12.2288 11.1883C11.8809 10.9951 11.4705 10.9479 11.0879 11.0573C10.7052 11.1666 10.3817 11.4235 10.1885 11.7713Z"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          
           </div>
          </div>
          <div className="resume-editor-actions">
            <button onClick={() => applyFormatting("bold")}>
              <svg
                width="12"
                height="15"
                viewBox="0 0 12 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.875 0.722656H5.12305C6.96549 0.722656 8.35547 0.989583 9.29297 1.52344C10.2305 2.05729 10.6992 2.97852 10.6992 4.28711C10.6992 4.83398 10.6016 5.32878 10.4062 5.77148C10.2174 6.20768 9.94076 6.56901 9.57617 6.85547C9.21159 7.13542 8.76237 7.32422 8.22852 7.42188V7.51953C8.7819 7.61719 9.27344 7.78971 9.70312 8.03711C10.1393 8.28451 10.4811 8.63932 10.7285 9.10156C10.9824 9.5638 11.1094 10.1628 11.1094 10.8984C11.1094 11.7708 10.901 12.513 10.4844 13.125C10.0742 13.737 9.48503 14.2025 8.7168 14.5215C7.95508 14.8405 7.05013 15 6.00195 15H0.875V0.722656ZM3.21875 6.61133H5.46484C6.52604 6.61133 7.26172 6.4388 7.67188 6.09375C8.08203 5.7487 8.28711 5.24414 8.28711 4.58008C8.28711 3.90299 8.04297 3.41471 7.55469 3.11523C7.07292 2.81576 6.30469 2.66602 5.25 2.66602H3.21875V6.61133ZM3.21875 8.50586V13.0371H5.68945C6.7832 13.0371 7.55143 12.8255 7.99414 12.4023C8.43685 11.9792 8.6582 11.4062 8.6582 10.6836C8.6582 10.2409 8.55729 9.85677 8.35547 9.53125C8.16016 9.20573 7.83789 8.95508 7.38867 8.7793C6.93945 8.59701 6.33398 8.50586 5.57227 8.50586H3.21875Z"
                  fill="#676768"
                />
              </svg>
            </button>
            <button onClick={() => applyFormatting("italic")}>
              <svg
                width="7"
                height="15"
                viewBox="0 0 7 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.673828 15L3.71094 0.722656H6.01562L2.96875 15H0.673828Z"
                  fill="#676768"
                />
              </svg>
            </button>
            <button onClick={() => applyFormatting("underline")}>
              <svg
                width="15"
                height="17"
                viewBox="0 0 15 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.0859 0.722656V9.96094C13.0859 10.957 12.8743 11.849 12.4512 12.6367C12.0345 13.4245 11.403 14.0495 10.5566 14.5117C9.71029 14.9674 8.64583 15.1953 7.36328 15.1953C5.53385 15.1953 4.14062 14.7168 3.18359 13.7598C2.23307 12.7962 1.75781 11.5169 1.75781 9.92188V0.722656H4.10156V9.7168C4.10156 10.9082 4.38151 11.7871 4.94141 12.3535C5.5013 12.9199 6.33789 13.2031 7.45117 13.2031C8.2194 13.2031 8.8444 13.0697 9.32617 12.8027C9.81445 12.5293 10.1725 12.1322 10.4004 11.6113C10.6348 11.084 10.752 10.4492 10.752 9.70703V0.722656H13.0859Z"
                  fill="#676768"
                />
                <path d="M0 16.2207H14.8535V16.709H0V16.2207Z" fill="#676768" />
              </svg>
            </button>
            <button onClick={() => applyFormatting("list")}>
              <svg
                width="20"
                height="14"
                viewBox="0 0 20 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 10H9C8.73478 10 8.48043 9.89464 8.29289 9.70711C8.10536 9.51957 8 9.26522 8 9C8 8.73478 8.10536 8.48043 8.29289 8.29289C8.48043 8.10536 8.73478 8 9 8H19C19.2652 8 19.5196 8.10536 19.7071 8.29289C19.8946 8.48043 20 8.73478 20 9C20 9.26522 19.8946 9.51957 19.7071 9.70711C19.5196 9.89464 19.2652 10 19 10ZM19 6H9C8.73478 6 8.48043 5.89464 8.29289 5.70711C8.10536 5.51957 8 5.26522 8 5C8 4.73478 8.10536 4.48043 8.29289 4.29289C8.48043 4.10536 8.73478 4 9 4H19C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5C20 5.26522 19.8946 5.51957 19.7071 5.70711C19.5196 5.89464 19.2652 6 19 6ZM19 2H1C0.734783 2 0.480429 1.89464 0.292892 1.70711C0.105356 1.51957 0 1.26522 0 1C0 0.734783 0.105356 0.48043 0.292892 0.292893C0.480429 0.105357 0.734783 0 1 0H19C19.2652 0 19.5196 0.105357 19.7071 0.292893C19.8946 0.48043 20 0.734783 20 1C20 1.26522 19.8946 1.51957 19.7071 1.70711C19.5196 1.89464 19.2652 2 19 2ZM1 12H19C19.2652 12 19.5196 12.1054 19.7071 12.2929C19.8946 12.4804 20 12.7348 20 13C20 13.2652 19.8946 13.5196 19.7071 13.7071C19.5196 13.8946 19.2652 14 19 14H1C0.734783 14 0.480429 13.8946 0.292892 13.7071C0.105356 13.5196 0 13.2652 0 13C0 12.7348 0.105356 12.4804 0.292892 12.2929C0.480429 12.1054 0.734783 12 1 12ZM2.36 4.57C2.45876 4.47449 2.57613 4.40036 2.70481 4.35223C2.83348 4.30409 2.97069 4.28299 3.10789 4.29023C3.24508 4.29747 3.3793 4.3329 3.5022 4.39432C3.62509 4.45573 3.73401 4.54181 3.82216 4.64718C3.91032 4.75255 3.97581 4.87495 4.01456 5.00676C4.05332 5.13856 4.0645 5.27694 4.04741 5.41325C4.03031 5.54957 3.98532 5.6809 3.91522 5.79905C3.84513 5.91721 3.75144 6.01966 3.64 6.1L2.56 7L3.64 7.9C3.74126 7.98395 3.82496 8.08705 3.88631 8.2034C3.94766 8.31974 3.98546 8.44705 3.99754 8.57803C4.00961 8.70901 3.99573 8.84108 3.95669 8.96668C3.91764 9.09229 3.8542 9.20895 3.77 9.31C3.67598 9.42288 3.55824 9.51366 3.42515 9.57588C3.29207 9.6381 3.14691 9.67024 3 9.67C2.7651 9.66765 2.53852 9.58269 2.36 9.43L0.360001 7.77C0.246759 7.67617 0.155609 7.55851 0.0930443 7.42541C0.0304813 7.29232 -0.00195694 7.14707 -0.00195694 7C-0.00195694 6.85293 0.0304813 6.70768 0.0930443 6.57458C0.155609 6.44149 0.246759 6.32383 0.360001 6.23L2.36 4.57Z"
                  fill="#353535"
                />
              </svg>
            </button>
            <button onClick={() => applyFormatting("header")}>Header</button>
            <button onClick={() => applyFormatting("subheader")}>
              Subheader
            </button>
            <button onClick={handleUndo}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 10L2 6M2 6L6 2M2 6L10 6C11.0609 6 12.0783 6.42143 12.8284 7.17157C13.5786 7.92172 14 8.93913 14 10C14 11.0609 13.5786 12.0783 12.8284 12.8284C12.0783 13.5786 11.0609 14 10 14L8 14"
                  stroke="#353535"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button onClick={handleRedo}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 10L14 6M14 6L10 2M14 6L6 6C4.93913 6 3.92172 6.42143 3.17157 7.17157C2.42143 7.92172 2 8.93913 2 10C2 11.0609 2.42143 12.0783 3.17157 12.8284C3.92172 13.5786 4.93913 14 6 14L8 14"
                  stroke="#353535"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>

          <AceEditor
            mode="text"
            theme="textmate"
            onChange={handleTextChange}
            value={text}
            name="resume-editor"
            editorProps={{ $blockScrolling: true }}
            setOptions={{
              useWorker: true,
              fontSize: "16px",
              highlightActiveLine: true,
              showPrintMargin: false,
              showGutter: true,
              tabSize: 4,
              useWrapMode: true,
              enableBasicAutocompletion: true,
              enableSnippets: true,
              enableLiveAutocompletion: true,
              cursorStyle: "ace",
              wrap: "free",
              scrollPastEnd: true,
              
            }}
            width="100%"
            className="ace_editor"
            height="90vh"
          />
        </div>
      </div>
    </div>
  );
}

export default Notepad;
