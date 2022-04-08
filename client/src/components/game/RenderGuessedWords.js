import RenderOneWord from './RenderOneWord';
import { v4 as uuidv4 } from 'uuid';

const RenderGuessedWords = ({ guessWord }) => {
  const taskElements = guessWord.map((guess, idx) => {
    return <RenderOneWord key={idx} guess={guess} />;
  });

  return (
    <div>
      <ul>{taskElements}</ul>
    </div>
  );
};

export default RenderGuessedWords;
