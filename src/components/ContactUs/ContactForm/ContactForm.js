import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import styles from './ContactForm.module.css';

export default function ContactForm() {
    return (
        <div className={styles.Container}>  
            <form className={styles.Contact} action="">
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <TextField
                            autoComplete="name"
                            name="name"
                            variant="outlined"
                            required
                            fullWidth
                            id="name"
                            label="Name"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="email"
                            label="Email address"
                            name="email"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            id="phone"
                            label="Phone number"
                            name="phone"
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
    )
}
