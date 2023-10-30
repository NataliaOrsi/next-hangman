import React, { FormEvent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useWordContext } from "../context/word-context";

export interface FormProps {
  lettersGuessed: string[];
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  guess: string;
  setGuess: (e: any) => void;
  greeting: string;
  alphabet: string[];
  numberOfGuesses: number;
  secretWordSplit: string[];
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

      <p className="text-2xl text-third-color text-center">
        Available letters: {alphabet.join(" ").toUpperCase()}
      </p>
      <div className="flex justify-center self-center mt-40">
        {secretWordSplit.map((letter): JSX.Element => {
          return lettersGuessed.includes(letter) ? (
            <div className="flex space-x-4">
              <div className="space-x-4">{""}</div>
              <div className="box-border h-20 w-20 p-4 border-2 border-white bg-white">
                <p className="text-4xl text-primary-color text-center">
                  {letter.toUpperCase()}
                </p>
              </div>
            </div>
          ) : (
            <div className="flex space-x-4">
              <div className="space-x-4">{""}</div>
              <div className="box-border h-20 w-20 p-4 border-2 border-white bg-white space-x-4">
                <p className="text-4xl text-primary-color text-center"></p>
              </div>
            </div>
          );
        })}
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
            <FontAwesomeIcon icon={faCirclePlay} style={{ color: "#53cdd8" }} />
          </button>
        </div>
      </div>
      <p className="text-third-color font-bold text-3xl text-center m-8">
        {greeting}
      </p>
    </form>
  );
};

export default Form;