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
    <main className="flex flex-col h-4/6 w-96 md:w-screen items-center justify-between">
      <div className="container flex flex-col items-center">
        <h3>Let's create some ideas</h3>
        <form action={FormAction}>
          <input type="text" name="firstIdea" placeholder="Enter your idea" />
          <input type="text" name="secondIdea" placeholder="Enter your idea" />
          <button type="submit">Mix ideas !</button>
        </form>
      </div>
      <h1 className="self-center">Fabergram</h1>
    </main>
  );
}
