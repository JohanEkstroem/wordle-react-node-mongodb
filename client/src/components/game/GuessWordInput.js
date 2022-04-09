import { useState } from 'react';

const GuessWordInput = ({ checkGuess, correctWord }) => {
  const [inputText, setInputText] = useState('');

  const onInputChange = (e) => {
    const { value } = e.target;
    const re = /^[A-Za-z]+$/;
    if (value === '' || re.test(value)) {
      setInputText(value);
    }
  };

  const handleOnClickGuess = () => {
    if (inputText.length === correctWord.length) {
      checkGuess(inputText.toUpperCase());
      setInputText('');
    } else {
      window.alert('Please input as many characters as chosen words');
    }
  };
  return (
    <div>
      <input
        className="wordGuessInput"
        placeholder="Enter guess"
        value={inputText}
        onChange={onInputChange}
      />
      <button onClick={handleOnClickGuess}>Guess</button>
    </div>
  );
};

export default GuessWordInput;
