<h1 align="center" style="display: block; font-weight: 100 ; margin-block-start: 1em; margin-block-end: 1em;">
Fabergram
</h1>

![Image of Fabergram homepage](/public/readme_cover_image.png)


## Introduction

Fabergram helps you with your creativity process. If you are a creative person, you might have already felt blocked, as if you were missing a tiny but essential piece in the puzzle.

Fabergram might come in handy to unblock these kinds of moments. Or even if you just want to play with it and see what it has to say. Mix your ideas, shake them, and taste the resulting flavor. You might like it, or maybe not. But don't discard the brand new idea; you might find it useful again somewhere in the future...

You can try it out here: https://fabergram.vercel.app/


## Features

- [x] Generate a brand new idea from two ideas. 
- [ ] Generate a brand new idea from several ideas.
- [ ] You can choose what are you going to use the idea for.
- [ ] You can save the most useful ideas for later inspiration.


## Installation

To install the project, run the following command:

```shell
npm i
```

If you want to use your own AI model, you can provide your own OpenAI API secret in the `env` file, as shown in `env.example`:

```YAML
OPENAI_API_SECRET= yoursecret
```


## Usage

To start the project, run the following command:

```shell
npm run dev
```

Or 

```shell
npm run dev-fast
```

## Tech Stack

This project is built with a powerful set of technologies designed for building scalable, modern web applications. Here's a breakdown of the main technologies used:

- Next.js: A React framework that enables functionality such as server-side rendering and generating static websites for React-based web applications. It provides the backbone of our project, facilitating fast, scalable, and SEO-friendly web applications.

- TypeScript: A superset of JavaScript that adds static type definitions. TypeScript is used to ensure type safety and improve the development experience with better tooling support, leading to more robust and error-free code.

- Tailwind CSS: A utility-first CSS framework for rapidly building custom designs. Tailwind CSS is utilized for styling our application, allowing us to maintain consistency and scalability in our design system with minimal effort.

- OpenAI API: Provides access to powerful AI models such as GPT (Generative Pre-trained Transformer).