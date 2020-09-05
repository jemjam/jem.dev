import React, { FunctionComponent, ReactNode } from 'react'
import styles from './PageLayout.module.scss'

/**
 * PageWrappers
 *
 * This is purely for constraining aspects of our "Pages". The page wrapper
 * wraps everything, including the PageHeader. The contentWrapper on the other
 * hand is meant to only wrap the main content section of the page.
 *
 * The Pagewrapper is generally the home of top level site design elements, such
 * as a SITE header or footer.
 *
 * Within the Content region of the page, we assume that the main content and
 * additional <Headers> or <Footers> relevant to the page content itself may be
 * present.
 */

export const Page: FunctionComponent = ({ children }) => (
    <div className={styles.pageWrapper}>{children}</div>
)

export const Content: FunctionComponent = ({ children }) => (
    <div className={styles.pageContentWrapper}>{children}</div>
)

