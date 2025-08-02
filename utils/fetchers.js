const axios = require('axios');

exports.getTriviaQuiz = async (difficulty = 'easy') => {
  const res = await axios.get(`https://opentdb.com/api.php?amount=1&category=31&difficulty=${difficulty}&type=multiple`);
  const q = res.data.results[0];
  return {
    type: 'trivia',
    question: q.question,
    correct: q.correct_answer,
    options: [...q.incorrect_answers, q.correct_answer].sort(() => Math.random() - 0.5),
    difficulty
  };
};

exports.getImageQuiz = async () => {
  const res = await axios.get('https://api.jikan.moe/v4/random/characters');
  const char = res.data.data;
  return {
    type: 'image',
    question: 'Who is this anime character?',
    image: char.images.webp.image_url,
    correct: char.name
  };
};

exports.getQuoteQuiz = async () => {
  const res = await axios.get('https://api.animechan.io/v1/quotes/random');
  const quote = res.data;
  return {
    type: 'quote',
    question: `Who said this quote?`,
    quote: quote.quote,
    correct: quote.character,
    anime: quote.anime
  };
};
