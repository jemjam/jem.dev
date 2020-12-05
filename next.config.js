const withPreact = require('next-plugin-preact');
const process = require('process')
const images = require('remark-images')
const emoji = require('remark-emoji')
const highlight = require('remark-highlight.js')

const redirects = require('./redirects')

// Standard (non-enhanced) mdx approach...
const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [images, emoji, highlight],
        rehypePlugins: [],
    }
})

module.exports = withPreact(withMDX({
    pageExtensions: ['js', 'jsx', 'mdx', 'tsx', 'ts'],
    env: {
        NEXT_PUBLIC_ANALYTICS_SITE_ID: process.env.FATHOM_SITE_ID,
        NEXT_PUBLIC_ANALYTICS_URL: process.env.FATHOM_URL,
    },
    redirects,
}))