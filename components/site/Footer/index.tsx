import React from 'react'
import Link from 'next/link'

import styles from './Footer.module.scss'

const currentYear = new Date().getFullYear()

const ColophonLink = () => (
    <span className={styles.colophonLink}>
        <Link href="/colophon">colophon</Link>
    </span>
)

const PageFooter: React.FunctionComponent = () => (
    <>
        <div className={styles.contentFooter}>
            <p>Copyright &copy; {currentYear} jem.dev <ColophonLink /></p>
        </div>
    </>
)

export default PageFooter
