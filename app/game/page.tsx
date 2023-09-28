"use client";

import React, { FormEvent, JSXElementConstructor, use, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function game() {
  const [guess, setGuess] = useState("");
  const [lettersGuessed, setLettersGuessed] = useState<string[]>([]);
  const [alphabet, setAlphabet] = useState(
    "abcdefghijklmnopqrstuvwxyz".split("")
  );
  const [numberOfGuesses, setNumbersOfGuesses] = useState(8);
     
  const secretWord = "apple".split("");


  // const isWordGuessed = (secretWord: string[], lettersGuessed: string[]) => {
  //   const word = [];

  //   for (const letter in secretWord) {
  //     if (letter in lettersGuessed) {
  //       word.push(letter);
  //     }

  //     return word == secretWord;
  //   }
  // };

  // const getGuessedWord = (secretWord: string[], lettersGuessed: string[]) => {
  //   const symbol = "_ ";
  //   const word_to_fill = [];
  //   for (const letter in secretWord) {
  //     if (letter in lettersGuessed) {
  //       word_to_fill.push(letter);
  //     } else {
  //       word_to_fill.push(letter);
  //     }
  //     return word_to_fill;
  //   }
  // };



  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    setLettersGuessed((e) => [...e, guess.toLowerCase()]);
    setAlphabet(alphabet.filter((i) => i != guess.toLowerCase()));
     !isLetterIn ? setNumbersOfGuesses(numberOfGuesses - 1) : numberOfGuesses;
    setGuess("");
  }


  const isLetterIn = secretWord.indexOf(guess.toLowerCase()) > -1
  const isLetterAvailable = !(lettersGuessed.indexOf(guess.toLowerCase()) > -1);

  const Greeting =
    guess === ""
      ? ""
      : isLetterAvailable
      ? isLetterIn
        ? "Good guess!"
        : "Oops! That letter is not in my word!"
      : "Oops! You've already guessed that letter";

  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Link href="/">
          <FontAwesomeIcon
            icon={faCircleXmark}
            beat
            size="lg"
            style={{ color: "#53cdd8" }}
            className="mt-2 ml-2"
          />
        </Link>

        <p className="text-2xl text-third-color text-center">
          Available letters: {alphabet.join(" ").toUpperCase()}
        </p>
        <div className="flex justify-center self-center mt-40">
          <div className="box-border h-20 w-20 p-4 border-2 border-white bg-white">
            <p className="text-4xl text-primary-color text-center">A</p>
          </div>
        </div>
        <p className="text-primary-color text-2xl flex justify-center self-center mt-20">
          You have {numberOfGuesses} guesses left
        </p>
        <div className="flex flex-col justify-center mt-4">
          <label className="text-secondary-color font-bold text-xl relative left-[44%]">
            Guess a letter:{" "}
          </label>
          <div>
            <input
              className="p-2 rounded-md relative left-[40%] text-center"
              type="text"
              value={guess}
              onChange={(e) => {
                setGuess(e.currentTarget.value);
              }}
            />
            <button
              type="submit"
              className="text-xl relative left-[42%] bottom-[50%]"
            >
              <FontAwesomeIcon
                icon={faCirclePlay}
                style={{ color: "#53cdd8" }}
              />
            </button>
          </div>
        </div>
        <p className="text-third-color font-bold text-3xl text-center m-8">
          {Greeting}
        </p>
      </form>
    </div>
  );
}
