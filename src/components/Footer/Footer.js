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
import {useHistory} from 'react-router-dom'

import styles from './Footer.module.css'

function Copyright({history}) {
    return (
        <div className={styles.CopyRight} style={{textAlign:'center'}}>
            <div>
                LinkKorea, Inc. <Link color="inherit" onClick={()=>history.push('/termcond')}>Terms &amp; Conditions</Link> |  <Link color="inherit" onClick={()=>history.push('/privacypolicy')}>Privacy Policy</Link>
            </div>
            <div>
                {'Copyright © '}
                <Link color="inherit" onClick={()=>history.push('/')}>
                    LinkKorea
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
    let history = useHistory()

    return (
        <div className="FooterContainer">
            <Contacts/>
            <Container maxWidth="lg" className={styles.Container}>
                <Grid container>
                    <Grid item xs={6} sm={3}>
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
                    <Grid item xs={6} sm={3}>
                        <div className={styles.Title}>Company</div>
                        <ul className={styles.UL}>
                            <li>
                                <Link color="inherit" onClick={()=>history.push('/aboutus')}>About Us</Link>
                            </li>
                            <li>
                                <Link color="inherit" onClick={()=>history.push('/reviews')}>Reviews</Link>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <div className={styles.Title}>Customer Service</div>
                        <ul className={styles.UL}>
                            <li>
                                <Link color="inherit" onClick={()=>history.push('/notice')}>Notice</Link>
                            </li>
                            <li>
                                <Link color="inherit">Inquiry</Link>
                            </li>
                            <li>
                                <Link color="inherit" onClick={()=>history.push('/termcond')}>Terms and Conditions</Link>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={6} sm={3}>
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
                <Copyright history={history}/>
            </Container>
        </div>

    )
}
