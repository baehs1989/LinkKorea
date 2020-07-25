import React from 'react'
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
