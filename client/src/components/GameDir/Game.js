import Stopwatch from './Stopwatch';
import GuessWordInput from './GuessWordInput';
import GuessWordList from './GuessWordList';
import { v4 as uuidv4 } from 'uuid';
import SubmitHighscore from './SubmitHighscore';

function Game({
  correctWord,
  time,
  checkGuess,
  guessWord,
  gameState,
  setGameState,
  setTime,
  charsLength,
}) {
  const guessWordElements = guessWord.map((word) => {
    return (
      <GuessWordList
        key={uuidv4()}
        guessWord={word}
        correctWord={correctWord}
      />
    );
  });
  if (gameState === 'playing') {
    return (
      <>
        <Stopwatch time={time} />
        <ul>{guessWordElements}</ul>
        <GuessWordInput checkGuess={checkGuess} />
      </>
    );
  } else if (gameState === 'won') {
    return (
      <div>
        <Stopwatch time={time} />
        <ul>{guessWordElements}</ul>
        <SubmitHighscore
          time={time}
          setTime={setTime}
          guessWord={guessWord}
          setGameState={setGameState}
          charsLength={charsLength}
        />
      </div>
    );
  }
}

export default Game;
