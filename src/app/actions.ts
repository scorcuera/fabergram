'use server'

import OpenAI from "openai";
console.log(process.env.OPENAI_API_SECRET)

const openai = new OpenAI(
  { apiKey: process.env.OPENAI_API_SECRET }
);

export const createIdea = async (data: any) => {
  const completion = await openai.chat.completions.create({
      messages: [
          { role: "system", content: "You are a creativity expert"},
          { role: "user", content: `Mix these ideas to create a brand new one: ${data.firstIdea} and ${data.secondIdea}`},
      ],
      model: "gpt-3.5-turbo",
  });
  console.log(completion.choices[0].message.content)
  return completion.choices[0].message.content;
}
