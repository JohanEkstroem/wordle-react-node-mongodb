import fetch from 'node-fetch';
export async function fetchRandomWord(wordLength, unique) {
  try {
    const response = await fetch(
      'https://raw.githubusercontent.com/dwyl/english-words/master/words_dictionary.json'
    );
    const body = await response.json();
    const words = Object.keys(body).filter(
      (word) => word.length == wordLength
    );
    const randomIndex = Math.floor(Math.random() * words.length);
    const uniqueChars = words.filter(
      (e) => [...new Set(e.split(''))].join('') == e
    );
    if (unique) {
      return uniqueChars[
        Math.floor(Math.random() * uniqueChars.length)
      ].toUpperCase();
    }
    return words[randomIndex].toUpperCase();
  } catch (error) {
    console.log(error);
    return;
  }
}
