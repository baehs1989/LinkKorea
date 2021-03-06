import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import PageContainer from '../../../hoc/PageContainer'
import DialogForm from './DialogForm/DialogForm'
import styles from './ShippingAddress.module.css'

export default function ShippingAddress({type}) {
    const [formOpen, setFormOpen] = useState(false)
    const onAddressAdd = () => {
        console.log("new Address added")
    }

    return (
        <PageContainer>
            <div className={styles.Container}>
                {type !== "selection" &&
                    <div className={styles.PageTitle}>
                        Shipping Address
                    </div>
                }

                <div className={styles.AddButtonContainer}>
                    <Button onClick={()=>setFormOpen(true)} variant="contained" color="primary" style={{backgroundColor:'var(--primary-color)'}}>
                        Add New Address
                    </Button>
                </div>

                <DialogForm open={formOpen} onCancel={()=>setFormOpen(false)} onAdd={onAddressAdd}/>

                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Paper elevation={2} className={styles.AddressPaper}>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <div className={styles.Title}>Location Name</div>
                                        <div>Canada Home</div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div className={styles.Title}>First Name</div>
                                        <div>Alex</div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div className={styles.Title}>Last Name</div>
                                        <div>Bae</div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div className={styles.Title}>Address1</div>
                                        <div>26 Olive Ave</div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div className={styles.Title}>Address2</div>
                                        <div>1209</div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div className={styles.Title}>City</div>
                                        <div>North York</div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div className={styles.Title}>State</div>
                                        <div>Ontario</div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div className={styles.Title}>Country</div>
                                        <div>Canada</div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div className={styles.Title}>ZIP/Postal Code</div>
                                        <div>M2N 7G7</div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div className={styles.Title}>Phone Number</div>
                                        <div>647-654-7808</div>
                                    </Grid>
                                    <Grid item container justify="flex-end" xs={12}>
                                        {type==="selection"?
                                            <React.Fragment>
                                                <Button>Select</Button>
                                            </React.Fragment>
                                            :
                                            <React.Fragment>
                                                <Button>Edit</Button>
                                                <Button>Remove</Button>
                                            </React.Fragment>
                                        }
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Paper elevation={2} className={styles.AddressPaper}>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <div className={styles.Title}>Location Name</div>
                                        <div>Canada Home</div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div className={styles.Title}>First Name</div>
                                        <div>Alex</div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div className={styles.Title}>Last Name</div>
                                        <div>Bae</div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div className={styles.Title}>Address1</div>
                                        <div>26 Olive Ave</div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div className={styles.Title}>Address2</div>
                                        <div>1209</div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div className={styles.Title}>City</div>
                                        <div>North York</div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div className={styles.Title}>State</div>
                                        <div>Ontario</div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div className={styles.Title}>Country</div>
                                        <div>Canada</div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div className={styles.Title}>ZIP/Postal Code</div>
                                        <div>M2N 7G7</div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div className={styles.Title}>Phone Number</div>
                                        <div>647-654-7808</div>
                                    </Grid>
                                    <Grid item container justify="flex-end" xs={12}>
                                        {type==="selection"?
                                            <React.Fragment>
                                                <Button>Select</Button>
                                            </React.Fragment>
                                            :
                                            <React.Fragment>
                                                <Button>Edit</Button>
                                                <Button>Remove</Button>
                                            </React.Fragment>
                                        }
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Paper elevation={2} className={styles.AddressPaper}>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <div className={styles.Title}>Location Name</div>
                                        <div>Canada Home</div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div className={styles.Title}>First Name</div>
                                        <div>Alex</div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div className={styles.Title}>Last Name</div>
                                        <div>Bae</div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div className={styles.Title}>Address1</div>
                                        <div>26 Olive Ave</div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div className={styles.Title}>Address2</div>
                                        <div>1209</div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div className={styles.Title}>City</div>
                                        <div>North York</div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div className={styles.Title}>State</div>
                                        <div>Ontario</div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div className={styles.Title}>Country</div>
                                        <div>Canada</div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div className={styles.Title}>ZIP/Postal Code</div>
                                        <div>M2N 7G7</div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div className={styles.Title}>Phone Number</div>
                                        <div>647-654-7808</div>
                                    </Grid>
                                    <Grid item container justify="flex-end" xs={12}>
                                        {type==="selection"?
                                            <React.Fragment>
                                                <Button>Select</Button>
                                            </React.Fragment>
                                            :
                                            <React.Fragment>
                                                <Button>Edit</Button>
                                                <Button>Remove</Button>
                                            </React.Fragment>
                                        }
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>

                    </Grid>


                </div>

            </div>
        </PageContainer>

    )
}
