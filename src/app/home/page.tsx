'use client'

import { createIdea } from "@/app/lib/actions";
import { motion } from "framer-motion";
import Form from "../ui/form";

export default function Home() {
  const FormAction = async (formData: any) => {
    const data = await createIdea(formData);
    console.log(data)
  }

  return (
    <main className="flex flex-col h-4/6 w-96 md:w-screen items-center justify-between">
      <div className="container flex flex-col items-center">
        <motion.h3 initial={{opacity: 0}} animate={{opacity: 100}} transition={{duration: 0.2}} className="pb-20 text-3xl md:text-5xl">Let's create some ideas</motion.h3>
        <Form handleSubmit={FormAction} />
      </div>
      <motion.h1 initial={{opacity: 0}} animate={{opacity: 0.3}} transition={{delay: 1, duration: 1}} className="self-center text-3xl font-extralight">Fabergram</motion.h1>
    </main>
  );
}
