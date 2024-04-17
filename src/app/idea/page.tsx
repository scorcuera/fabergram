'use client'

import { useEffect, useState } from "react";
import { ReactTyped } from "react-typed";

export default function Idea() {
    const [idea, setIdea] = useState("");

    const getIdeaFromLocalStorage = () => {
        return JSON.parse(window.localStorage.getItem("idea") as string);
    }

    useEffect(() => {
        setIdea(getIdeaFromLocalStorage());
    }, [])

    return (
        <>
            <p className="px-8">
                <ReactTyped strings={[idea]} typeSpeed={50} />
            </p>
            <footer>
                <h1 className="opacity-30 self-center text-3xl font-extralight">Fabergram</h1>
            </footer>
        </>
    )
}
