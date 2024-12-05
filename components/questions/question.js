import React from 'react';
import './question.module.css';

const Question = ({ text }) => {
  return (
    <div className="question-module">
      <div className="question-text">
        <span className="question-prefix">Q: </span>
        {text}
      </div>
    </div>
  );
};

export default Question;