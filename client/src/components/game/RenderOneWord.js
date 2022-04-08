function RenderOneWord({ guess }) {
  const guessElement = guess.map((item, idx) => {
    return (
      <span key={idx} className={item.result}>
        {item.letter}
      </span>
    );
  });

  return <li>{guessElement}</li>;
}

export default RenderOneWord;
