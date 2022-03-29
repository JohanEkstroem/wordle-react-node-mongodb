import express from 'express';
import cors from 'cors';
import { fetchRandomWord } from './words.js';
import { Highscore } from './database.js';
const app = express();
const port = 5080;

app.use(express.json());
app.use(cors());

//GET request
app.get('/api/word', async (req, res) => {
  const word = await fetchRandomWord();
  res.json({ word });
});

app.get('/api/highscores', async (req, res) => {
  const highscores = await Highscore.find();
  res.json(highscores);
});

//POST request
app.post('/api/highscores', async (req, res) => {
  const postHighscores = new Highscore(req.body);
  await postHighscores.save();
  res.json(postHighscores, 201);
});

app.listen(port, () => console.log(`Listening to port ${port}`));
