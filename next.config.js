const process = require('process')
const images = require('remark-images')
const emoji = require('remark-emoji')
const highlight = require('remark-highlight.js')
const withMdxEnhanced = require('next-mdx-enhanced')

// Standard (non-enhanced) mdx approach...
const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [images, emoji, highlight],
        rehypePlugins: [],
    }
})

// For now we're using enchance layouts tho...
// const withMdx = withMdxEnhanced({
//     layoutPath: 'layouts',
//     // defaultLayout: true,
//     fileExtensions: ['mdx'],
//     remarkPlugins: [images, emoji, highlight],
//     rehypePlugins: [],
//     extendFrontMatter: {
//         process: (mdxContent, frontMatter) => {},
//         phase: 'prebuild|loader|both',
//     },
// })

module.exports = withMDX({
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Note: we provide webpack above so you should not `require` it
        // Perform customizations to webpack config
        // Important: return the modified config
        config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))
        preactAliases = {
            react: 'preact/compat',
            'react-dom': 'preact/compat',
            'react-ssr-prepass': 'preact-ssr-prepass',
        }
        config.resolve.alias = {
            ...config.resolve.alias,
            ...preactAliases,
        }
        return config
    },
    webpackDevMiddleware: (config) => {
        // Perform customizations to webpack dev middleware config
        // Important: return the modified config
        return config
    },
    pageExtensions: ['js', 'jsx', 'mdx', 'tsx', 'ts'],
    env: {
        NEXT_PUBLIC_ANALYTICS_SITE_ID: process.env.FATHOM_SITE_ID,
        NEXT_PUBLIC_ANALYTICS_URL: process.env.FATHOM_URL,
    },
})