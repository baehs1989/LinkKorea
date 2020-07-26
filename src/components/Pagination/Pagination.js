import React, {useState} from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import styles from './Pagination.module.css';

export default function Pagination() {
    const [counter] = useState(1);
    const [last] = useState(5);

    return (
        <div className={styles.Container}>
            {/* <div className={styles.Counter}>{counter}/{last}</div>
            <button className={clsx(styles.Paginate, styles.Left)}><i></i><i></i></button>
            <button className={clsx(styles.Paginate, styles.Right)}><i></i><i></i></button> */}
            <ArrowBackIosIcon className={styles.Previous}/>
            <div className={styles.Counter}>{counter}/{last}</div>
            <ArrowBackIosIcon className={styles.Next}/>
        </div>

    )
}
