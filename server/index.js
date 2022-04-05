import express from 'express';
import cors from 'cors';
import fs from 'fs/promises';
import { engine } from 'express-handlebars';
import { fetchRandomWord } from './words.js';
import { Highscore } from './database.js';
import console from 'console';

const app = express();
const port = 5080;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './server/templates');
app.use(express.json());
app.use(cors());

//GET request

app.get('/api/word/', async (req, res) => {
  const unique = req.query.unique === 'true';
  const wordLength = parseInt(req.query.length);
  const word = await fetchRandomWord(wordLength, unique);
  res.json({ word });
});

app.get('/api/highscores', async (req, res) => {
  const getHighscores = await Highscore.find();
  const highscoresList = getHighscores.map((item) => ({
    name: item.name,
    score: item.score,
  }));
  res.render('home', { highscoresList });
});

app.get('/api/info', async (req, res) => {
  const fileBuf = await fs.readFile('./server/static/static.html');
  res.type('html');
  res.send(fileBuf);
});

//POST request
app.post('/api/highscores', async (req, res) => {
  const postHighscores = new Highscore(req.body);
  await postHighscores.save();
  res.json(postHighscores, 201);
});

app.use('/api/info', express.static('./static'));
app.listen(port, () => console.log(`Listening to port ${port}`));

/* 
1. In home.handlebars, render highscore from mongodb atlas
2. 
  A: Fetch everything from mongodb
  B: Send data to home.handlebars
  C: Loop through data and render with ul/li
  D: Style the shit out of it until perfection

*/
