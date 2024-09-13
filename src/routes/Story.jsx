import React from "react";
import { useState, useEffect } from "react";
import QuizCard from "../components/QuizCard";
import Speechbubble from "../lib/Speechbubble";
import map from "/images/map.jpeg";
import mapNone from "/images/mapNone.jpg";
import question from "/icons/Question.svg";
import shopIcon from "/icons/Shop.svg";
import help from "/icons/Inquiry.svg";
import go from "/icons/Go.svg";
import person from "/icons/Person.svg";
import iconSpeechBubble from "/icons/SpeechBubble.svg";
import back from "/icons/Back.svg";
import forward from "/icons/Forward.svg";

/**
 * Index / landing page
 *
 * tells the story of the game
 */
function Story() {
  useEffect(() => {
    document.title = "Wasserarmsatt";
  }, []);

  const [showGameExplanation, setShowGameExplanation] = useState(true);

  const [count, setCount] = useState(0);

  const minusCount = () => {
    if (count < 1) {
    } else {
      setCount(count - 1);
    }
  };

  const plusCount = () => {
    setCount(count + 1);
  };

  const bubble = Speechbubble.find((content) => content.index === count);

  const [gameStart, setGameStart] = useState(false);

  const [showQuiz, setShowQuiz] = useState(false);

  function toggleSetShowQuiz() {
    setShowQuiz(true);
  }

  let number;

  return (
    <>
      {/*background map*/}
      <div className="relative bg-base-200 dark:bg-map-background dark:bg-no-repeat dark:bg-fixed dark:bg-center dark:bg-cover dark:h-screen">
        {!gameStart ? (
          <img
            src={map}
            alt="Karte"
            className="h-[calc(100dvh)] w-full opacity-50"
          ></img>
        ) : (
          <img src={map} alt="Karte" className="h-[calc(100dvh)] w-full"></img>
        )}

        {/* Game explaination starts*/}
        {showGameExplanation && (
          <div>
            <div className="absolute top-[10%] left-0 right-0 flex justify-center align-items-center">
              <h2 className="bg-white text-xl p-3">Spielerklärung</h2>
            </div>

            {/* Bubble */}
            <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center">
              <div className="relative w-2/3 sm:w-1/3">
                <img
                  src={iconSpeechBubble}
                  alt="icon Sprechblase"
                  className="w-full"
                ></img>
                <div className="absolute inset-0 pl-12 px-10 flex items-center justify-center text-lg text-black">
                  {bubble.text}
                </div>
              </div>
            </div>
            {/* Person */}
            <div className="absolute top-1/2 bottom-0 left-0 right-1/3  flex items-center justify-center">
              <img
                src={person}
                alt="icon Person"
                className="w-1/2 sm:w-1/3"
              ></img>
            </div>
            {/* Counter for speechbubble*/}
            <div className="absolute  bottom-[40px] left-1/3 right-1/3 flex justify-center items-contend ">
              <button className="p-3" onClick={minusCount}>
                <img src={back} alt="icon zurück" />
              </button>
              {count === 10 ? (
                <button
                  onClick={() => {
                    setShowGameExplanation(false);
                    setGameStart(true);
                  }}
                  className="btn-ghost text-2xl text-black font-bold rounded"
                >
                  Start
                </button>
              ) : (
                <button className="p-3" onClick={plusCount}>
                  <img src={forward} alt="icon forwärts" />
                </button>
              )}
            </div>
          </div>
        )}

        {/* Game is explained when player clicked through
      the explaination (count >= 10) => Game starts */}
        {gameStart && (
          // pictures with 10% of full width in display >= md
          <div>
            <button
              className="shop-icon absolute top-[10%] left-[35%] right-[40%] 
            md:top-[5%] sm:left-[40%] md:right-[46%]"
            >
              <img src={shopIcon} alt="Shop" className="w-full"></img>
            </button>
            <button className="help-icon absolute top-[20%]  left-[2%] md:right-[90%]">
              <img src={help} alt="Frage" className="w-full"></img>
            </button>
            {/* question 3 */}
            <button className="question-3 absolute top-[25%] right-[28%] md:top-[22%] md:left-[60%] md:right-[30%]">
              <img
                src={question}
                alt="Frage"
                className="w-full"
                onClick={toggleSetShowQuiz}
                number={3}
              ></img>
            </button>
            {/* question 2 */}
            <button className="question-2 absolute top-[45%] left-[23%] md:top-[43%] md:left-[25%] md:right-[65%]">
              <img
                src={question}
                alt="Frage"
                className="w-full"
                onClick={toggleSetShowQuiz}
                number={2}
              ></img>
            </button>
            {/* question 1 */}
            <button className="question-1 absolute top-[55%] right-[28%] md:top-[52%] md:left-[60%] md:right-[30%]">
              <img
                src={question}
                alt="Frage"
                className="w-full"
                onClick={toggleSetShowQuiz}
                number={1}
              ></img>
            </button>

            <button className="go-icon absolute top-[83%] right-[34%] md:left-[55%] md:right-[35%]">
              <img src={go} alt="Frage" className="w-full"></img>
            </button>

            {showQuiz && <QuizCard questionNumber={1} />}
          </div>
        )}
      </div>
    </>
  );
}

export default Story;
