import React from "react";
import { useState, useEffect } from "react";

import map from "/images/map.jpeg";
import mapNone from "/images/mapNone.jpg";
import question from "/icons/Question.svg";
import shopIcon from "/icons/Shop.svg";
import helpIcon from "/icons/Inquiry.svg";
import go from "/icons/Go.svg";
import person from "/icons/Person.svg";
import iconSpeechBubble from "/icons/SpeechBubble.svg";
import back from "/icons/Back.svg";
import forward from "/icons/forward.svg";
import coinIcon from "/icons/Coin.svg";
import dropWater from "/icons/drop-water.svg"
import { Link } from "react-router-dom";
import { useShopContext } from "../lib/context";
import QuizCard from "../components/QuizCard";
import { SPEECHBUBBLE } from "../lib/StoryInformation";

/**
 * Index / landing page
 * Tells the story of the game. Creates a Quiz and distributes coins
 * @author Marlon
 * @version 0.5.0
 */
function Story() {
  useEffect(() => {
    document.title = "Wasserarmsatt";
  }, []);

  // users coins and water quantity
  const { coins, setCoins, ccoins, sendWaterData } = useShopContext();

  // everything for game explaination
  const [showGameExplanation, setShowGameExplanation] = useState(true);
  const [bubbleCount, setBubbleCount] = useState(0);
  const bubbleContent = SPEECHBUBBLE.find(
    (content) => content.index === bubbleCount
  );
  const lastBubble = SPEECHBUBBLE.length;

  const [gameStart, setGameStart] = useState(false);

  const [showHelp, setShowHelp] = useState(false);

  const [showQuiz, setShowQuiz] = useState(false);

  // Only shown after all questions are answered
  const [showShop, setShowShop] = useState(false);

  const [questionNumber, setQuestionNumber] = useState(0);

  /**
   * Function that receives a number, if this number matches one
   * of the questions, then set questionumber and activate showQuiz
   * @param {number} num
   */
  const toggleQuestion = (num) => {
    if (num <= 3) {
      setQuestionNumber(num);
      setShowQuiz(true);
    }
  };

  // Question statis: null = not an
  const [question2, setQuestion2] = useState(null);
  const [question1, setQuestion1] = useState(null);
  const [question0, setQuestion0] = useState(null);

  /**
   * Handles the state update for a given question based on the user's answer.
   * Updates the question state and coin balance based on whether the answer is correct.
   * If all questions are finished, it triggers the display of the shop.
   * @param {number} number - The index of the question being answered (0, 1, or 2).
   * @param {boolean} isCorrect - Indicates whether the user's answer is correct (true) or incorrect (false).
   *
   * @returns {void}
   */
  const handleAnswer = (number, isCorrect) => {
    const questionStates = [question0, question1, question2];
    const setQuestionFunctions = [setQuestion0, setQuestion1, setQuestion2];

    if (isCorrect) {
      if (!questionStates[number]) {
        setQuestionFunctions[number](true);
        sendWaterData(500);
      }
    } else if (!isCorrect && questionStates[number] === true) {
      // Question that is true cannot be set to false
    } else {
      setQuestionFunctions[number](false);
    }

    // all questions finished
    if (question2 != null && question1 != null && question0 != null) {
      setShowShop(true);
    }
  };

  return (
    <>
      {/*background map*/}
      <div
        className="relative bg-base-200 dark:bg-map-background 
      dark:bg-no-repeat dark:bg-fixed dark:bg-center dark:bg-cover dark:h-screen"
      >
        <img
          src={map}
          alt="Karte"
          className={`h-[calc(100dvh)] w-full "
          ${gameStart === false ? "opacity-50" : ""}`}
        ></img>

        {/* Game explaination starts*/}
        {showGameExplanation && (
          <div>
            <div
              className="absolute top-[10%] left-0 right-0 flex 
            justify-center align-items-center"
            >
              <h2 className="bg-white text-xl p-3">Spielerklärung</h2>
            </div>

            {/* Bubble */}
            <div
              className="absolute top-0 bottom-0 left-0 right-0 flex 
            items-center justify-center"
            >
              <div className="relative w-2/3 sm:w-1/3">
                <img
                  src={iconSpeechBubble}
                  alt="icon Sprechblase"
                  className="w-full"
                ></img>
                <div
                  className="absolute inset-0 pl-12 px-10 flex items-center 
                justify-center text-lg text-black font-semibold"
                >
                  {bubbleContent.text}
                </div>
              </div>
            </div>
            {/* Person */}
            <div
              className="absolute top-1/2 bottom-0 left-0 right-1/3  flex 
            items-center justify-center"
            >
              <img
                src={person}
                alt="icon Person"
                className="w-1/2 sm:w-1/3"
              ></img>
            </div>
            {/* Counter for speechbubble*/}
            <div
              className="absolute  bottom-[40px] left-1/3 right-1/3 flex 
            justify-center items-contend"
            >
              <button
                className="p-3"
                onClick={() =>
                  setBubbleCount((count) => (count > 0 ? count - 1 : count))
                }
              >
                <img src={back} alt="icon zurück" />
              </button>

              {/* if last bubble then change to start button */}
              {bubbleCount + 1 === lastBubble ? (
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
                <button
                  className="p-3"
                  onClick={() => setBubbleCount(bubbleCount + 1)}
                >
                  <img src={forward} alt="icon forwärts" />
                </button>
              )}
            </div>
          </div>
        )}

        {/* Game is explained and start button pressed => Game Starts*/}
        {gameStart && (
          <div>
           {/*  {/* Money *
            <div
              className="absolute flex justify-center top-[2%] inset-x-[40%] 
            p-1 bg-base-200 border-2 border-base-300 rounded-full"
            >
              <p>{coins}</p>
              <img className="h-[23px]" src={coinIcon} alt="Coins"></img>
            </div> */}

                {/* Money */}
            <div className="absolute flex gap-1 justify-center top-[2%] inset-x-[30%] w-80">
              <div className="flex gap-2 w-fit p-2 bg-base-200 border-2 border-base-300 rounded-full">
                {/*make dynamic coin counter*/}
                <p>{coins} L</p>
                <img className="h-6" src={dropWater} alt="Coins"></img>
              </div>

              {/* Water */}
              <div className="flex gap-2 w-fit p-2 bg-base-200 border-2 border-base-300 rounded-full">
                {/*make dynamic water amount counter*/}
                <p>{ccoins}</p>
                <img className="h-[23px]" src={coinIcon} alt="Coins"></img>
              </div>
            </div>

            <button
              className="help-icon absolute top-[20%]  left-[2%] md:right-[90%]"
              onClick={() => setShowHelp(!showHelp)}
            >
              <img src={helpIcon} alt="Frage" className="w-full"></img>
            </button>
            {showHelp && (
              <p className="z-50 absolute top-[40%] inset-x-[10%] bg-white p-10 rounded-full">
                Durch antippen der Fragezeichen started das Quiz. Für jede
                richtige Antwort erhälst du 500 Coins. <br />
                Nachdem du alle 3 Fragen beantwortet hast, erscheint ein Shop,
                über den du einkaufen kannst.
              </p>
            )}

            {/* question 3 */}
            <button
              className={`absolute top-[25%] right-[28%] md:top-[22%] 
                md:left-[60%] md:right-[30%] ${
                  question2 === true
                    ? "bg-green-500"
                    : question2 === false
                    ? "bg-red-500"
                    : ""
                }`}
            >
              <img
                src={question}
                alt="Frage"
                className="w-full"
                onClick={() => toggleQuestion(2)}
              ></img>
            </button>
            {/* question 2 */}
            <button
              className={`absolute top-[45%] left-[23%] md:top-[43%] 
                md:left-[25%] md:right-[65%] ${
                  question1 === true
                    ? "bg-green-500"
                    : question1 === false
                    ? "bg-red-500"
                    : ""
                }`}
            >
              <img
                src={question}
                alt="Frage"
                className="w-full"
                onClick={() => toggleQuestion(1)}
              ></img>
            </button>
            {/* question 1 */}
            <button
              className={`absolute top-[55%] right-[28%] md:top-[52%] 
                md:left-[60%] md:right-[30%] ${
                  question0 === true
                    ? "bg-green-500"
                    : question0 === false
                    ? "bg-red-500"
                    : ""
                }`}
            >
              <img
                src={question}
                alt="Frage"
                className="w-full"
                onClick={() => toggleQuestion(0)}
              ></img>
            </button>

            <button className="absolute top-[83%] right-[34%] md:left-[55%] md:right-[35%]">
              <img src={go} alt="Frage" className="w-full"></img>
            </button>

            {/* Create quiz card */}
            {showQuiz && (
              <QuizCard
                questionNumber={questionNumber}
                handleAnswer={handleAnswer}
                onClose={() => setShowQuiz(false)}
              />
            )}

            {/* Quiz finished => Show shop */}
            {showShop && (
              <Link
                className="z-[0] absolute top-[10%] left-[35%] right-[40%] 
            md:top-[5%] sm:left-[40%] md:right-[46%]"
                to="/play/wasserarm/shop"
              >
                <img
                  src={shopIcon}
                  alt="image of shop icon"
                  className="w-full"
                />
              </Link>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default Story;
