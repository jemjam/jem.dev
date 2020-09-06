/**
 * _app.js
 *
 * Next.js default application wrapper
 * This template is where global application wrappers or styling
 * can be loaded.
 */

import React, { FunctionComponent } from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { MDXProvider } from '@mdx-js/react'
import * as Fathom from 'fathom-client'

import DefaultLayout from 'layouts/default'
import App, { AppProps } from 'next/app'

import PageLayout from 'components/page'
import SiteHeader from 'components/site/Header'
import PageFooter from 'components/page/ContentFooter'
import Link from 'next/link'
import 'components/global-styles.scss'

// Some codeblock styles for now...
import 'highlight.js/styles/shades-of-purple.css'

const components = {
    a: Link, // Ensures our page navigation is snappy
    wrapper: DefaultLayout,
}

// Type ApplicationProps
const Application: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
    const router = useRouter()

    const FATHOM_SITE_ID = process.env.NEXT_PUBLIC_ANALYTICS_SITE_ID
    const FATHOM_URL = process.env.NEXT_PUBLIC_ANALYTICS_URL

    useEffect(() => {
        // Initialize Fathom when the app loads
        if (FATHOM_SITE_ID !== undefined) {
            Fathom.load(FATHOM_SITE_ID, {
                url: FATHOM_URL,
            })
        }

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

    const pageTitle = pageProps?.frontMatter?.title ?? 'jem.dev'
    console.log('_app.tsx pageProps:', pageProps)

    return (
        <PageLayout header={<SiteHeader />} footer={<PageFooter />}>
            <MDXProvider components={components}>
                <Component {...pageProps} />
            </MDXProvider>
        </PageLayout>
    )
}

export default Application
