const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/kshitiz', async (req, res) => {
  try {
    const userQuery = req.query.emoji;


    const systemMessage = `make fun and interesting short story from user emoji you know every emoji meaning  make interesting story useing emojis provided by users.`;

    const response = await axios.post('https://openchat-ai.onrender.com/chat', {
      prompt: userQuery,
      system: systemMessage,
      conversation: [],
    });


    const zoroResponse = response.data.result;


    const responseWithEmojis = `${zoroResponse} `;

    res.json({ response: responseWithEmojis });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
