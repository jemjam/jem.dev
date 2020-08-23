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
import PageLayout from 'components/layout/PageLayout'
import * as Fathom from 'fathom-client'

import PageHeader from 'components/page/HeadSidebar'
import PageFooter from 'components/page/ContentFooter'
import Link from 'next/link'
import "components/global-styles.css"

// Some codeblock styles for now...
import 'highlight.js/styles/shades-of-purple.css'

const components = {
    a: Link, // Ensures our page navigation is snappy
}

const Application = ({ Component, pageProps }) => {
    const router = useRouter()

    const FATHOM_SITE_ID = process.env.NEXT_PUBLIC_ANALYTICS_SITE_ID
    const FATHOM_URL = process.env.NEXT_PUBLIC_ANALYTICS_URL

    useEffect(() => {
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
        <PageLayout header={<PageHeader />} footer={<PageFooter />}>
            <MDXProvider components={components}>
                <Component {...pageProps} />
            </MDXProvider>
        </PageLayout>
    )
}

export default Application
