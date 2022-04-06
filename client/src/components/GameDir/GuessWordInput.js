import { useState } from 'react';

const GuessWordInput = ({ checkGuess }) => {
  const [inputText, setInputText] = useState('');

  const handleOnClickGuess = () => {
    checkGuess(inputText.toUpperCase());
    setInputText('');
  };
  return (
    <div>
      <input
        className="wordGuessInput"
        type="text"
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
      />
      <button onClick={handleOnClickGuess}>Guess</button>
    </div>
  );
};

export default GuessWordInput;

/* 
1. Take input from user and set it to guessState

*/
