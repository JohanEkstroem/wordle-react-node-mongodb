const GameConfig = ({ handleSubmit, handleChangeConfig, charsLength }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>How many letters?</label>
        <br />
        <select value={charsLength} onChange={handleChangeConfig}>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
        <button type="submit">Play</button>
      </form>
    </>
  );
};

export default GameConfig;
