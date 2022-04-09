import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import cors from 'cors';
import fs from 'fs/promises';
import { engine } from 'express-handlebars';
import { fetchRandomWord } from './words.js';
import { Highscore } from './database.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 5080;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './server/templates');
app.use(express.json());
app.use(cors());

app.use(express.static(`${path.join(__dirname, '/public')}`));
app.use(express.static(`${path.join(__dirname, '/static')}`));
app.use(express.static(`${path.join(__dirname, '/public/static')}`));
//GET request
app.get('/', (req, res) => {
  res.send('hello');
});

app.get('/api/word/', async (req, res) => {
  const unique = req.query.unique === 'true';
  const wordLength = parseInt(req.query.length);
  const word = await fetchRandomWord(wordLength, unique);
  res.status(200).json({ word });
});

app.get('/api/highscores', async (req, res) => {
  let highscores = await Highscore.find();
  highscores = highscores.sort((a, b) => a.time - b.time);
  const highscoresList = highscores.map((entry) => ({
    name: entry.name,
    guesses: entry.guesses,
    timeSeconds: ('0' + Math.floor((entry.time / 1000) % 60)).slice(-2),
    timeMinutes: ('0' + Math.floor((entry.time / 60000) % 60)).slice(-2),
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
    date: req.body.date,
  };
  const postHighscores = new Highscore(highScoreEntry);
  await postHighscores.save();
  res.status(201).json(req.body);
});

app.listen(port, () => console.log(`Listening to port ${port}`));
