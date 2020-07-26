import React from 'react'
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import CallIcon from '@material-ui/icons/Call';

import styles from './Footer.module.css'

function Copyright() {
    return (
        <div className={styles.CopyRight} style={{textAlign:'center'}}>
            <div>
                BuyCor, Inc. <Link color="inherit" href="#">Terms &amp; Conditions</Link> |  <Link color="inherit" href="#">Privacy Policy</Link>
            </div>
            <div>
                {'Copyright © '}
                <Link color="inherit" href="#">
                    BuyCor
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </div>

        </div>
    );
}

function Contacts(){
    return (
        <div className={styles.Contact_Container}>
            <Link color="inherit" href="#">
                <div className={styles.ContactIcon}>
                    <EmailIcon/> Email
                </div>
            </Link>
            <Link color="inherit" href="#">
                <div className={styles.ContactIcon}>
                    <ChatBubbleIcon/> Live Chat
                </div>
            </Link>
            <Link color="inherit" href="#">
                <div className={styles.ContactIcon}><CallIcon/> Call: 123-123-1234</div>
            </Link>
        </div>
    )
}

export default function Footer() {
    return (
        <div className="FooterContainer">
            <Contacts/>
            <Container maxWidth="lg" className={styles.Container}>
                <Grid container>
                    <Grid item xs={3}>
                        <div className={styles.Title}>Hours</div>
                        <ul className={styles.UL}>
                            <li>
                                <div>
                                    Mon - Sat
                                </div>
                                <div>
                                    11am - 9:30pm
                                </div>
                            </li>
                            <li>
                                <div>
                                    Mon - Sat
                                </div>
                                <div>
                                    11am - 9:30pm
                                </div>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={3}>
                        <div className={styles.Title}>Company</div>
                        <ul className={styles.UL}>
                            <li>
                                <Link color="inherit" href="#">About Us</Link>
                            </li>
                            <li>
                                <Link color="inherit" href="#">FAQ</Link>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={3}>
                        <div className={styles.Title}>Customer Service</div>
                        <ul className={styles.UL}>
                            <li>
                                <Link color="inherit" href="#">Notice</Link>
                            </li>
                            <li>
                                <Link color="inherit" href="#">Inquiry</Link>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={3}>
                        <div className={styles.Title}>Connect</div>
                        <IconButton>
                            <InstagramIcon/>
                        </IconButton>
                        <IconButton>
                            <TwitterIcon/>
                        </IconButton>
                        <IconButton>
                            <FacebookIcon/>
                        </IconButton>
                    </Grid>
                </Grid>
                <Copyright/>
            </Container>
        </div>

    )
}
