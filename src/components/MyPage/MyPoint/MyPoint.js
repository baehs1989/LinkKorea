import React from 'react'

import PageContainer from '../../../hoc/PageContainer'
import styles from './MyPoint.module.css'

export default function MyPoint() {
    return (
        <PageContainer>
            <div className={styles.Container}>
                <div className={styles.InnerContainer}>
                    <div className={styles.Header}>Points</div>
                    <div>
                        <span className={styles.Title}>Available Points: </span> <span className={styles.Point}>{23}</span>
                    </div>
                </div>

            </div>
        </PageContainer>

    )
}
