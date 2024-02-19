const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/cici', async (req, res) => {
  try {
    const prompt = req.query.prompt;

    const custom_instruction = ``;

    const completeprompt = `{{${custom_instruction}}}\nmessage: ${promp}`;

    const response = await axios.get(`https://hercai.onrender.com/beta/hercai?question=${encodeURIComponent(completeprompt)}`);


    const zoroResponse = response.data.reply;


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
