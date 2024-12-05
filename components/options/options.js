import React from 'react';
import './options.module.css';

const Option = ({ number, text, onClick }) => {
  return (
    <div className='option-wrapper'>
        <div className="option-module" onClick={onClick}>
             <span className="option-number">{number}:</span>
            <span className="option-text">{text}</span>
        </div>
    </div>
  );
};

export default Option;