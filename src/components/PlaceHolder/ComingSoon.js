import React from 'react'

import PageContainer from '../../hoc/PageContainer'
import styles from './ComingSoon.module.css'

export default function ComingSoon() {
    return (
        <PageContainer>
            <div className={styles.Container}>
                <div>
                    COMING SOON
                </div>
                <div>
                    This page is under construction.
                </div>
            </div>
        </PageContainer>
    )
}
