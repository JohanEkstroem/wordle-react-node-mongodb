import ConfigInput from './ConfigInput';
import Nav from './Nav';
const GameConfig = ({
  setGameState,
  handleSubmitConfig,
  isUnique,
  setIsUnique,
  setCharsLength,
  charsLength,
}) => {
  return (
    <>
      <h1>Johan Ekström's version of Wordle</h1>
      <Nav />
      <ConfigInput
        setGameState={setGameState}
        handleSubmitConfig={handleSubmitConfig}
        isUnique={isUnique}
        setIsUnique={setIsUnique}
        charsLength={charsLength}
        setCharsLength={setCharsLength}
      />
    </>
  );
};

export default GameConfig;

/* 

 charsLength={charsLength}
        setCharsLength={setCharsLength}
        isUnique={isUnique}
        setIsUnique={setIsUnique}
        setGameState={setGameState}
        handleSubmitConfig={handleSubmitConfig}

*/
