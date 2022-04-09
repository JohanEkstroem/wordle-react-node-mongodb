import RenderOneWord from './RenderOneWord';

const RenderGuessedWords = ({ guessWord, correctWord }) => {
  const taskElements = guessWord.map((guess, idx) => {
    return <RenderOneWord key={idx} guess={guess} />;
  });

  const corr = Array.from(correctWord);
  const emptyBoxes = corr.map((item, idx) => {
    return <span key={idx} className="empty letter"></span>;
  });

  return (
    <div className="listContainer">
      <ul className="ul">
        {taskElements}
        <li className="wordContainer">{emptyBoxes}</li>
      </ul>
    </div>
  );
};

export default RenderGuessedWords;
