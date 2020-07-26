import React from 'react'
import Pagination from '../Pagination/Pagination';
import SortOption from '../SortOption/SortOption'

import styles from './PageToolBar.module.css'

export default function PageToolBar() {
    return (
        <div className={styles.Container}>
            <div><SortOption/></div>
            <div><Pagination/></div>
        </div>
    )
}
