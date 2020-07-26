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
      textAlign:'left'
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
                    component="div"
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
                    <Category/>
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
