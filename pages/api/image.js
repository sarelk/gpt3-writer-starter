import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const basePromptPrefix =
`
Giving this list of songs, which 10 songs playlist that came out at 1984 would you recommend?

`

const generateImage = async (req, res) => {
let reqBody = req.body;
  const response = await openai.createImage({
    prompt: `a ${reqBody.charSyle} of a ${reqBody.charAge} ${reqBody.charType} ${reqBody.charVibe} at ${reqBody.charLocation}, working as a ${reqBody.charJob}, wearing a ${reqBody.charClothes}`,
    n: 1,
    size: "1024x1024",
  });
  const image_url = response.data.data[0].url;

  res.status(200).json({ output: image_url });
};

export default generateImage;