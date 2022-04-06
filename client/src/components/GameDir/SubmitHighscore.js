import { useState } from 'react';
const SubmitHighscore = ({
  time,
  setTime,
  guessWord,
  setGameState,
  charsLength,
}) => {
  const [inputName, setInputName] = useState('');

  const handleSubmit = async () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: inputName,
        guesses: guessWord.length,
        time: time,
        length: charsLength,
      }),
    };
    const response = await fetch(
      'http://localhost:5080/api/highscores',
      requestOptions
    );
    const data = await response.json();
    setGameState('config');
    setTime(0);
  };
  return (
    <>
      <h1>You Won!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
        <br />
        <button type="submit">Submit to highscore</button>
      </form>
    </>
  );
};

export default SubmitHighscore;

/* 
name
guesses
time
length */
