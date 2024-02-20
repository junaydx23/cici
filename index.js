const express = require('express');
const { RsnChat } = require("rsnchat");
const rsnchat = new RsnChat("rsnai_Ps4ryTcQkXFnjX6nmFV2BZ7y");

const app = express();
const PORT = process.env.PORT || 22660;

app.use(express.json());

app.get('/gpt4', async (req, res) => {
  try {
    const prompt = req.query.prompt;

    const response = await rsnchat.gpt(prompt);


    const gptResponse = response.message;


    res.json({ response: gptResponse });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
