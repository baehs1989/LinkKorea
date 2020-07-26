import React from 'react'
import {useParams} from "react-router-dom";

import ProductStack from '../ProductStack/ProductStack';
import PageToolBar from '../PageToolBar/PageToolBar';

import styles from './CatgoryPage.module.css'

const styleMapp={
    'book':{
        backgroundPosition: "center 20%"
    },
    'fashion':{
        backgroundPosition: "center 25%",
        color:'white'
    },
    'living':{
        backgroundPosition: "center 70%"
    },
    'beauty':{
        backgroundPosition: "center 10%",
        color:'white'
    },
    'kids':{
        backgroundPosition: "center 30%",
    }

}

export default function CategoryPage() {
    let {name} = useParams()

    return (
        <div>
            <div className={styles.Header} style={{backgroundImage:`url("/assets/images/${name}.jpg")`, ...styleMapp[name]}}>
                <div className={styles.HeaderBackground}>

                </div>
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
