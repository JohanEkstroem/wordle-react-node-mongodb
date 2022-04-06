/* import React, { useState, useEffect } from 'react';
import GameConfig from '../GameConfigDir/GameConfig';
import GameGuesses from '../GameGuesses';
import Stopwatch from './Stopwatch';
 */ /* 
const Game = () => {
  useEffect(() => {
    const fetchData = async () => {
      const url = 'http://localhost:5080/api/word';
      setIsLoading(true);
      const response = await fetch(url);
      const body = await response.json();
      setCorrectWord(body.word);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    setGuessWord([]);
  }, []);

  useEffect(() => {
    if (guessWord[guessWord.length - 1] === correctWord) {
      setStart(false);
      setGameState('won');
    }
  }, [guessWord]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setGameState('playing');
    setStart(true);
  };

  const handleChangeConfig = (e) => {
    setCharsLength(e.target.value);
  };

  const checkGuess = () => {
    setGuessWord([...guessWord, inputText.toUpperCase()]);
    setInputText('');
  };

  if (gameState === 'config') {
    return (
      <>
        <GameConfig
          handleSubmit={handleSubmit}
          handleChangeConfig={handleChangeConfig}
          charsLength={charsLength}
        />
      </>
    );
  } else if (gameState === 'playing') {
    return (
      <>
        <Stopwatch
          time={time}
          setTime={setTime}
          start={start}
          setStart={setStart}
        />
        <GameGuesses
          setInputText={setInputText}
          checkGuess={checkGuess}
          guessWord={guessWord}
          correctWord={correctWord}
          gameState={gameState}
        />
        <p>{correctWord}</p>
      </>
    );
  }
};

export default backupGame;
 */
