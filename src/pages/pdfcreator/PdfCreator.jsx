import React from 'react'
import Notepad from '../../components/notepad/NotePad'
import ResumeEditor from '../../components/resume/ResmeEditor'
import Dropdown from '../../components/dropdown/DropDown'
import { Link } from 'react-router-dom';
import './PdfCreator.css'
const options = [
  { value: "spain", label: "spain" },
  { value: "japan", label: "japan" },
  { value: "telugu", label: "telugu" },
  { value: "english", label: "english" },
  { value: "germany", label: "japan" },
  { value: "Hindi", label: "Hindi" },
  { value: "spain", label: "spain" },
  { value: "Arab", label: "Arab" },
  { value: "Malayalam", label: "Malayalam" },
  { value: "Tamil", label: "Tamil" },
  { value: "Ordu", label: "Ordu" },
  { value: "Other", label: "Other" },
];
function PdfCreator() {
  return (
    <div style={{margin:"0 10px"}}>
      <div className='navigation'>
       <Link to="/home">Back</Link>
        <Dropdown options={options} />
      </div>
       <Notepad />
    </div>
  )
}

export default PdfCreator
