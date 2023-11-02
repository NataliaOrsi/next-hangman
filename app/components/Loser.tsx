"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

export interface LoserProps {
  secretWord: string;
  restart: Dispatch<SetStateAction<void>>;
}

export const Loser = ({ secretWord, restart }: LoserProps) : JSX.Element => {
  
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
        <div className="flex flex-col justify-center items-center gap-y-6">
          <div className="animated-text text-5xl text-center md:text-8xl">
            <span className="text-primary-color">G</span>
            <span className="text-secondary-color">A</span>
            <span className="text-third-color">M</span>
            <span className="text-primary-color">E</span>{" "}
            <span className="text-secondary-color">O</span>
            <span className="text-third-color">V</span>
            <span className="text-primary-color">E</span>
            <span className="text-secondary-color">R</span>
          </div>
          <div className="flex flex-col items-center gap-y-10">
            <div className="border-third-color border-2 bg-third-color text-white rounded-md flex text-2xl">
              The word was {secretWord}.
            </div>
            <div className="border-primary-color border-2 bg-primary-color text-white rounded-md flex">
              <Link href="/game">
                <button className="p-4" onClick={() => restart()}>
                  Play Again
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loser;
