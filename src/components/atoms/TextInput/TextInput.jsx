import React from 'react';
import './textinput.scss';

function TextInput(props) {
  return (
    <div className="text-input-wrapper">
      <input
        type="text"
        placeholder={props.label}
        value={props.value}
        onChange={props.change}
      />
    </div>
  );
}

export default TextInput;
