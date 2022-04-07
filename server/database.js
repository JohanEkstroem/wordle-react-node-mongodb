import mongoose from 'mongoose';

mongoose.connect(
  'mongodb+srv://johanekstroem:l0sen0rd@cluster0.xhh42.mongodb.net/wordle?retryWrites=true&w=majority',
  () => console.log('Connected to DB')
);

// Create Model and Schema (en beskrivning av hur någonting ser ut)
const Highscore = mongoose.model('highscores', {
  name: String,
  guesses: Number,
  time: Number,
  length: Number,
  unique: Boolean,
  date: String,
});

export { Highscore };
