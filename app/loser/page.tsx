import React from 'react'

const secretWord = 'loser'

export default function loser() {
  return (
    <div>Sorry, you ran out of guesses. The word was {secretWord}.</div>
  );
}
