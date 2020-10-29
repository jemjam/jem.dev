import React, {FunctionComponent, ReactNode} from 'react'
import styles from './PageLayout.module.scss'

interface PageProps {
  header?: ReactNode
  footer?: ReactNode
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
                <section className={styles.contentArea}>
                  {children}
                </section>
            </main>
            <footer className={styles.pageFooter}>{footer}</footer>
        </div>
    </div>
)

export default Page
