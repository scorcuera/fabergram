'use client'

import { ReactTyped } from "react-typed";

export default function Idea() {
    const idea = JSON.parse(localStorage.getItem("idea") as string);

    return (
        <>
            <p>
                <ReactTyped strings={[idea]} typeSpeed={50} />
            </p>
            <footer>
                <h1 className="opacity-30 self-center text-3xl font-extralight">Fabergram</h1>
            </footer>
        </>
    )
}
