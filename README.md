# next-demo

A tiny Next.js (App Router) site for trying `deployer`.

- `/` home, with a client-side counter and a variable read at build time
- `/about` a plain page
- `/blog` and `/blog/<slug>` pages generated at build time (`generateStaticParams`)
- anything else shows the custom 404 page

```sh
npm install
npm run dev      # http://localhost:3000
npm run build    # writes the static site to out/
```

Deploy it with `deployer deploy . --project next-demo` (or `--remote` to build in AWS).
Set `NEXT_PUBLIC_GREETING` with `deployer env set -p next-demo NEXT_PUBLIC_GREETING "hi"` for remote builds.
