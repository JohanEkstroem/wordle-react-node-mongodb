function RenderOneWord({ guess }) {
  const guessElement = guess.map((item, idx) => {
    return (
      <span key={idx} className={`letter ${item.result}`}>
        {item.letter}
      </span>
    );
  });

  return <li className="wordContainer">{guessElement}</li>;
}

export default RenderOneWord;
