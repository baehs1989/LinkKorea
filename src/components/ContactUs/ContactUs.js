import React from 'react'
import Grid from '@material-ui/core/Grid'

import PageContainer from '../../hoc/PageContainer'
import ContactForm from './ContactForm/ContactForm'
import styles from './ContactUs.module.css'

export default function ContactUs() {
    return (
        <PageContainer>
            <div className={styles.Container}>
                <div className={styles.Header}>
                    Contact
                </div>
                <Grid container spacing={2} className={styles.Locations}>
                    <Grid item xs={12} sm={6}>
                        <div className={styles.ContactInfo}>
                            <div className={styles.Location}>Seoul</div>
                            <table className={styles.Address}>
                                <tbody>
                                    <tr>
                                        <td>
                                            Address
                                        </td>
                                        <td>
                                            504-ho, 489, Dongdaegu-ro, Dong-gu, Daegu, Republic of Korea
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Tel.
                                        </td>
                                        <td>
                                            070-4837-5775
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <div className={styles.ContactInfo}>
                            <div className={styles.Location}>Toronto</div>
                            <table className={styles.Address}>
                                <tbody>
                                    <tr>
                                        <td>
                                            Address
                                        </td>
                                        <td>
                                            26 Olive Avenue, Toronto, Ontario, Canada<br/>
                                            M2N 7G7
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Tel.
                                        </td>
                                        <td>
                                            647-654-7808
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </Grid>
                </Grid>
                <div className={styles.Content}>
                    Your questions, comments, and feedback are important to us. Please fill in the fields below and we will respond to your email within 24 hours.
                    <br/><br/>
                    For online orders or inquiries, please call xxx-xxx-xxxx-xxxx or email mk.shim@gmail.com.
                    <br/><br/>
                    Our customer service line is open Monday to Friday, 9:00 am - 5:00 pm EST.
                </div>
                <ContactForm/>
            </div>
        </PageContainer>

    )
}
