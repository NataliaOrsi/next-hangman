"use client";

import React, { useEffect } from "react";
import { useWordContext } from "../context/word-context";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";


export default function loser() {

  const { secretWord } = useWordContext();

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
            <span className="text-primary-color">G</span>
            <span className="text-secondary-color">A</span>
            <span className="text-third-color">M</span>
            <span className="text-primary-color">E</span>{" "}
            <span className="text-secondary-color">O</span>
            <span className="text-third-color">V</span>
            <span className="text-primary-color">E</span>
            <span className="text-secondary-color">R</span>
          </div>
          <div className="border-third-color border-2 bg-third-color text-white rounded-md flex absolute left-[35%] bottom-[35%] text-2xl">
            The word was {secretWord}.
          </div>
          <div className="border-primary-color border-2 bg-primary-color text-white rounded-md flex absolute left-[47%] bottom-[20%]">
            <Link href="/game">
              <button className="p-4">Play Again</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
