import React from 'react';
import './selectfield.scss'
function SelectField(props){
  let currentValue = props.value || "DEFAULT";
  return(
    <div className="select-wrapper">
      <select value={currentValue} onChange={props.change} >
        {props.options.map((value, label) => {
          return  <option key={label} value={value.value}>{value.label}</option>
        })}
      </select>
    </div>
  )
}

export default SelectField;