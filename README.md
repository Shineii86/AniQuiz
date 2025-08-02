<div align="center">

# [AniQuizAPI](https://github.com/AniPulse)

**The Ultimate Smart Anime Quiz REST API**  
Auto-generated trivia questions — by difficulty, image, quote, or random — with robust error handling and personalized watermark in every response.

![Vercel](https://img.shields.io/badge/Deployed-Vercel-black?style=flat&logo=vercel)
![Issues](https://img.shields.io/github/issues/Shineii86/AniQuizAPI)
![License](https://img.shields.io/badge/License-MIT-brightgreen.svg)

![Last Commit](https://img.shields.io/github/last-commit/Shineii86/AniQuizAPI?style=for-the-badge)
![Repo Size](https://img.shields.io/github/repo-size/Shineii86/AniQuizAPI?style=for-the-badge) [![GitHub Stars](https://img.shields.io/github/stars/Shineii86/AniQuizAPI?style=for-the-badge)](https://github.com/Shineii86/AniQuizAPI/stargazers) [![GitHub Forks](https://img.shields.io/github/forks/Shineii86/AniQuizAPI?style=for-the-badge)](https://github.com/Shineii86/AniQuizAPI/fork)
[![API Status](https://img.shields.io/website?down_color=lightgrey&down_message=offline&label=API%20Status&style=for-the-badge&up_color=green&up_message=online&url=https%3A%2F%2Faniquiz.vercel.app)](https://aniquiz.vercel.app)


</div>

---

## 🚀 Overview

AniQuiz API is an open-source anime quiz API that provides:
- 🎯 Trivia questions (Easy / Medium / Hard)
- 🖼️ Image-based quizzes (guess anime from images)
- 🗣️ Quote-based quizzes (guess the anime from quotes)
- 🔀 Random question mixing
- 💡 Advanced error handling
- 🖋️ Creator watermark in every response
- 🌐 Deployed on Vercel for free public usage

---

## 🌟 Features

- ✅ Difficulty Tags: `Easy`, `Medium`, `Hard`
- ✅ Auto-generated & AI-enriched questions
- ✅ Random, image, and quote quiz endpoints
- ✅ Fully RESTful API
- ✅ Timestamp & Creator Credit in response
- ✅ Ready to deploy on GitHub + Vercel
- ✅ Free & Open Source  

---

## 📚 API Documentation

### 🔹 `/api/quiz?difficulty=easy|medium|hard`
Get a trivia question by difficulty level.

```bash
GET /api/quiz?difficulty=medium
````

### 🔹 `/api/image-quiz`

Returns a question with an anime image. User must guess the anime title.

### 🔹 `/api/quote-quiz`

Returns a famous anime quote and asks to guess the anime or character.

### 🔹 `/api/random`

Returns a completely randomized question from any mode (trivia, image, or quote).

---

## 🧠 Example Response

```json
{
  "question": "Who is the main character of the anime Naruto?",
  "options": ["Sasuke", "Itachi", "Naruto", "Sakura"],
  "answer": "Naruto",
  "difficulty": "Easy",
  "type": "quiz",
  "creator": "Shinei Nouzen",
  "github": "https://github.com/Shineii86",
  "telegram": "https://telegram.me/Shineii86",
  "message": "Build with ❤️ by Shinei Nouzen",
  "timestamp": "India Date & Time 12H Format"
}
```

---

## ❗ Error Handling

All endpoints return well-formatted JSON errors:

```json
{
  "error": {
    "code": "INVALID_DIFFICULTY",
    "message": "Please use one of: easy, medium, hard."
  }
}
```

- [x] HTTP status codes: `400`, `404`, `500`
- [x] Validation for missing/invalid params
- [x] Graceful fallback if source API fails

---

## 🛠️ Installation

### 1. Clone this repo

```bash
git clone https://github.com/Shineii86/AniQuizAPI
cd AniQuizAPI
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

---

## 🌐 Deployment (Vercel Recommended)

> One-click deploy with Vercel for instant API hosting.

* Fork this repo
* Connect it to [Vercel](https://vercel.com)
* Set up the project (no special env needed)
* Deploy 🎉

---

## 🪪 License

```json
This project is licensed under the *MIT License*.
Feel free to use, remix, and share it with proper credits.
```

---

## 👤 Credits

> Project created by [**Shinei Nouzen**](https://github.com/Shineii86)
> Built with ❤️ passion for Anime and Open Source.

---

## 📬 Support

* Issues: [GitHub Issues](https://github.com/Shineii86/AniQuizAPI/issues)

---

## 💕 Loved My Work?

🚨 [Follow me on GitHub](https://github.com/Shineii86/Shineii86)

⭐ [Give a star to this project](https://github.com/Shineii86/AniQuizAPI/)

<a href="https://github.com/Shineii86/AniChatAPI">
<img src="https://github.com/Shineii86/AniPay/blob/main/Source/Banner6.png" alt="Banner">
</a>

---

## ☎️ Contact

<div align="center">

*For inquiries or collaborations*

[![Telegram Badge](https://img.shields.io/badge/-Telegram-2CA5E0?style=flat\&logo=Telegram\&logoColor=white)](https://telegram.me/Shineii86 "Contact on Telegram")
[![Instagram Badge](https://img.shields.io/badge/-Instagram-C13584?style=flat\&logo=Instagram\&logoColor=white)](https://instagram.com/ikx7.a "Follow on Instagram")
[![Pinterest Badge](https://img.shields.io/badge/-Pinterest-E60023?style=flat\&logo=Pinterest\&logoColor=white)](https://pinterest.com/ikx7a "Follow on Pinterest")
[![Gmail Badge](https://img.shields.io/badge/-Gmail-D14836?style=flat\&logo=Gmail\&logoColor=white)](mailto:ikx7a@hotmail.com "Send an Email")

<sup><b>Copyright © 2025 <a href="https://telegram.me/Shineii86">Shinei Nouzen</a>.
All Rights Reserved</b></sup>

</div>
