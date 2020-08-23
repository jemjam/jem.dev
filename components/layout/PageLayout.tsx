import React from 'react'
import styles from './PageLayout.module.scss'

const Page = () => (
    <div className={styles.pageWrapper}>
        <header className={styles.pageHeader}>header stuff in here</header>
        <div className={styles.pageContentWrapper}>

            <main className={styles.pageContent}>
                <div className={styles.contentArea}>
                  <h1>Heading</h1>
                  <p>This is content</p>


                </div>
            </main>
            <footer className={styles.pageFooter}>footer</footer>
        </div>
    </div>
)

export default Page
