/**
 * _app.js
 * 
 * Next.js default application wrapper
 * This template is where global application wrappers or styling
 * can be loaded.
 */

import React from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { MDXProvider } from '@mdx-js/react'
import * as Fathom from 'fathom-client'

import Link from 'next/link'

const PUBLIC = process.env.NEXT_PUBLIC_DEMO

// Some codeblock styles for now...
import 'highlight.js/styles/shades-of-purple.css'

const components = {
    wrapper: ({ children, ...props }) => {
        console.log(children.map((child) => child.props.mdxType))
        return <>{children}</>
    },
    a: Link, // Ensures our page navigation is snappy
}

const Application = ({ Component, pageProps }) => {
    const router = useRouter()

    const FATHOM_SITE_ID = process.env.NEXT_PUBLIC_ANALYTICS_SITE_ID
    const FATHOM_URL = process.env.NEXT_PUBLIC_ANALYTICS_URL

    useEffect(() => {
        console.log("We are initing analtyics, but don't have values?", { FATHOM_SITE_ID, FATHOM_URL })
        // Initialize Fathom when the app loads
        Fathom.load(FATHOM_SITE_ID, {
            url: FATHOM_URL,
        })

        function onRouteChangeComplete() {
            Fathom.trackPageview()
        }
        // Record a pageview when route changes
        router.events.on('routeChangeComplete', onRouteChangeComplete)

        // Unassign event listener
        return () => {
            router.events.off('routeChangeComplete', onRouteChangeComplete)
        }
    }, [])

    return (
        <MDXProvider components={components}>
            <Component {...pageProps} />
        </MDXProvider>
    )
}

export default Application
