import React from 'react'
import Link from 'next/link'

import styles from './Header.module.scss'

const WordMark = () => (
    <h1 className={styles.logoWordMark}>
        {`<`}
        <span className={styles.logoWordText}>{`jem.dev`}</span>
        {`/>`}
    </h1>
)

const Logo = () => (
    <Link href="/">
        <span className={styles.logoEmoji}>🌱</span>
    </Link>
)

const MenuLink = () => <a href="#nav">Menu</a>

type url = string
interface MenuMap {
    [key: string]: url
}

/**
 * MAIN MENU:
 * It's a map of names (to show in the <a>) to their urls (the page
 * to navigate to when you click on the name).
 */
const menu: MenuMap = {
    Home: '/',
    'About': '/about',
    'Notes': '/notes',
    divider1: '---',
    'Contact me (twitter)':
        'https://twitter.com/messages/compose?recipient_id=42684557',
}

interface menuProps {
    menu: MenuMap
}
const ShortMenu: React.FunctionComponent<menuProps> = ({ menu = {} }) => (
    <nav>
        {Object.keys(menu).map((item) => {
            if (menu[item] === '---') return <span className={styles.divider} />
            return (
                <Link href={menu[item]}>
                    <a className={styles.pageNavigation}>{item}</a>
                </Link>
            )
        })}
    </nav>
)

/**
 * EveryLayout: Switcher
 * At smaller layouts this shows as a bar across the top
 * At wider layouts it becomes a full right sidebar
 */
const HeadSidebar: React.FunctionComponent = () => (
    <div className={styles.pageHeader}>
        <Logo />
        <WordMark />
        <ShortMenu menu={menu} />
    </div>
)
export default HeadSidebar
