import React from 'react'
import styles from './ProductCard.module.css'
import {useHistory} from 'react-router-dom'

export default function ProductCard({item}) {
    let history = useHistory()

    var onSelect = () => {
        history.push('/product/'+item.id)
    }

    return (
        <div className={styles.Card} onClick={onSelect}>
            {/* <div className={styles.Badge}>
                TEST
            </div> */}
            <div className={styles.TopSection}>
                <div className={styles.ImageOuter}>
                    <img className={styles.Image} src={item.thumbnail?item.thumbnail:"https://cdn-image02.casetify.com/usr/8746/1688746/~v14/6705211_iphone11__color_white_16000268.png.560x560-w.m80.jpg"} alt="item1" />
                    <div className={styles.DetailButton}>
                        Show Detail
                    </div>
                </div>
                <div className={styles.ProductTitle}>
                    {item.name}
                </div>
            </div>
            <div className={styles.Descriptions}>
                <div className={styles.Store}>{item.store.name}</div>
                <div className={styles.Price}>{item.price}</div>
            </div>
        </div>
    )
}
