import React, { FunctionComponent } from 'react'
import Head from 'next/head'

interface DefaultLayoutProp {
    frontMatter: any
}

const DefaultLayout: FunctionComponent<DefaultLayoutProp> = ({
    children,
    frontMatter,
}) => {
    const pageTitle = frontMatter?.title ?? 'jem.dev'
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
