import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import PageContainer from '../../hoc/PageContainer';
import styles from './Inquiry.module.css';

export default function Inquiry() {
    return (
        <PageContainer>
            <div className={styles.Container}>
                <div className={styles.Header}>
                    Inquiry
                </div>
                <form className={styles.Contact} action="">
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="name"
                                name="name"
                                variant="outlined"
                                required
                                fullWidth
                                disabled
                                id="name"
                                label="Name"
                                defaultValue={"Alex Bae"}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                disabled
                                id="email"
                                label="Email address"
                                name="email"
                                defaultValue={"baehs1989@gmail.com"}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                multiline
                                rows={5}
                                name="message"
                                label="Message"
                                id="message"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            >
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </PageContainer>
    )
}
