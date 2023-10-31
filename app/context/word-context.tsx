"use client";

import { generate } from "random-words";
import React, { createContext, useState, useContext, useEffect } from "react";

type WordContextProviderProps = {
    children: React.ReactNode;
}

type WordContextProps = {
  secretWord: string;
  setSecretWord: React.Dispatch<React.SetStateAction<string>>
};

export const WordContext = createContext<WordContextProps | null>(null);

export default function WorldContextProvider({children,}: WordContextProviderProps) {
  const [secretWord, setSecretWord] = useState("");

  const word = generate().toString();

  useEffect(() => {
    setSecretWord(word);
  }, [word]);

  return (
    <WordContext.Provider value={{secretWord, setSecretWord}}>
      {children}
    </WordContext.Provider>
  );
}

export function useWordContext() {
    const context = useContext(WordContext);

    if (!context) {
      throw new Error(
        "SecretWord Context should be used within WordContextProvider"
      );
    }
    return context;
}