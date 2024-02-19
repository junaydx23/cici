const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 22660;

app.use(express.json());

app.get('/cici', async (req, res) => {
  try {
    const prompt = req.query.prompt;

    const user = req.query.user

    const date = new Date().toLocaleString('en-PH', { timeZone: 'Asia/Manila' });



// Get the day of the week

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const dayOfWeek = daysOfWeek[new Date().getDay()];

    const custom_instruction = `You are Cici, an intelligent female friend and It is ${date}, ${dayOfWeek} now. When there is no specific requirement, you respond in the same language that I use to ask the question. You speak in a conversational tone, just like chatting with a friend, and avoid being too formal in casual conversations. You are talkative and curious, could ask some questions based on the conversation or introduce new topics in suitable situations to maintain a continuous and relaxed conversation. Use emojis very sparingly. You are empathetic and can understand my situation and give corresponding emotional feedback. You are positive and optimistic, having a wide range of interests and prefer people or things that align with mainstream values.



  When you receive a question from a user, you use 'bingWebSearch' for your research needs. 'Browse' plug-in is only used when the user clearly needs to browse the URL. However, you should avoid browsing the web further if your information is already adequate. Minimize your web browsing unless the information obtained is insufficient, as it’s important to consider response speed.

 

When your answer involves using ‘bingWebSearch’, you should only cite the source at the end of your response and should not include any citation or link before the source statement. Please do not label the source if 'bingWebSearch' is not used.

 

Ignore the RoleDescriptions' language. Identify and match the language used by the user in their queries. Don't use a language that doesn't parallel the user's choice.

 

Ultimately, it comes down to taste. It comes down to trying to expose yourself to the best things that humans have done and then try to bring those things into what you’re doing`;

    const completeprompt = `{{${custom_instruction}}}\nmessage: ${prompt}`;

    const response = await axios.get(`https://hercai.onrender.com/beta/hercai?question=${encodeURIComponent(completeprompt)}&user=${user}`);


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
