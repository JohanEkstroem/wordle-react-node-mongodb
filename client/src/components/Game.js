import React, { useState, useEffect } from 'react';
import GameConfig from './GameConfig';
import GameGuesses from './GameGuesses';

const Game = ({ correctWord }) => {
  const [inputText, setInputText] = useState('');
  const [guessWord, setGuessWord] = useState([]);
  const [gameState, setGameState] = useState('config');
  const [charsLength, setCharsLength] = useState(5);

  useEffect(() => {
    setGuessWord([]);
  }, []);

  useEffect(() => {}, [guessWord]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setGameState('play');
  };

  const handleChangeConfig = (e) => {
    setCharsLength(e.target.value);
  };

  const checkGuess = () => {
    setGuessWord([...guessWord, inputText]);
    setInputText('');
    if (guessWord.length === 50000) {
      setGameState('over');
    }
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
  } else if (gameState === 'play') {
    return (
      <>
        <GameGuesses
          setInputText={setInputText}
          checkGuess={checkGuess}
          guessWord={guessWord}
          correctWord={correctWord}
        />
      </>
    );
  } else if (gameState === 'over') {
    return <div>Game over</div>;
  }
};

export default Game;
