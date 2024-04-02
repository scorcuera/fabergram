'use client'

import { useState } from "react";
import { createIdea } from "@/app/lib/actions";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import Form from "./ui/form";

export default function Home() {
  const [idea, setIdea] = useState("");

  const FormAction = async (formData: any) => {
    const data = await createIdea(formData) as string;
    setIdea(data);
  }

  return (
    <>
      <div className="container flex flex-col items-center">
        <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 100 }} transition={{ duration: 0.2 }} className="pb-20 text-3xl md:text-5xl">Let's create some ideas</motion.h3>
        <Form handleSubmit={FormAction} />
      </div>
      <p>
        <ReactTyped strings={[idea]} typeSpeed={50} />
      </p>
      <footer>
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 0.3 }} transition={{ delay: 1, duration: 1 }} className="self-center text-3xl font-extralight">Fabergram</motion.h1>
      </footer>
    </>
  );
}
