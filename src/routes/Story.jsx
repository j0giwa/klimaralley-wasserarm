import React from "react";
import { useState } from "react";
import Speechbubble from "../lib/Speechbubble";
import map from "/images/map.jpeg";

function Story() {
  const [welcome, setWelcome] = useState(false);

  const [count, setCount] = useState(0);

  const minusCount = () => {
    if (count < 1) {
    } else {
      setCount(count - 1);
    }
  };

  const plusCount = () => {
    if (count >= 10) {
      setGameStart(true);
    } else {
      setCount(count + 1);
    }
  };
  
  let forward
if (count===7) {
  forward = <button className="btn-ghost text-2xl text-black font-bold rounded">
    {/*Link to the map page*/}
    <a href="">Start</a></button>
} else {
  forward = <button className="btn-ghost rounded" onClick={plusCount}>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="base-content" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20 16.6668V13.3335L26.6667 20.0002L20 26.6668V23.3335H13.3334V16.6668H20ZM24.3084 20.0002L21.6667 17.3585V18.3335H15V21.6668H21.6667V22.6418L24.3084 20.0002Z" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20 36.6668C29.2047 36.6668 36.6667 29.2048 36.6667 20.0002C36.6667 10.7954 29.2047 3.3335 20 3.3335C10.7953 3.3335 3.33337 10.7954 3.33337 20.0002C3.33337 29.2048 10.7953 36.6668 20 36.6668ZM20 33.3335C27.3639 33.3335 33.3334 27.364 33.3334 20.0002C33.3334 12.6364 27.3639 6.66683 20 6.66683C12.6362 6.66683 6.66671 12.6364 6.66671 20.0002C6.66671 27.364 12.6362 33.3335 20 33.3335Z"/>
              </svg>
            </button>
}
  const bubble = Speechbubble.find((content) => content.index === count);

  const [gameStart, setGameStart] = useState(true);

  return (
    // background map
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
      {/* Foreground */}
      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
        {welcome && (
          <button
            className="text-2xl bg-white p-3 rounded"
            onClick={() => setWelcome(false)}
          >
            Willkommen zur Spielerklärung
          </button>
        )}
      </div>
      {/* Game explaination starts*/}
      {!welcome && !gameStart && (
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
          {/* Counter for speechbubble*/}
          <div className="absolute top-3/4 bottom-0 left-0 right-1/3  flex items-center justify-center">
            <button className="btn-ghost hover:rounded" onClick={minusCount}>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="base-content" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20 23.3335V26.6668L13.3334 20.0002L20 13.3335V16.6668H26.6667V23.3335H20ZM15.6917 20.0002L18.3334 22.6418V21.6668H25V18.3335H18.3334V17.3585L15.6917 20.0002Z"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20 36.6668C29.2047 36.6668 36.6667 29.2048 36.6667 20.0002C36.6667 10.7954 29.2047 3.3335 20 3.3335C10.7953 3.3335 3.33337 10.7954 3.33337 20.0002C3.33337 29.2048 10.7953 36.6668 20 36.6668ZM20 33.3335C27.3639 33.3335 33.3334 27.364 33.3334 20.0002C33.3334 12.6364 27.3639 6.66683 20 6.66683C12.6362 6.66683 6.66671 12.6364 6.66671 20.0002C6.66671 27.364 12.6362 33.3335 20 33.3335Z" />
              </svg>
            </button>
          </div>
          <div className="absolute top-3/4 bottom-0 left-1/3 right-0  flex items-center justify-center w-32">
            {forward}
          </div>
        </div>
      )}
      {/* Game is explained when player clicked through 
      the explaination (count >= 10) => Game starts */}
      {gameStart && (
        <div className="absolute top-0 bottom-0 left-0 right-0 grid grid-cols-5">
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
          <div>Item 4</div>
          <div>Item 5</div>
          <div></div>
          <div>Item 7</div>
          <div>Item 8</div>
          <div>Item 9</div>
          <div>Item 10</div>
          <div>Item 11</div>
          <div>Item 12</div>
          <div>Item 13</div>
          <div>Item 14</div>
          <div>Item 15</div>
          <div>Item 16</div>
          <div>Item 17</div>
          <div>Item 18</div>
          <div>Item 19</div>
          <div>Item 20</div>
          <div>Item 21</div>
          <div>Item 22</div>
          <div>Item 23</div>
          <div>Item 24</div>
          <div>Item 25</div>
        </div>
      )}
    </div>
  );
}

export default Story;
