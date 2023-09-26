import React from 'react'

export default function game() {

    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("").join(' ').toUpperCase();
    const numberOfGuesses = 8;


  return (
    <div>
      <p className="text-2xl text-third-color text-center">
        Available letters: {alphabet}
      </p>
      <div className="flex justify-center self-center mt-40">
        <div className="box-border h-20 w-20 p-4 border-2 border-white bg-white">
          <p className="text-4xl text-primary-color text-center">A</p>
        </div>
      </div>
      <p className="text-primary-color text-2xl flex justify-center self-center mt-20">
        You have {numberOfGuesses} guesses left
      </p>
      <div className="flex flex-col justify-center mt-6">
        <label className="text-secondary-color font-bold text-xl relative left-[45%]">
          Guess a letter:{" "}
        </label>
        <div>
          <input
            className="p-2 rounded-md relative left-[41.3%] text-center"
            type="text"
          ></input>
        </div>
      </div>
      <p
        className="text-third-color font-bold text-3xl text-center m-10"
      >
        Good guess!
      </p>
    </div>
  );
}
