'use server'

import OpenAI from "openai";

const openai = new OpenAI({apiKey: process.env.API_KEY });

export const createIdea = async (formData: any) => {
  const firstIdea = formData.get("firstIdea");
  const secondIdea = formData.get("secondIdea");
  const completion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: "You are a creativity expert" },
      {
        role: "user",
        content: `Mix these ideas to create a brand new one: ${firstIdea} and ${secondIdea}`,
      },
    ],
    model: "gpt-3.5-turbo",
  });
  let response = completion.choices[0].message.content;
  return response;
};
