import React from 'react'
import Link from 'next/link'

import styles from './Header.module.scss'

const WordMark = () => <h1>{`<jem.dev />`}</h1>

const Logo = () => (
    <Link href="/">
        <span className={styles.logoEmoji}>🌱</span>
    </Link>
)

const MenuLink = () => <a href="#nav">Menu</a>

/**
 * EveryLayout: Switcher
 * At smaller layouts this shows as a bar across the top
 * At wider layouts it becomes a full right sidebar
 */
const HeadSidebar: React.FunctionComponent = () => (
    <div className={styles.pageHeader}>
        <Logo />
        <WordMark />
        <MenuLink />
    </div>
)
export default HeadSidebar
