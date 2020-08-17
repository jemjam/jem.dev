# jem.dev

This is the repository for my personal website, hosted at jem.dev as a next.js
website, deployed to vercel.

## Site Features:

-   We start with preact instead of react: keeping our default bundles minimal,
    less than half the size of a react based bundle.
-   MDX: Pages use markdown by default and can easily import **_layouts_** or
    **_components_** to enrich their developer / user experience.
-   Analytics based on Fathom: I like the idea of tracking _some_ details, but I
    want to keep things as minimally invasive as possible. (FB tracking scripts
    etc go much too far in my humble opinion.)
-   That's mostly it for now! Keeping this barebones for now, I want to add some
    bundle size reporting before I include too much more and always try to keep
    things light.

I'm operating this site as a digital garden, so even though there isn't much
here today, I hope to grow on this moving forward.

What follows is the rest of the standard `next.js` readme...

I chose Yarn because I like cats and fluffy warm sweaters. Therefore, I've
included a `yarn.lock` file and have optimized for using Yarn rather than npm.

---

## Local Dev

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

You can start editing the page by modifying `pages/index.js` (and other pages
within the `pages` directory). Some pages auto-update as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js
    features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out
[the Next.js GitHub repository](https://github.com/zeit/next.js/) - your
feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the
[Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out our
[Next.js deployment documentation](https://nextjs.org/docs/deployment) for more
details.
