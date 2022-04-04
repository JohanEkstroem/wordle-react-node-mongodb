import './App.css';
import { useState, useEffect } from 'react';
import Game from './components/Game';

function App() {
  const [correctWord, setCorrectWord] = useState('');
  const [url, setUrl] = useState('http://localhost:5080/api/word');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(url);
      const body = await response.json();
      setCorrectWord(body);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <h1>Johan Ekström's version of Wordle</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <p>Word is loaded. Have blast with it</p>
      )}
      <Game correctWord={correctWord.word} />
    </div>
  );
}

export default App;

/* 
1. Fetch a word from API

*/
