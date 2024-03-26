import { motion } from "framer-motion"

export default function Form({handleSubmit} : any) {

    return (
        <motion.form initial={{x:-100, opacity: 0}} animate={{x:0, opacity: 100}} transition={{ duration: 0.5, delay: 0.5}} action={handleSubmit} className="w-full flex flex-col px-4">
          <div className="container grid gap-8 grid-cols-1 md:grid-cols-2">
            <label
              htmlFor="firstIdea"
              className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
              <input
                type="text"
                name="firstIdea"
                className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 px-2 py-2 w-full"
                placeholder="first idea"
                autoComplete="off"
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
                className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 px-2 py-2 w-full"
                placeholder="second idea"
                autoComplete="off"
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
    )
};
