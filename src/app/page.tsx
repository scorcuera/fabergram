'use client'

import { createIdea } from "@/app/actions";
import { motion } from "framer-motion";

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
        <h3 className="text-5xl pb-20">Let's create some ideas</h3>
        <form action={FormAction} className="w-full flex flex-col">
          <div className="container flex justify-around pb-10">
            <label
              htmlFor="firstIdea"
              className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
              <input
                type="text"
                name="firstIdea"
                className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                placeholder="first idea"
              />

              <span
                className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 p-0.5 text-white text-xs transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
              >
                first idea
              </span>
            </label>
            <label
              htmlFor="secondIdea"
              className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
              <input
                type="text"
                name="secondIdea"
                className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                placeholder="second idea"
              />

              <span
                className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 p-0.5 text-white text-xs transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
              >
                second idea
              </span>
            </label>
          </div>
          <button type="submit" className="self-center inline-block rounded bg-indigo-600 px-7 py-2 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500">Mix ideas !</button>
        </form>
      </div>
      <motion.h1 initial={{opacity: 0}} animate={{opacity: 0.3}} transition={{delay: 0.5, duration: 1}} className="self-center text-3xl font-extralight">Fabergram</motion.h1>
    </main>
  );
}
