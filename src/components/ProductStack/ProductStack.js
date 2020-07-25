import React from 'react'
import Grid from '@material-ui/core/Grid'
import ProductCard from './ProductCard'
import styles from './ProductStack.module.css'
export default function ProductStack() {
    return (
        <div className={styles.Cards}>
            <div className={styles.Card}>
                <ProductCard/>
            </div>
            <div className={styles.Card}>
                <ProductCard/>
            </div>
            <div className={styles.Card}>
                <ProductCard/>
            </div>
            <div className={styles.Card}>
                <ProductCard/>
            </div>
            <div className={styles.Card}>
                <ProductCard/>
            </div>
        </div>
    )
}
