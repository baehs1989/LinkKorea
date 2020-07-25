import React from 'react'
import styles from './ProductCard.module.css'

export default function ProductCard() {
    return (
        <div className={styles.Card}>
            {/* <div className={styles.Badge}>
                TEST
            </div> */}
            <div className={styles.TopSection}>
                <div className={styles.ImageOuter}>
                    <img className={styles.Image} src="https://www.ctshirts.com/on/demandware.static/-/Sites-ctshirts-master/default/dw541f2046/hi-res/CSR0749WHT_a.jpg" alt="item1" />
                    <div className={styles.DetailButton}>
                        Show Detail
                    </div>
                </div>
                <div className={styles.ProductTitle}>
                    아이폰 파스텔 핸드폰 목걸이 폰스트랩 케이스 김혜수
                </div>
            </div>
            <div className={styles.Descriptions}>
                <div className={styles.Store}>Gmarket</div>
                <div className={styles.Price}>CA$79.00</div>
            </div>
        </div>
    )
}
