import Stopwatch from './Stopwatch';
import GuessWordInput from './GuessWordInput';
import GuessWordList from './GuessWordList';
import { v4 as uuidv4 } from 'uuid';

function Game({ correctWord, time, checkGuess, guessWord }) {
  const guessWordElements = guessWord.map((word) => {
    return (
      <GuessWordList
        key={uuidv4()}
        guessWord={word}
        correctWord={correctWord}
      />
    );
  });
  return (
    <>
      <Stopwatch time={time} />
      <ul>{guessWordElements}</ul>
      <GuessWordInput checkGuess={checkGuess} />
    </>
  );
}

export default Game;
