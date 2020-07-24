import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List'
import AppsIcon from '@material-ui/icons/Apps';

import styles from './Category.module.css';


export default function Category() {
    return (
        <div className={styles.Category}>
            <div className={styles.CategoryHeader}>
                <AppsIcon/>
            </div> 

            <List>
                {['Book', 'Fasion', 'Living', 'Beauty', 'Kids'].map((text, index) => (
                    <ListItem button key={text} className={styles.CategoryItem}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>         
        </div>
    )
}
