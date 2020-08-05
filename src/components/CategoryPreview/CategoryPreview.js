import React from 'react'
import Button from '@material-ui/core/Button'
import {useHistory} from 'react-router-dom'

import ProductStack from '../ProductStack/ProductStack'
import styles from './CategoryPreview.module.css'


export default function CategoryPreview({category}) {
    let history = useHistory()

    return (
        <div className={styles.Row}>
            <div className={styles.TopSection}>
                <span className={styles.Title}>{category}</span>
                <Button variant="outlined" onClick={() => history.push('/category/'+category.toLowerCase())}>
                    SHOP ALL
                </Button>
            </div>
            <ProductStack category={category} limit={5}/>
        </div>
    )
}
