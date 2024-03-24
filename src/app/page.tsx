'use client'

import { createIdea } from "@/app/actions";

export default function Home() {
  const FormAction = async (formData: any) => {
    const firstIdea = formData.get("firstIdea");
    const secondIdea = formData.get("secondIdea");
    console.log(firstIdea, secondIdea);
    const data = await createIdea({ firstIdea, secondIdea });
    console.log(data)
  }

  return (
    <main className="h-4/5 w-96 lg:w-4/6">
      <h3>Let's create some ideas</h3>
      <form action={FormAction}>
        <input type="text" name="firstIdea" placeholder="Enter your idea" />
        <input type="text" name="secondIdea" placeholder="Enter your idea" />
        <button type="submit">Mix ideas !</button>
      </form>
      <h1>Fabergram</h1>
    </main>
  );
}
