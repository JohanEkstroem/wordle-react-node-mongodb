import './App.css';
import { useState, useEffect } from 'react';
import Game from './components/Game';

function App() {
  return (
    <div className="App">
      <h1>Johan Ekström's version of Wordle</h1>
      <Game />
    </div>
  );
}

export default App;
/* 
Todo:
1. Add stop watch in Game component.
2. Only accept input if input is 5 chars long.
3. Post highscore to server
4. Style
*/
