import React, { FormEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export interface FormProps {
  lettersGuessed: string[];
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  guess: string;
  setGuess: (e: any) => void;
  greeting: string;
  alphabet: string[];
  numberOfGuesses: number;
  secretWordSplit: string[];
  setGreeting: (e: any) => void;
}

export const Form = ({
  lettersGuessed,
  handleSubmit,
  guess,
  setGuess,
  greeting,
  alphabet,
  numberOfGuesses,
  secretWordSplit,
  setGreeting,
}: FormProps): JSX.Element => {
  return (
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

      <div className="text-lg text-third-color text-center md:text-2xl">
        <div>Available letters: </div>
        <div>{alphabet.join(" ").toUpperCase()}</div>
      </div>
      <div className="flex justify-center self-center mt-20 md:mt-35">
        {secretWordSplit.map((letter): JSX.Element => {
          return lettersGuessed.includes(letter) ? (
            <div className="flex space-x-4">
              <div className="space-x-4">{""}</div>
              <div className="box-border h-8 w-8 border-2 border-white bg-white md:h-20 md:w-20 md:p-4">
                <p className="text-xl text-primary-color text-center md:text-4xl">
                  {letter.toUpperCase()}
                </p>
              </div>
            </div>
          ) : (
            <div className="flex space-x-4">
              <div className="space-x-4">{""}</div>
              <div className="box-border h-8 w-8 border-2 border-white bg-white space-x-4 md:h-20 md:w-20 md:p-4">
                <p className="text-xl text-primary-color text-center md:text-4xl"></p>
              </div>
            </div>
          );
        })}
      </div>
      <p className="text-primary-color text-xl flex justify-center self-center mt-20 md:text-2xl">
        You have {numberOfGuesses} guesses left
      </p>
      <div className="flex flex-col justify-center mt-4">
        <label className="text-secondary-color font-bold text-xl flex justify-center">
          Guess a letter:{" "}
        </label>
        <div className="flex justify-center">
          <input
            className="p-2 rounded-md text-center w-12 md:w-24"
            type="text"
            value={guess}
            onChange={(e) => {
              if (e.target.value.length === 1) {
                const result = e.target.value.replace(/[^a-z]/gi, "");
                setGuess(result);
              } else {
                setGuess("");
                setGreeting("Invalid input. Try again.");
              }
            }}
          />
          <button
            type="submit"
            className="text-xl"
          >
            <FontAwesomeIcon icon={faCirclePlay} style={{ color: "#53cdd8" }} className="pl-2"/>
          </button>
        </div>
      </div>
      <p className="text-third-color font-bold text-3xl text-center m-16">
        {greeting}
      </p>
    </form>
  );
};

export default Form;