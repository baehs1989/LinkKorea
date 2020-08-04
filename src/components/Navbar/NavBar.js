import React, {useState} from 'react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'

import Cart from '../Cart/Cart'
import Category from '../Category/Category'

const useStyles = makeStyles((theme) => ({
    toolbar: {
      borderBottom: `1px solid var(--border-light-color)`,
      position:'sticky',
      top:0,
      zIndex:100,
      backgroundColor:'white'
    },
    toolbarTitle: {
      flex: 1,
      textAlign:'left',
      "& a":{
          textDecoration:'none',
          color: 'inherit'
      }
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
    },
    authBar:{
        width:'100%',
        textAlign:'right',
        padding: "10px 1rem",
        boxSizing:'border-box',
        borderBottom:'1px solid var(--border-light-color)',
        "& a ":{
            textDecoration:'none',
            color: 'var(--primary-color)',
            marginLeft: '0.5rem;',
            marginRight: '0.5rem;',
            cursor:'pointer'
        }
    }
}));

const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }))(Badge);

export default function NavBar(props) {
    const classes = useStyles();
    const { title, authBar } = props;
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
            {
                authBar&&
                <div className={classes.authBar}>
                    <Link to="/signup">Sign Up</Link>
                    <Link to="/signin">Login</Link>
                </div>
            }

            <Toolbar className={classes.toolbar}>

                <IconButton
                    color="inherit"
                    edge="start"
                    onClick={toggleMenuBar}
                >
                    <MenuIcon />
                </IconButton>

                <Typography
                    component="div"
                    variant="h5"
                    color="inherit"
                    align="center"
                    noWrap
                    className={classes.toolbarTitle}
                >
                        <Link to="/">{title}</Link>            
                </Typography>

                {/* <Button variant="outlined" size="small">
                    Sign up
                </Button> */}

                <Link to="/mypage">
                    <IconButton>
                        <AccountCircleIcon/>
                    </IconButton>
                </Link>


                <IconButton onClick={toggleCartBar}>
                    <StyledBadge badgeContent={10} color="secondary">
                        <ShoppingCartIcon/>
                    </StyledBadge>
                </IconButton>


            </Toolbar>

            <Drawer
                anchor="left"
                open={openMenuBar}
                onClose={toggleMenuBar}
            >
                <div className={clsx(classes.list)}>
                    <Category onSelect={toggleMenuBar}/>
                </div>
            </Drawer>

            <Drawer
                anchor="right"
                open={openCartBar}
                onClose={toggleCartBar}
            >
                <div className={clsx(classes.cart)}>
                    <Cart onClose={toggleCartBar}/>
                </div> 
            </Drawer>


      </React.Fragment>
    )
}
