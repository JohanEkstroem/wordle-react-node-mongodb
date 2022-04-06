import GuessWordList from './GuessWordList';
import { v4 as uuidv4 } from 'uuid';
import WordInput from './GuessWordInput';

const GameGuesses = ({
  setInputText,
  checkGuess,
  inputText,
  guessWord,
  correctWord,
  gameState,
}) => {
  const handleOnClickGuess = () => {
    checkGuess(inputText);
    setInputText('');
  };

  const guessWordElements = guessWord.map((word) => {
    return (
      <GuessWordList key={uuidv4()} word={word} correctWord={correctWord} />
    );
  });
  return (
    <div>
      <ul className="ul">{guessWordElements}</ul>
      {gameState === 'playing' ? (
        <WordInput setInputText={setInputText} />
      ) : (
        <p>Higscoresubmit</p>
      )}
    </div>
  );
};

export default GameGuesses;

/* 
This component takes input from user and sets state inputText with whatever the client types in.
When user clicks on guess button after input, the component will setGuessWord(add guessed word to the list.)
*/
