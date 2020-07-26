import React from 'react'

import ProductStack from '../ProductStack/ProductStack';
import PageToolBar from '../PageToolBar/PageToolBar';

import styles from './CatgoryPage.module.css'

export default function CategoryPage() {
    return (
        <div>
            <div className={styles.Header}>
                <div className={styles.CategoryTitle}>
                    Book
                </div>
            </div>
            <div className={styles.Body}>
                <div className={styles.ToolBar}>
                    <PageToolBar/>
                </div>
                <div className={styles.ProductList}>
                    <ProductStack/>
                </div>
            </div>

        </div>
    )
}
