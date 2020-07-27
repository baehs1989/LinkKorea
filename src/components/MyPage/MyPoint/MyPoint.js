import React from 'react'

import PageContainer from '../../../hoc/PageContainer'
import styles from './MyPoint.module.css'

export default function MyPoint() {
    return (
        <PageContainer>
            {/* <div className={styles.Container}>
                <div className={styles.InnerContainer}>
                    <div className={styles.Header}>Points</div>
                    <div>
                        <span className={styles.Title}>Available Points: </span> <span className={styles.Point}>{23}</span>
                    </div>
                </div>

            </div> */}

            <div className={styles.box}>
                <div className={styles.card}>
                    <div className={styles.bank}>
                        LinkKorea
                    </div>
                    <div className={styles.chip}></div>
                    <div className={styles.number}>
                        Customer Number : 123
                    </div>
                    <div className={styles.date_box}>
                        <div className={styles.valid}>Available Points</div>
                        <div className={styles.date}>12</div>
                    </div>
                    <div className={styles.card__footer}>
                        <div className={styles.name}>Hyung Soo Bae</div>
                        <img className={styles.logo} src="https://svgontheweb.com/assets/img/bblogo-optim2.svg" alt="logo"></img>
                    </div>
                </div>
            </div>

        </PageContainer>

    )
}
