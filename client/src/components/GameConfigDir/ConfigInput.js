function ConfigInput({
  handleSubmitConfig,
  isUnique,
  setIsUnique,
  charsLength,
  setCharsLength,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    handleSubmitConfig(isUnique, charsLength);
    console.log(charsLength);
  }
  return (
    <>
      <h4>Configure Game</h4>
      <form onSubmit={handleSubmit}>
        <label>How many letters?</label>
        <br />
        <select
          value={charsLength}
          onChange={(e) => setCharsLength(e.target.value)}
        >
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
        <div>
          <input
            type="radio"
            value={isUnique}
            onChange={() => setIsUnique(false)}
            checked={!isUnique}
          />
          Allow repeating characters (e.g HELLO)
          <br />
          <input
            type="radio"
            value={isUnique}
            onChange={() => setIsUnique(true)}
            checked={isUnique}
          />
          Allow unique characters only (e.g CURLY)
        </div>
        <button type="submit">Play</button>
      </form>
    </>
  );
}

export default ConfigInput;

/* 
This component takes users input (chars length) and then sets gameState to play
<select value={charsLength} onChange={handleChangeConfig}>


*/
