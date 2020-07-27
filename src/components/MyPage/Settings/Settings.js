import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import styles from './Settings.module.css'
import PageContainer from '../../../hoc/PageContainer'

export default function Settings() {
    return (
        <PageContainer>
            <Grid container justify="center">
                <Grid item xs={12} sm={8}>
                    <div className={styles.Container}>
                        <table className={styles.Table}>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className={styles.Title}>Name:</div>
                                        <div>Hyung Soo Bae</div>
                                    </td>
                                    <td>
                                        <Button variant="contained">
                                            Edit
                                        </Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className={styles.Title}>Mobile Phone Number:</div>
                                        <div>6476547808</div>
                                    </td>
                                    <td>
                                        <Button variant="contained">
                                            Edit
                                        </Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className={styles.Title}>Password:</div>
                                        <div>**************</div>
                                    </td>
                                    <td>
                                        <Button variant="contained">
                                            Edit
                                        </Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className={styles.Title}>Membership Withdrawal</div>
                                    </td>
                                    <td>
                                        <Button variant="contained">
                                            Proceed
                                        </Button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Grid>

            </Grid>

        </PageContainer>
    )
}
