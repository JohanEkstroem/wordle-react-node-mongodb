import fetch from 'node-fetch';

export async function fetchRandomWord() {
  try {
    const response = await fetch(
      'https://raw.githubusercontent.com/dwyl/english-words/master/words_dictionary.json'
    );
    const body = await response.json();
    const words = await Object.keys(body).filter((word) => word.length == 5);
    const randomIndex = Math.floor(Math.random() * words.length);
    return await words[randomIndex].toUpperCase();
  } catch (error) {
    console.log(error);
    return;
  }
}

// Get a word and be ready to send it to the client.
