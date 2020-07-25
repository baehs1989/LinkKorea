import React from 'react'
import Button from '@material-ui/core/Button'

import ProductStack from '../ProductStack/ProductStack'
import styles from './CategoryPreview.module.css'


export default function CategoryPreview() {
    return (
        <div className={styles.Row}>
            <div className={styles.TopSection}>
                <span className={styles.Title}>Book</span>
                <Button variant="outlined">
                    SHOP ALL
                </Button>
            </div>
            <ProductStack/>
        </div>
    )
}
