# Astro View Transition Demo

[**Demo Link**](https://trailbuddy-astro-view-transition-demo.netlify.app/)

This is a demo project that showcases view transitions inside of an Astro project using [Astro's opt-in client-side routing](https://docs.astro.build/en/guides/view-transitions/) made specifically for the new [View Transition API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API).

To read more about the process behind setting up this project, check out our article [`COMING SOON!`] which goes into greater detail on the design and development collaboration that went into building this demo.

Want to jump into the code right away? Checkout the following links to get you straight into the code in a virtual sandbox:

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/~/github.com/vigetlabs/trailbuddy-view-transition)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?skip_quickstart=true&machine=basicLinux32gb&repo=698412387&ref=main&geo=UsWest)

## 🔥 Getting Started

To get started with this project, you'll need to have `Node.js` and `npm` installed on your machine. Once you have those installed, you can follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the project dependencies.
4. Run `npm run dev` to start the development server.
5. Open your web browser and navigate to `http://localhost:4321` to view the demo.

## 🚀 Project Structure

This project leverages [Astro's Content Collections](https://docs.astro.build/en/tutorials/add-content-collections/) to handle the various blog like pages. As such, the project structure contains the following folders and files:

```text
/
├── public/
│   └── ...
├── src/
│   ├── assets/
│   │   └── ...
│   ├── components/
│   │   └── ...
│   ├── content/
│   │   └── ...
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── [slug].astro
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` and `src/content/` directories. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, are placed in the `assets/` directory while background images, videos, and fonts are placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out our [View Transitions in Astro](https://www.viget.com/articles/view-transitions-in-astro/) article which delves into the specifics on how to use view transitions inside of Astro in a simple and easy to follow way, or check out [Astro's documentation](https://docs.astro.build/en/guides/view-transitions/) on using view transitions.

## 🥇 Credits

This demo project was created by [Eric Fuhrmann](https://www.viget.com/about/team/efuhrmann/) and designed by [Andrew Greeson](https://www.viget.com/about/team/agreeson/).

The view transition animation was inspired by [Maxi Ferreira's](https://twitter.com/charca) View Transition [demo](https://live-transitions.pages.dev/).
