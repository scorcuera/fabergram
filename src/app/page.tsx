'use client'

import { createIdea } from "@/app/lib/actions";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ReactTyped } from "react-typed";
import Form from "@/app/ui/form";

export default function Home() {
  const router = useRouter();

  const FormAction = async (formData: any) => {
    const data = await createIdea(formData) as string;
    if (data) {
      localStorage.setItem("idea", JSON.stringify(data));
      router.push("/idea");
    }
  }

  return (
    <>
      <div className="container flex flex-col items-center">
        <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 100 }} transition={{ duration: 0.2 }} className="pb-20 text-3xl md:text-5xl">Let's create some ideas</motion.h3>
        <Form handleSubmit={FormAction} />
      </div>
      <p>
        <ReactTyped strings={[""]} />
      </p>
      <footer>
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 0.3 }} transition={{ delay: 1, duration: 1 }} className="self-center text-3xl font-extralight">Fabergram</motion.h1>
      </footer>
    </>
  );
}
