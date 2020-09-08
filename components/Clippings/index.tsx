import React, {FunctionComponent} from 'react'
import styles from './clippings.module.scss'

const GardenClippings:FunctionComponent = ({children}) => (
    <div className={styles.clippings}>
        <h2 className={styles['clippings-heading']}>Today's Clippings</h2>
        {children}
    </div>
)

export default GardenClippings