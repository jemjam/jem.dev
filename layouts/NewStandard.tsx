import React from 'react'
import Head from 'next/head'

import PageHeader from 'components/PageHeader'
import HeadSidebar from 'components/page/HeadSidebar'
import { PageWrapper, WithRightSidebar } from 'components/layout'
import styles from 'layouts/styles.module.css'

interface TemplateWrapper {
    children: React.ReactElement
    frontMatter?: any
}

const PageLayout: React.FunctionComponent<TemplateWrapper> = (props) => {
    const pageTitle = props?.frontMatter?.title ?? 'jem.dev'
    return (
        // <PageWrapper className={styles.pageWrap}>
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <WithRightSidebar sidebar={<HeadSidebar />}>

                <main>{props.children}</main>
                <footer>This is the page footer</footer>
            </WithRightSidebar>
        </>
        // </PageWrapper>
    )
}

export default PageLayout
