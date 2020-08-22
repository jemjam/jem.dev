import React from 'react'

import styles from './Header.module.css'

const WordMark = () => <h1>{`<jem.dev />`}</h1>

const Logo = () => (
    <span>
        🌱
        <style jsx>{`
            span {
                font-size: 4rem;
            }
        `}</style>
    </span>
)

const MenuLink = () => <a href="#nav">Menu</a>

/**
 * EveryLayout: Switcher
 * At smaller layouts this shows as a bar across the top
 * At wider layouts it becomes a full right sidebar
 */
const HeadSidebar: React.FunctionComponent = () => (
    <header className={styles.pageHeader}>
        <div>
            <Logo />
            <WordMark />
            <MenuLink />
        </div>
    </header>
)
export default HeadSidebar
