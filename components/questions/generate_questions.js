import React, { useState } from 'react';
import './generate_questions.module.css';

function GenerateQuestions({ onGenerate, onClose }) {
    // Dummy data for testing
    // const dummyData = {
    //     "1": {
    //         "correct": "d",
    //         "difficulty": "Easy",
    //         "mcq": "Which of the following is NOT a macromolecule in biochemistry?",
    //         "options": {
    //             "a": "Protein",
    //             "b": "Carbohydrate",
    //             "c": "Lipid",
    //             "d": "Vitamin"
    //         }
    //     },
    //     "2": {
    //         "correct": "b",
    //         "difficulty": "Medium",
    //         "mcq": "What is the primary function of enzymes in biochemical reactions?",
    //         "options": {
    //             "a": "Provide energy",
    //             "b": "Speed up chemical reactions",
    //             "c": "Store genetic information",
    //             "d": "Maintain cell structure"
    //         }
    //     },
    //     "3": {
    //         "correct": "d",
    //         "difficulty": "Hard",
    //         "mcq": "Which of the following is a characteristic of a saturated fatty acid?",
    //         "options": {
    //             "a": "Contains double bonds",
    //             "b": "Liquid at room temperature",
    //             "c": "Derived from plants",
    //             "d": "Solid at room temperature"
    //         }
    //     }
    // };

    const [formData, setFormData] = useState({
        subject: '',
        topic: '',
        number_of_questions: '',
        difficulty: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form submission
        generateAndSendData();
    };

    const generateAndSendData = async () => {
        try {
            // For now, using dummy data
            // const generatedData = dummyData;
            
            // Log the form data being sent
            console.log('Form Data:', formData);
            
            
            // If you want to use the API later, uncomment this:
            const response = await fetch('https://fyp-z21g.onrender.com/generate-quiz', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const result = await response.json();
            const generatedData = result; 
            // Send the generated data to parent component
            onGenerate(generatedData);
            
            // Close the modal/form
            onClose();
        
        } catch (error) {
            console.error('Error generating questions:', error);
            // You might want to add error handling here
        }
    };

    return (
        <div className="quiz-form__container">
            <form className="quiz-form" onSubmit={handleSubmit}>
                <div className="quiz-form__row">
                    <label className="quiz-form__label">
                        Subject
                        <input
                            type="text"
                            name="subject"
                            className="quiz-form__input"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label className="quiz-form__label">
                        Topic
                        <input
                            type="text"
                            name="topic"
                            className="quiz-form__input"
                            value={formData.topic}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div className="quiz-form__row">
                    <label className="quiz-form__label">
                        Number Of Questions
                        <input
                            type="number"
                            name="number_of_questions"
                            className="quiz-form__input"
                            value={formData.number_of_questions}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label className="quiz-form__label">
                        Difficulty
                        <input
                            type="text"
                            name="difficulty"
                            className="quiz-form__input"
                            value={formData.difficulty}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <button type="submit" className="quiz-form__button">
                    Generate
                </button>
            </form>
        </div>
    );
}

export default GenerateQuestions;