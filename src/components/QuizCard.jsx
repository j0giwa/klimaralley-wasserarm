import React, { useState } from "react";
import LangenbrückerTor from "/images/LangenbrückerTor.jpg";
import Leopoldstraße from "/images/Leopoldstraße.jpg";
import Marktplatz from "/images/Marktplatz.jpg";
import back from "/icons/Back.svg";
import checkmark from "/icons/Checkmark.svg";
import { useEffect } from "react";

// Quiz data
const quiz = [
  {
    index: 1,
    img: LangenbrückerTor, // Add image source when available
    question: "Wo befindet sich diese Trinkwasserstelle?",
    options: ["Langenbrücker Tor", "Regenstorplatz", "Ostertor"],
    correctAnswer: "Langenbrücker Tor",
  },
  {
    index: 2,
    img: Marktplatz, // Add image source when available
    question: "Wo befindet sich diese Trinkwasserstelle?",
    options: ["Waisenhausplatz", "Treffpunkt", "Marktplatz"],
    correctAnswer: "Marktplatz",
  },
  {
    index: 3,
    img: Leopoldstraße, // Add image source when available
    question: "Wo befindet sich diese Station?",
    options: [
      "Ostertor-Wall an der Leopoldapotheke",
      "Slaventor-Wall an der Teichanlage",
      "Johannistorwall am Spielplatz",
    ],
    correctAnswer: "Ostertor-Wall an der Leopoldapotheke",
  },
];

function QuizCard({ questionNumber, handleAnswere, onClose }) {
  const currentQuestion = quiz[questionNumber];

  const [selectedOption, setSelectedOption] = useState(null);

  function settingSelectedOption(option) {
    if (feedback === false) {
      setSelectedOption(option);
    }
  }

  const [feedback, setFeedback] = useState(false);

  useEffect(() => {
    if (feedback) {
      if (selectedOption === currentQuestion.correctAnswer) {
        handleAnswere(questionNumber, true); // Call ifCorrect if the answer is correct
      } else {
        handleAnswere(questionNumber, false); // Call ifWrong if the answer is incorrect
      }
    }
  }, [feedback, selectedOption, currentQuestion, handleAnswere]);

  return (
    <div className="quiz-card flex flex-col absolute inset-[5%] bg-white p-3 rounded-lg shadow-lg max-w-md mx-auto">
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
      {feedback && (
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
        <button className="w-[15%]" onClick={() => setFeedback(true)}>
          <img src={checkmark} alt="icon checkmark" className="w-full" />
        </button>
      </div>
    </div>
  );
}

export default QuizCard;
