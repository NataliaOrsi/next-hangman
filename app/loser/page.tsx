"use client";

import React, { useEffect } from "react";
import { useWordContext } from "../context/word-context";
import { generate } from "random-words";


export default function loser() {

  const { secretWord } = useWordContext();

  return <div>Sorry, you ran out of guesses. The word was {secretWord}.</div>;
}
