import OpenAI from "openai";
import { config } from "dotenv";
config();

const chatgptOpenAifunction = async (countryName, days, cities, month) => {
  const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_KEY,
  });

  const cityString = cities.join(", ");

  const chatGptPromt = `Create a ${days}-day travel itinerary for a trip to ${countryName}, focusing on famous attractions in ${cityString}.
      Please return the response as an array of objects where each object has the following format:
      {
        day: <day_number>,
        plan: <string_description_of_activities>,
        transportation: <string_description_of_transport_options>
      }`;

  async function createChatCompletion() {
    try {
      const chatCompletion = await openai.chat.completions.create({
        messages: [
          {
            role: "user",
            content: chatGptPromt,
          },
        ],
        model: "gpt-4",
      });

      return chatCompletion.choices[0].message.content;
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
      return "Error retrieving ChatGPT response";
    }
  }
  const chatGptResponse = await createChatCompletion();
  //   console.log(chatGptResponse);
  return chatGptResponse;
};

export default chatgptOpenAifunction;
