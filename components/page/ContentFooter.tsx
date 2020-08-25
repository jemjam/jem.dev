import React from 'react'

import styles from './ContentFooter.module.scss'

const currentYear = new Date().getFullYear()

const PageFooter: React.FunctionComponent = () => (
    <>
        <div className={styles.contentFooter}>
            <p>Copyright &copy; {currentYear} jem.dev</p>
        </div>
    </>
)

export default PageFooter
