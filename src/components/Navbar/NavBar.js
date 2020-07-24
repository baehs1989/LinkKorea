import React, {useState} from 'react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import List from '@material-ui/core/List';

import Cart from '../Cart/Cart'

const useStyles = makeStyles((theme) => ({
    toolbar: {
      borderBottom: `1px solid var(--border-light-color)`,
    },
    toolbarTitle: {
      flex: 1,
    },
    toolbarSecondary: {
      justifyContent: 'space-between',
      overflowX: 'auto',
    },
    toolbarLink: {
      padding: theme.spacing(1),
      flexShrink: 0,
    },
    list:{
        width:300
    },
    cart:{
        width:400
    }
}));

export default function NavBar(props) {
    const classes = useStyles();
    const { title } = props;
    const [openMenuBar, setOpenMenuBar] = useState(false)
    const [openCartBar, setOpenCartBar] = useState(false)

    const toggleMenuBar = () => {
        setOpenMenuBar(prev=>!prev)
    }

    const toggleCartBar = () => {
        setOpenCartBar(prev=>!prev)
    }

    return (
        <React.Fragment>
            <Toolbar className={classes.toolbar}>

                <IconButton
                    color="inherit"
                    edge="start"
                    onClick={toggleMenuBar}
                >
                    <MenuIcon />
                </IconButton>

                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="center"
                    noWrap
                    className={classes.toolbarTitle}
                >
                    {title}
                </Typography>

                {/* <Button variant="outlined" size="small">
                    Sign up
                </Button> */}

                <IconButton>
                    <AccountCircleIcon/>
                </IconButton>

                <IconButton onClick={toggleCartBar}>
                    <ShoppingBasketIcon/>
                </IconButton>


            </Toolbar>

            <Drawer
                anchor="left"
                open={openMenuBar}
                onClose={toggleMenuBar}
            >
                <div className={clsx(classes.list)}>
                    <div style={{height:'50px'}}>
                    </div>
                    <List>
                        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                            <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                    <List>
                        {['All mail', 'Trash', 'Spam'].map((text, index) => (
                            <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Drawer>




            <Drawer
                anchor="right"
                open={openCartBar}
                onClose={toggleCartBar}
            >
                <div className={clsx(classes.cart)}>
                    <Cart/>
                </div> 
            </Drawer>


      </React.Fragment>
    )
}
