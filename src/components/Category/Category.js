import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List'
import AppsIcon from '@material-ui/icons/Apps';
import { useHistory } from 'react-router-dom';

import styles from './Category.module.css';


export default function Category({onSelect}) {
    let history = useHistory();

    const onCategorySelect = (text) =>{
        if (text === 'Home') {
            history.push('/')
            onSelect();
            return
        }

        history.push('/category/'+text.toLowerCase())
        onSelect()
    }

    return (
        <div className={styles.Category}>
            <div className={styles.CategoryHeader}>
                <AppsIcon/>
            </div> 

            <List>
                {['Home', 'Book', 'Fashion', 'Living', 'Beauty', 'Kids'].map((text, index) => (
                    <ListItem button key={text} className={styles.CategoryItem} onClick={()=>onCategorySelect(text)}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>         
        </div>
    )
}
