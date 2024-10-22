import React from 'react';
import './DropDown.css'
function Dropdown({ options, onChange, selectedValue, placeholder }) {
    return (
     <div className=''>
         <select className='dropdown-con' value={selectedValue} onChange={onChange}>
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
     </div>
    );
  }

export default Dropdown;