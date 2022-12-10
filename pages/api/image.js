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

  // const response = await openai.createImage({
  //   prompt: "a white siamese cat",
  //   n: 1,
  //   size: "1024x1024",
  // });
  // image_url = response.data.data[0].url;

  res.status(200).json({ output: req.body });
};

export default generateImage;