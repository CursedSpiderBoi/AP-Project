import React from 'react';
import Question from '../../components/questions/question.js';
import Option from '../../components/options/options.js';
import Modal from '../../components/modal/modal.js';
import GenerateQuestions from '../../components/questions/generate_questions.js';
import { useState } from 'react';

const testGeneration = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [questionData, setQuestionData] = useState(null);
  const [userAnswers, setUserAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleQuestionGeneration = (data) => {
    setQuestionData(data);
    setUserAnswers({});
    setCurrentQuestionIndex(0);
    setShowResults(false);
  };

  const handleOptionSelect = (questionId, selectedOption) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: selectedOption
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < Object.keys(questionData).length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateResults = () => {
    let correct = 0;
    let total = Object.keys(questionData).length;
    let details = {};

    Object.keys(questionData).forEach(questionId => {
      const isCorrect = userAnswers[questionId] === questionData[questionId].correct;
      correct += isCorrect ? 1 : 0;
      details[questionId] = {
        question: questionData[questionId].mcq,
        userAnswer: userAnswers[questionId],
        correctAnswer: questionData[questionId].correct,
        isCorrect: isCorrect
      };
    });

    return {
      score: correct,
      total: total,
      percentage: ((correct / total) * 100).toFixed(2),
      details: details
    };
  };

  const handleRetakeQuiz = () => {
    setUserAnswers({});
    setCurrentQuestionIndex(0);
    setShowResults(false);
  };

  const renderProgressBar = () => {
    const totalQuestions = Object.keys(questionData).length;
    const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

    return (
      <div className="progress-bar-container w-full bg-gray-200 rounded-full h-2.5 mb-4">
        <div 
          className="progress-bar h-2.5 rounded-full bg-blue-600 transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    );
  };

  const renderCurrentQuestion = () => {
    const questionKeys = Object.keys(questionData);
    const currentKey = questionKeys[currentQuestionIndex];
    const currentQuestion = questionData[currentKey];
    const hasAnswered = userAnswers[currentKey] !== undefined;

    return (
      <div className="question-container">
        <div className="question-header mb-4">
          <p className="text-sm text-gray-600">
            Question {currentQuestionIndex + 1} of {questionKeys.length}
          </p>
          {renderProgressBar()}
        </div>
        
        <Question text={currentQuestion.mcq} />
        
        <div className="options-grid">
          {Object.keys(currentQuestion.options).map((optionKey) => (
            <Option
              key={optionKey}
              number={optionKey}
              text={currentQuestion.options[optionKey]}
              isSelected={userAnswers[currentKey] === optionKey}
              onClick={() => handleOptionSelect(currentKey, optionKey)}
              className={userAnswers[currentKey] === optionKey ? 'selected-option' : ''}
            />
          ))}
        </div>

        {hasAnswered && (
          <button 
            className="button-primary mt-4"
            onClick={handleNextQuestion}
          >
            {currentQuestionIndex === questionKeys.length - 1 ? 'Show Results' : 'Next Question'}
          </button>
        )}
      </div>
    );
  };

  return (
    <div className="quiz-container">
      <div className="top-bar">
        <div className="button-secondary">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
        </div>
        <div className="button-primary">
          time left: MM:SS
        </div>
      </div>

      {questionData ? (
        showResults ? (
          // Results View
          <div className="results-container">
            <h2 className="text-2xl font-bold mb-4">Quiz Results</h2>
            {(() => {
              const results = calculateResults();
              return (
                <div>
                  <div className="score-summary mb-6">
                    <p className="text-lg">Score: {results.score} / {results.total}</p>
                    <p className="text-lg">Percentage: {results.percentage}%</p>
                  </div>
                  <div className="detailed-results">
                    {Object.entries(results.details).map(([questionId, detail]) => (
                      <div key={questionId} className={`result-item p-4 mb-4 rounded ${detail.isCorrect ? 'bg-green-100' : 'bg-red-100'}`}>
                        <p className="font-medium">{detail.question}</p>
                        <p>Your answer: {questionData[questionId].options[detail.userAnswer]}</p>
                        <p>Correct answer: {questionData[questionId].options[detail.correctAnswer]}</p>
                      </div>
                    ))}
                  </div>
                  <button 
                    className="button-primary mt-4"
                    onClick={handleRetakeQuiz}
                  >
                    Retake Quiz
                  </button>
                </div>
              );
            })()}
          </div>
        ) : (
          // Single Question View
          renderCurrentQuestion()
        )
      ) : (
        <div className="no-data centered">
          <button className="button-primary" onClick={openModal}>
            Generate a Quiz?
          </button>
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <GenerateQuestions 
              onGenerate={handleQuestionGeneration} 
              onClose={closeModal}
            />
          </Modal>
        </div>
      )}
    </div>
  );
};

export default testGeneration;