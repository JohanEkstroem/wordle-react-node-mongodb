import React, { useState, useEffect } from 'react';
import GameConfig from './GameConfig';
import GameGuesses from './GameGuesses';
import Stopwatch from './Stopwatch';

const Game = () => {
  const [inputText, setInputText] = useState('');
  const [guessWord, setGuessWord] = useState([]);
  const [gameState, setGameState] = useState('config');
  const [charsLength, setCharsLength] = useState(5);
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);
  const [correctWord, setCorrectWord] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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
    setGameState('play');
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
        <h3>Have a blast with it</h3>
        <GameConfig
          handleSubmit={handleSubmit}
          handleChangeConfig={handleChangeConfig}
          charsLength={charsLength}
        />
      </>
    );
  } else if (gameState === 'play') {
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
        />
        <p>{correctWord}</p>
      </>
    );
  } else if (gameState === 'over') {
    return (
      <div>
        <h3>Game over.</h3>
        <p>Your time was:</p>
        <p>{Math.round(time / 1000)} seconds</p>
      </div>
    );
  } else if (gameState === 'won') {
    return (
      <div>
        <h3>Game over.</h3>
        <p> You did it in:</p>
        <p>
          {guessWord.length} tries and time was: {Math.round(time / 1000)}
          seconds
        </p>
      </div>
    );
  }
};

export default Game;
