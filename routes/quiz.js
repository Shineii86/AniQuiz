const express = require('express');
const router = express.Router();
const {
  getTriviaQuiz,
  getImageQuiz,
  getQuoteQuiz
} = require('../utils/fetchers');
const addWatermark = require('../utils/watermark');

// /api/quiz?difficulty=easy
router.get('/quiz', async (req, res) => {
  const difficulty = req.query.difficulty?.toLowerCase() || 'easy';
  const allowed = ['easy', 'medium', 'hard'];

  if (!allowed.includes(difficulty)) {
    return res.status(400).json(addWatermark({
      error: "Invalid difficulty. Use 'easy', 'medium', or 'hard'."
    }));
  }

  try {
    const quiz = await getTriviaQuiz(difficulty);
    res.json(addWatermark(quiz));
  } catch (err) {
    res.status(500).json(addWatermark({
      error: 'Failed to fetch quiz.',
      details: err.message
    }));
  }
});

// /api/random
router.get('/random', async (req, res) => {
  try {
    const quiz = await getTriviaQuiz('medium');
    const quote = await getQuoteQuiz();
    res.json(addWatermark([quiz, quote]));
  } catch (err) {
    res.status(500).json(addWatermark({
      error: 'Failed to fetch random quiz.',
      details: err.message
    }));
  }
});

// /api/image-quiz
router.get('/image-quiz', async (req, res) => {
  try {
    const imageQuiz = await getImageQuiz();
    res.json(addWatermark(imageQuiz));
  } catch (err) {
    res.status(500).json(addWatermark({
      error: 'Failed to fetch image quiz.',
      details: err.message
    }));
  }
});

// /api/quote-quiz
router.get('/quote-quiz', async (req, res) => {
  try {
    const quoteQuiz = await getQuoteQuiz();
    res.json(addWatermark(quoteQuiz));
  } catch (err) {
    res.status(500).json(addWatermark({
      error: 'Failed to fetch quote quiz.',
      details: err.message
    }));
  }
});

module.exports = router;
