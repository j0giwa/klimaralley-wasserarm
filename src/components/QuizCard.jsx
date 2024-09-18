import React, { useState } from "react";
import { useEffect } from "react";
import back from "/icons/Back.svg";
import checkmark from "/icons/Checkmark.svg";
import { QUIZ } from "../lib/StoryInformation";

/**
 * Renders a question card in the story game and provides feedback based on the user's answer.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {number} props.questionNumber - The index or number of the question being displayed.
 * @param {Function} props.handleAnswer - Function to handle the user's answer and update the state.
 * @param {Function} props.onClose - Function to be called when the quiz card is closed.
 *
 * @returns {JSX.Element} The rendered QuizCard component.
 *
 * @author Marlon Schrader
 * @version 0.5.0
 */
function QuizCard({ questionNumber, handleAnswer, onClose }) {
  const currentQuestion = QUIZ[questionNumber];

  const [selectedOption, setSelectedOption] = useState(null);

  const settingSelectedOption = (option) => {
    if (showFeedback === false) {
      setSelectedOption(option);
    }
  };

  const [showFeedback, setShowFeedback] = useState(false);

  // Calls handleAnswer based on right/ wrong answer, which adds color and coins
  useEffect(() => {
    if (showFeedback) {
      if (selectedOption === currentQuestion.correctAnswer) {
        handleAnswer(questionNumber, true); // Call ifCorrect if the answer is correct
      } else {
        handleAnswer(questionNumber, false); // Call ifWrong if the answer is incorrect
      }
    }
  }, [showFeedback, selectedOption, currentQuestion, handleAnswer]);

  return (
    <div
      className="quiz-card z-[50] flex flex-col absolute inset-[5%] bg-white 
    p-3 rounded-lg shadow-lg max-w-md mx-auto"
    >
      {/* Image Section */}
      {currentQuestion.img && (
        <img
          src={currentQuestion.img}
          alt="Quiz Visual"
          className="w-full  h-[50%] object-cover rounded-md mb-4"
        />
      )}
      {/* Question */}
      <h2 className="text-xl font-bold mb-4">{currentQuestion.question}</h2>
      {/* Options */}
      <div className="space-y-2">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            className={`block w-full text-left px-4 py-2 rounded-md border 
            ${
              selectedOption === option
                ? "bg-blue-500 text-white"
                : "bg-gray-100"
            } 
            hover:bg-gray-300`}
            onClick={() => settingSelectedOption(option)}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Feedback */}
      {showFeedback && (
        <div className="mt-4">
          {selectedOption === currentQuestion.correctAnswer ? (
            // add coins for right answere
            <p className="text-green-500">Richtig!</p>
          ) : (
            <p className="text-red-500">
              Falsch! Die richtige Antwort ist: {currentQuestion.correctAnswer}
            </p>
          )}
        </div>
      )}

      {/* Back and verify answere button */}
      <div className="flex justify-around content-end flex-1">
        <button className="w-[15%]" onClick={() => onClose()}>
          <img src={back} alt="icon zurück" className="w-full" />
        </button>
        <button className="w-[15%]" onClick={() => setShowFeedback(true)}>
          <img src={checkmark} alt="icon checkmark" className="w-full" />
        </button>
      </div>
    </div>
  );
}

export default QuizCard;
