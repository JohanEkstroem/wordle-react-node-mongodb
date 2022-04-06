import './App.css';
import { useState, useEffect } from 'react';
import Game from './components/GameDir/Game';
import GameConfig from './components/GameConfigDir/GameConfig';

function App() {
  const [gameState, setGameState] = useState('config');
  const [correctWord, setCorrectWord] = useState('');
  const [guessWord, setGuessWord] = useState([]);
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    let interval = null;

    if (start) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [start]);

  const handleSubmitConfig = async (unique, length) => {
    const url = `http://localhost:5080/api/word?unique=${unique}&length=${length}`;
    const response = await fetch(url);
    const body = await response.json();
    setCorrectWord(body.word);
    setGameState('playing');
    setStart(true);
    return;
  };

  const checkGuess = (inputText) => {
    setGuessWord([...guessWord, inputText]);
  };

  /* 
  const [charsLength, setCharsLength] = useState(5);
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);
  const [isLoading, setIsLoading] = useState(false); */

  return gameState === 'config' ? (
    <div className="App">
      <GameConfig
        setGameState={setGameState}
        handleSubmitConfig={handleSubmitConfig}
      />
    </div>
  ) : (
    <div className="App">
      <Game
        correctWord={correctWord}
        start={start}
        setTime={setTime}
        time={time}
        checkGuess={checkGuess}
        guessWord={guessWord}
      />
      <p>{correctWord}</p>
    </div>
  );
}

export default App;
/* 
Todo:
1. let user choose length of word
2. let user have possibility to choose unique chars in word
3. Show a stopwatch in game mode
*/
