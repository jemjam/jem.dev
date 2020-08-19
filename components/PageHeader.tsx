import React from 'react'
import Link from 'next/link'

export default () => {
    return (
        <header>
            <h1>
                <Link href="/">🌱 jem.dev</Link>
            </h1>
            <style jsx>{`
                header {
                    max-width: 70ch;
                    margin: 0 auto;
                }
                h1 {
                  font-size: 0.8em;
                }
            `}</style>
        </header>
    )
}
