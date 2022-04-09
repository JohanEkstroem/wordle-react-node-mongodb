import Stopwatch from './Stopwatch';
import GuessWordInput from './GuessWordInput';
import SubmitHighscore from './SubmitHighscore';
import RenderGuessedWords from './RenderGuessedWords';

function Game({
  correctWord,
  time,
  checkGuess,
  guessWord,
  gameState,
  setGameState,
  setTime,
  charsLength,
  isUnique,
}) {
  if (gameState === 'playing') {
    return (
      <>
        <Stopwatch time={time} />
        <RenderGuessedWords guessWord={guessWord} correctWord={correctWord} />
        <GuessWordInput checkGuess={checkGuess} correctWord={correctWord} />
      </>
    );
  } else if (gameState === 'won') {
    return (
      <div>
        <Stopwatch time={time} />
        <SubmitHighscore
          time={time}
          setTime={setTime}
          guessWord={guessWord}
          setGameState={setGameState}
          charsLength={charsLength}
          isUnique={isUnique}
        />
      </div>
    );
  }
}

export default Game;
