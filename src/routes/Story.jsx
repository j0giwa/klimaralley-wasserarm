import React from "react";
import { useState } from "react";
import Speechbubble from "../lib/Speechbubble";

function Story() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

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

  return (
    <div className="relative bg-base-200 dark:bg-map-background dark:bg-no-repeat dark:bg-fixed dark:bg-center dark:bg-cover dark:h-screen">
      <img
        src="images/map.jpeg"
        alt="Karte"
        className="h-[calc(100dvh)] w-full opacity-50"
      ></img>
      {/* Foreground */}
      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
        {isVisible && (
          <button
            className="text-2xl bg-white p-3 rounded"
            onClick={toggleVisibility}
          >
            Willkommen zur Spielerklärung
          </button>
        )}
      </div>
      {!isVisible && (
        <div>
          {/* Bubble */}
          <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center">
            <div className="relative w-2/3 sm:w-1/3">
              <img
                src="icons/bubble.png"
                alt="Sprechblase"
                className="w-full h-full"
              ></img>
              <div className="absolute inset-0 pl-12 px-10 flex items-center justify-center text-lg text-black">
                {bubble.text}
              </div>
            </div>
          </div>
          {/* Person */}
          <div className="absolute top-1/2 bottom-0 left-0 right-1/3  flex items-center justify-center">
            <img
              src="icons/person.png"
              alt="Person"
              className="w-1/2 sm:w-1/3"
            ></img>
          </div>
          {/* Counter */}
          <div className="absolute top-3/4 bottom-0 left-0 right-1/3  flex items-center justify-center">
            <button className="bg-white p-3 rounded" onClick={minusCount}>
              Zurück
            </button>
          </div>
          <div className="absolute top-3/4 bottom-0 left-1/3 right-0  flex items-center justify-center">
            <button className="bg-white p-3 rounded" onClick={plusCount}>
              Weiter
            </button>
          </div>
          <p>{count}</p>
        </div>
      )}
    </div>
  );
}

export default Story;
