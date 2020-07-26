import React from 'react'
import {useParams} from "react-router-dom";

import ProductStack from '../ProductStack/ProductStack';
import PageToolBar from '../PageToolBar/PageToolBar';

import styles from './CatgoryPage.module.css'

export default function CategoryPage() {
    let {name} = useParams()

    return (
        <div>
            <div className={styles.Header}>
                <div className={styles.CategoryTitle}>
                    {name}
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
