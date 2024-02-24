const express = require('express');
const { RsnChat } = require("rsnchat");
const rsnchat = new RsnChat("rsnai_Ps4ryTcQkXFnjX6nmFV2BZ7y");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/chatgpt', async (req, res) => {
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

app.get('/bing', async (req, res) => {
  try {
    const prompt = req.query.prompt;

    const response = await rsnchat.bing(prompt);

    const gptResponse = response.message;

    res.json({ response: gptResponse });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/mixtral', async (req, res) => {
  try {
    const prompt = req.query.prompt;

    const response = await rsnchat.mixtral(prompt);

    const gptResponse = response.message;

    res.json({ response: gptResponse });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/codellama', async (req, res) => {
  try {
    const prompt = req.query.prompt;

    const response = await rsnchat.codellama(prompt);

    const gptResponse = response.message;

    res.json({ response: gptResponse });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/llama', async (req, res) => {
  try {
    const prompt = req.query.prompt;

    const response = await rsnchat.llama(prompt);

    const gptResponse = response.message;

    res.json({ response: gptResponse });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/gemini', async (req, res) => {
  try {
    const prompt = req.query.prompt;

    const response = await rsnchat.gemini(prompt);

    const gptResponse = response.message;

    res.json({ response: gptResponse });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/openchat', async (req, res) => {
  try {
    const prompt = req.query.prompt;

    const response = await rsnchat.openchat(prompt);

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
