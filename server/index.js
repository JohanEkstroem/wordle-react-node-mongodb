import express from 'express';

const app = express();
const port = 5080;

//GET request
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from server' });
});

//POST request
app.post('/highscores', (req, res) => {});

app.listen(port, () => console.log(`Listening to port ${port}`));
