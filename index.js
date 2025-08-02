const express = require('express');
const cors = require('cors');
require('dotenv').config();

const quizRoutes = require('./routes/quiz');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use('/api', quizRoutes);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, () => {
  console.log(`AniQuiz API is live on http://localhost:${PORT}`);
});
