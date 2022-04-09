import { useState } from 'react';
const SubmitHighscore = ({
  time,
  setTime,
  guessWord,
  setGameState,
  charsLength,
  isUnique,
}) => {
  const [inputName, setInputName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: inputName,
        guesses: guessWord.length,
        time: time,
        length: charsLength,
        unique: isUnique,
        date: new Date(),
      }),
    };
    const response = await fetch(
      'http://localhost:5080/api/highscores',
      requestOptions
    );
    setGameState('config');
    setTime(0);
  };
  return (
    <>
      <h1>You Won!</h1>
      <h4>You did it in {guessWord.length} guesses</h4>
      <form onSubmit={handleSubmit}>
        <input
          className="wordGuessInput"
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
