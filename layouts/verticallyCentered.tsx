import React from 'react'

interface TemplateWrapper {
    children: React.ReactChildren
}

const VerticallyCentered:React.FunctionComponent<TemplateWrapper> = (props) => {
    return (
        <div className="pageWrapper">
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
                    margin: 0;
                    padding: 0;
                    color: white;
                    background: #7b635a;
                }
                h1 a { text-decoration: none; }
            `}</style>
        </div>
    )
}

export default VerticallyCentered