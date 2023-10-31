"use client";

import React, { FormEvent, useEffect, useState } from "react";
import { useWordContext } from "../context/word-context";
import Congratulations  from "../congratulations/page";
import Loser from "../loser/page";
import { Form } from "../form/page";
import { generate } from "random-words";

export const Game = (): JSX.Element => {
  const { secretWord, setSecretWord } = useWordContext();
  

  const [guess, setGuess] = useState("");
  const [lettersGuessed, setLettersGuessed] = useState<string[]>([]);
  const [alphabet, setAlphabet] = useState(
    "abcdefghijklmnopqrstuvwxyz".split("")
  );

  const [numberOfGuesses, setNumbersOfGuesses] = useState(8);

  const secretWordSplit = secretWord.split("");

  const [greeting, setGreeting] = useState("");


  const isLetterIn = secretWordSplit.includes(guess.toLowerCase());
  const isLetterAvailable = !lettersGuessed.includes(guess.toLowerCase());
  console.log(secretWord);

  function handleSubmit (event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    setLettersGuessed((e) => [...e, guess.toLowerCase()]);
    setAlphabet(alphabet.filter((i) => i != guess.toLowerCase()));
    !isLetterIn && isLetterAvailable
      ? setNumbersOfGuesses(numberOfGuesses - 1)
      : numberOfGuesses;
    setGreeting(
      guess === ""
        ? ""
        : isLetterAvailable
        ? isLetterIn
          ? "Good guess!"
          : "Oops! That letter is not in my word!"
        : "Oops! You've already guessed that letter"
    );
    setGuess("");
    
  }

  function isWordGuessed(secretWordSplit: string[], lettersGuessed: string[]) {
    let word = "";

    for (const letter in secretWordSplit) {
      if (lettersGuessed.includes(secretWordSplit[letter])) {
        word += secretWordSplit[letter];
      }
    }
    return word === secretWord;
  }

  function restart() {
    const word = generate().toString();
    setSecretWord(word);
    setLettersGuessed([]);
    setNumbersOfGuesses(8);
  }

  console.log(secretWord);

  return (
    <div>
      {isWordGuessed(secretWordSplit, lettersGuessed) && secretWord !== '' ? (
        <Congratulations secretWord={secretWord} restart={restart} />
      ) : numberOfGuesses > 0 ? (
        <Form
          lettersGuessed={lettersGuessed}
          handleSubmit={handleSubmit}
          guess={guess}
          setGuess={setGuess}
          greeting={greeting}
          setGreeting={setGreeting}
          alphabet={alphabet}
          numberOfGuesses={numberOfGuesses}
          secretWordSplit={secretWordSplit}
        />
      )  : (
        <Loser secretWord={secretWord} restart={restart} />
      )}
    </div>
  );
};

export default Game;