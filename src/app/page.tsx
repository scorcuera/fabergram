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
        <motion.h3 initial={{opacity: 0}} animate={{opacity: 100}} transition={{duration: 0.2}} className="pb-20 text-3xl md:text-5xl">Let's create some ideas</motion.h3>
        <motion.form initial={{x:-100, opacity: 0}} animate={{x:0, opacity: 100}} transition={{ duration: 0.5, delay: 0.5}} action={FormAction} className="w-full flex flex-col px-4">
          <div className="container grid gap-8 grid-cols-1 md:grid-cols-2">
            <label
              htmlFor="firstIdea"
              className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
              <input
                type="text"
                name="firstIdea"
                className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 py-2"
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
                className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 py-2"
                placeholder="second idea"
              />

              <span
                className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 p-0.5 text-white text-xs transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
              >
                second idea
              </span>
            </label>
          </div>
          <button type="submit" className="self-center inline-block rounded bg-indigo-600 px-7 py-2 mt-12 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500">Mix ideas !</button>
        </motion.form>
      </div>
      <motion.h1 initial={{opacity: 0}} animate={{opacity: 0.3}} transition={{delay: 1, duration: 1}} className="self-center text-3xl font-extralight">Fabergram</motion.h1>
    </main>
  );
}
