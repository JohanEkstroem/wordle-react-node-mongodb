import express from 'express';
import cors from 'cors';
import { fetchRandomWord } from './words.js';
const app = express();
const port = 5080;

app.use(express.json());
app.use(cors());

//GET request
app.get('/api/word', async (req, res) => {
  const word = await fetchRandomWord();
  res.json({ word });
});

//POST request
app.post('/highscores', (req, res) => {});

app.listen(port, () => console.log(`Listening to port ${port}`));
