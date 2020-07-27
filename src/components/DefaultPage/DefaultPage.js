import React from 'react'

import PageContainer from '../../hoc/PageContainer';
import styles from './DefaultPage.module.css'

export default function DefaultPage({title, children, maxWidth='100%'}) {
    return (
        <PageContainer>
            <div className={styles.Container}>
                <div className={styles.Header}>
                    {title}
                </div>
                <div style={{maxWidth:maxWidth}}>
                    {children}
                </div>
            </div>
        </PageContainer>
    )
}
