import ConfigInput from './ConfigInput';
import Nav from './Nav';
const GameConfig = ({ setGameState, handleSubmitConfig }) => {
  return (
    <>
      <h1>Johan Ekström's version of Wordle</h1>
      <Nav />
      <ConfigInput
        setGameState={setGameState}
        handleSubmitConfig={handleSubmitConfig}
      />
    </>
  );
};

export default GameConfig;
