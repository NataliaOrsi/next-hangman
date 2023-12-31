"use client";

import React, { Dispatch, FC, SetStateAction, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

export interface CongratulationsProps {
  secretWord: string;
  restart: Dispatch<SetStateAction<void>>;
}

export const Congratulations = ({ secretWord, restart }: CongratulationsProps) => {
  
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
      <div className="my-36 md:my-44">
        <div className="flex flex-col justify-center items-center gap-y-6">
          <div className="animated-text text-3xl text-center md:text-8xl">
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
        <div className="flex flex-col items-center gap-y-12">
          <div className="border-third-color border-2 bg-third-color text-white rounded-md flex text-xl md:text-3xl">
            You won! The word was {secretWord}.
          </div>
          <div className="border-primary-color border-2 bg-primary-color text-white rounded-md flex">
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

export default Congratulations;
