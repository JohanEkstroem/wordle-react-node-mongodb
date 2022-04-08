/* const object = {
  guessWord,
  correctWord,
}; */
import { v4 as uuidv4 } from 'uuid';
const GuessWordList = ({ guessWord, correctWord }) => {
  let a = guessWord.toUpperCase().split('');
  let b = correctWord.toUpperCase().split('');
  let temp = [];
  let output = [];
  let copy = b.slice();

  for (let i = 0; i < a.length; i++) {
    if (a[i] === copy[i]) {
      output[i] = { letter: a[i], result: 'correct' };
      copy[i] = null;
      temp.push(i);
    }
  }

  for (let i = 0; i < a.length; i++) {
    if (!temp.includes(i)) {
      if (copy.includes(a[i])) {
        output[i] = { letter: a[i], result: 'misplaced' };
      }
      if (!copy.includes(a[i])) {
        output[i] = { letter: a[i], result: 'incorrect' };
      }
    }
  }

  const guessList = output.map((guess) => {
    return (
      <div key={uuidv4()} className="letterContainer">
        <span className={`spanContainer ${guess.result}`} key={uuidv4()}>
          {guess.letter}
        </span>
      </div>
    );
  });
  console.log(guessList);
  return (
    <li className="list" key={uuidv4()}>
      {guessList}
    </li>
  );
};

export default GuessWordList;
