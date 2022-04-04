import WordList from './WordList';
import { v4 as uuidv4 } from 'uuid';

const GameGuesses = ({
  setInputText,
  checkGuess,
  inputText,
  guessWord,
  correctWord,
}) => {
  const handleOnClickGuess = () => {
    checkGuess(inputText);
    setInputText('');
  };

  const guessWordElements = guessWord.map((word) => {
    return <WordList key={uuidv4()} word={word} correctWord={correctWord} />;
  });
  return (
    <div>
      <ul className="ul">{guessWordElements}</ul>
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

export default GameGuesses;

/* 
This component takes input from user and sets state inputText with whatever the client types in.
When user clicks on guess button after input, the component will setGuessWord(add guessed word to the list.)
*/
