import React from 'react'
import Head from 'next/head'

interface TemplateWrapper {
    children: React.ReactChildren
    frontMatter?: any
}

const VerticallyCentered: React.FunctionComponent<TemplateWrapper> = (
    props,
) => {
    const pageTitle = props?.frontMatter?.title ?? "jem.dev"
    return (
        <div className="pageWrapper">
            <Head>
                <title>{pageTitle}</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <main>{props.children}</main>
            <style jsx>
                {`
                    .pageWrapper {
                        width: 100vw;
                        height: 100vh;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    main {
                        margin: 0 auto;
                        max-width: 70ch;
                        padding: 1rem;
                        max-height: 100%;
                    }
                `}
            </style>
            <style global jsx>{`
                body {
                    font-family: sans-serif;
                    font-size: 1.45rem;
                    line-height: 1.25em;
                    margin: 0;
                    padding: 0;
                    color: #36392d;
                    background: #cad5a6;
                }
                h1, h2, h3, h4 { font-weight: normal; }
                h1 a, h2 a, h3 a, h4a {
                    text-decoration: none;
                }
                a {
                    color: #47590d;
                }
                @media (prefers-color-scheme: dark) {
                    body {
                        color: #cad5a6;
                        background: #36392d;
                        font-weight: lighter;
                    }
                    a {
                        color: #8db01a;
                    }
                }
            `}</style>
        </div>
    )
}

export default VerticallyCentered
