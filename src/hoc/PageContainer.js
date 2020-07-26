import React from 'react'
import styles from './PageContainer.module.css'

export default function PageContainer({children}) {
    return (
        <div className={styles.Container}>
            {children}
        </div>
    )
}
