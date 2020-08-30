import React, { FunctionComponent } from 'react'
import Head from 'next/head'

/**
 * The default mdx layout:
 * We use this to set page head, and then also wrap the post
 * with a header/footer section
 */

interface DefaultLayoutProp {
    frontMatter: any
}

export const getStaticProps = (_: any) => {
    return { props: { pageContext: "extras" } }
}

const DefaultLayout: FunctionComponent<DefaultLayoutProp> = ({
    children,
    frontMatter,
    ...otherProps
}) => {
    const pageTitle = frontMatter?.title ?? 'jem.dev'
    console.log('default layout otherProps?', otherProps)
    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <header className="contentHeader">
                {frontMatter?.title && <h1>{pageTitle}</h1>}
            </header>
            <div className="contentRegion">{children}</div>
            {frontMatter?.date && (
                <footer className="contentFooter">
                    <hr />
                    <span>posted: {frontMatter?.date ?? '-unknown-'}</span>
                </footer>
            )}
        </>
    )
}

export default DefaultLayout
