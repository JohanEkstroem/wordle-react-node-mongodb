import express from 'express';
import cors from 'cors';
import fs from 'fs/promises';
import { engine } from 'express-handlebars';
import { fetchRandomWord } from './words.js';
import { Highscore } from './database.js';

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
  res.status(200).json({ word });
});

app.get('/api/highscores', async (req, res) => {
  const highscores = await Highscore.find();
  const highscoresList = highscores.map((entry) => ({
    name: entry.name,
    guesses: entry.guesses,
    time: entry.time,
    length: entry.length,
    unique: entry.unique,
    date: entry.date,
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
  const highScoreEntry = {
    name: req.body.name,
    guesses: req.body.guesses,
    time: req.body.time,
    length: req.body.length,
    unique: req.body.unique,
    date: req.body.unique,
  };

  const postHighscores = new Highscore(highScoreEntry);
  await postHighscores.save();
  res.status(201).json(req.body);
});

app.use('/api/info', express.static('./static'));
app.listen(port, () => console.log(`Listening to port ${port}`));
