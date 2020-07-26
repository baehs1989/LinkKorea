import React from 'react'
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


import styles from './SortOption.module.css'

export default function SortOption() {
    return (
        <div className={styles.Container}>
            <table>
                <tbody>
                    <tr>
                        <td>
                            Sort:
                        </td>
                        <td>
                        <FormControl variant="outlined">
                            <Select
                                value={1}
                                className={styles.Select}
                            >
                                <MenuItem value={1}>Newest</MenuItem>
                                <MenuItem value={2}>Price: Low to High</MenuItem>
                                <MenuItem value={3}>Price: High to Low</MenuItem>
                            </Select>
                        </FormControl>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}
