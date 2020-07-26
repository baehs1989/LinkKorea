import React from 'react'
import styles from './ProductCard.module.css'
import {useHistory} from 'react-router-dom'

export default function ProductCard() {
    let history = useHistory()

    var onSelect = () => {
        history.push('/product/2')
    }

    return (
        <div className={styles.Card} onClick={onSelect}>
            {/* <div className={styles.Badge}>
                TEST
            </div> */}
            <div className={styles.TopSection}>
                <div className={styles.ImageOuter}>
                    <img className={styles.Image} src="https://cdn-image02.casetify.com/usr/8746/1688746/~v14/6705211_iphone11__color_white_16000268.png.560x560-w.m80.jpg" alt="item1" />
                    <div className={styles.DetailButton}>
                        Show Detail
                    </div>
                </div>
                <div className={styles.ProductTitle}>
                    아이폰 파스텔 핸드폰 목걸이 폰스트랩 케이스
                </div>
            </div>
            <div className={styles.Descriptions}>
                <div className={styles.Store}>Gmarket</div>
                <div className={styles.Price}>CA$79.00</div>
            </div>
        </div>
    )
}
