import React, { FunctionComponent } from 'react'
import styles from './PageLayout.module.scss'

interface PageProps {
  header?: FunctionComponent
  footer?: FunctionComponent
}

/**
 * PageLayout
 * 
 * Root component that provides the styles and wrappers necessary for this
 * sidebar layout.
 */
const Page:FunctionComponent<PageProps> = ({children, header, footer}) => (
    <div className={styles.pageWrapper}>
        {header && <header className={styles.pageHeader}>{header}</header>}
        <div className={styles.pageContentWrapper}>

            <main className={styles.pageContent}>
                <div className={styles.contentArea}>
                  {children}
                </div>
            </main>
            <footer className={styles.pageFooter}>{footer}</footer>
        </div>
    </div>
)

export default Page
