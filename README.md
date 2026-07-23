# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

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

## Knowledge video workflow

Original reels stay locally in `src/assets/Pack 1` and `src/assets/Pack 2` and are ignored by Git. The website reads optimized derivatives from `public/media/knowledge`; metadata and the original-to-public filename mapping live in `src/data/knowledgeVideos.ts`.

Create a web MP4 without modifying its source:

```powershell
ffmpeg -i "src/assets/Pack 2/Ricardo Cobo Nº22.mp4" -map_metadata -1 -vf "scale=720:-2" -c:v libx264 -preset veryfast -crf 28 -profile:v high -level 4.0 -pix_fmt yuv420p -movflags +faststart -c:a aac -b:a 96k -ac 2 "public/media/knowledge/motivacion-real.mp4"
```

Create its lightweight poster:

```powershell
ffmpeg -ss 1.2 -i "src/assets/Pack 2/Ricardo Cobo Nº22.mp4" -frames:v 1 -vf "scale=540:-2" -c:v libwebp -quality 78 "public/media/knowledge/posters/motivacion-real.webp"
```

Always write to the public derivative paths; never overwrite the source packs.

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
