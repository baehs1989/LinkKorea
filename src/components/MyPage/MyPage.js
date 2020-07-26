import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import MyOrders from './MyOrders/MyOrders'
import ShippingAddress from './ShippingAddress/ShippingAddress'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div>
          {children}
        </div>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  appbar:{
      "& .MuiTabs-flexContainer":{
          justifyContent:'center'
      }
  }
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable"
          className={classes.appbar}
        >
          <Tab label="My Orders"/>
          <Tab label="Shipping Address"/>
          <Tab label="Points"/>
          <Tab label="Messages"/>
          <Tab label="Reviews"/>
          <Tab label="Settings"/>
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <MyOrders/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ShippingAddress/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Points
      </TabPanel>
      <TabPanel value={value} index={3}>
        Messages
      </TabPanel>
      <TabPanel value={value} index={4}>
        Reviews
      </TabPanel>
      <TabPanel value={value} index={5}>
        Settings
      </TabPanel>
    </div>
  );
}
