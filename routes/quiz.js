const express = require('express');
const router = express.Router();
const { getTriviaQuiz, getImageQuiz, getQuoteQuiz } = require('../utils/fetchers');
const addWatermark = require('../utils/watermark');

router.get('/quiz', async (req, res) => {
  const difficulty = req.query.difficulty || 'easy';
  const allowed = ['easy', 'medium', 'hard'];
  if (!allowed.includes(difficulty.toLowerCase())) {
    return res.status(400).json(addWatermark({
      error: "Invalid difficulty. Use 'easy', 'medium' or 'hard'."
    }));
  }

  try {
    const data = await getTriviaQuiz(difficulty);
    res.json(addWatermark(data));
  } catch (err) {
    res.status(500).json(addWatermark({
      error: 'Failed to fetch quiz data.',
      details: err.message
    }));
  }
});

router.get('/random', async (req, res) => {
  try {
    const [quiz1, quiz2] = await Promise.all([
      getTriviaQuiz('medium'),
      getQuoteQuiz()
    ]);
    res.json(addWatermark([quiz1, quiz2]));
  } catch (err) {
    res.status(500).json(addWatermark({ error: 'Random fetch failed.', details: err.message }));
  }
});

router.get('/image-quiz', async (req, res) => {
  try {
    const data = await getImageQuiz();
    res.json(addWatermark(data));
  } catch (err) {
    res.status(500).json(addWatermark({ error: 'Image quiz failed.', details: err.message }));
  }
});

router.get('/quote-quiz', async (req, res) => {
  try {
    const data = await getQuoteQuiz();
    res.json(addWatermark(data));
  } catch (err) {
    res.status(500).json(addWatermark({ error: 'Quote quiz failed.', details: err.message }));
  }
});

module.exports = router;
