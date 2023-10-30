"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useWordContext } from "../context/word-context";

export interface CongratulationsProps {
  secretWord: string;
  restart: Dispatch<SetStateAction<void>>;
}

export default function congratulations({ secretWord, restart }: CongratulationsProps) {
  // const { secretWord } = useWordContext();
  return (
    <div>
      <Link href="/">
        <FontAwesomeIcon
          icon={faCircleXmark}
          beat
          size="lg"
          style={{ color: "#53cdd8" }}
          className="mt-2 ml-2"
        />
      </Link>
      <div className="my-44">
        <div className="justify-center items-center">
          <div className="animated-text text-8xl text-center">
            <span className="text-primary-color">C</span>
            <span className="text-secondary-color">O</span>
            <span className="text-third-color">N</span>
            <span className="text-primary-color">G</span>
            <span className="text-secondary-color">R</span>
            <span className="text-third-color">A</span>
            <span className="text-primary-color">T</span>
            <span className="text-secondary-color">U</span>
            <span className="text-third-color">L</span>
            <span className="text-primary-color">A</span>
            <span className="text-secondary-color">T</span>
            <span className="text-third-color">I</span>
            <span className="text-primary-color">O</span>
            <span className="text-secondary-color">N</span>
            <span className="text-third-color">S</span>
            <span className="text-primary-color">!</span>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="border-third-color border-2 bg-third-color text-white rounded-md flex absolute bottom-[43%] text-3xl">
            You won! The word was {secretWord}.
          </div>
          <div className="border-primary-color border-2 bg-primary-color text-white rounded-md flex absolute bottom-[30%]">
            <Link href="/game">
              <button
                className="p-4"
                onClick={() => {
                  restart();
                }}
              >
                Play Again
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
