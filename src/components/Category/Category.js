import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
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
                        {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>         
        </div>
    )
}
