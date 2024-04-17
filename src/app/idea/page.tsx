'use client'

import { ReactTyped } from "react-typed";

export default function Idea() {
    const idea = JSON.parse(window.localStorage.getItem("idea") as string);

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
