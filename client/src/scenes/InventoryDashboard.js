import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from "prop-types";
import axios from 'axios';


import CustomTable from './InventoryDashboardGrid';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        <Box mx="auto" p={5}>
          {children}
        </Box>
      </Typography>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
  };

  
const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

export default function CenteredTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    function handleChange(event, newValue) {
        setValue(newValue);
        event.preventDefault();
        newValue = '{"selector":{"objectType":"ASSET", "activeInd":"A"}}';
        console.log("Your data here : ", newValue );
        axios.post(`http://localhost:5000/api/inventoryDashboard`,  { newValue } )
          .then(res => {
            console.log("Query output -->", res);
            console.log(res);
            //alert(`You Submitted \n\n${newValue}`);
          })
          .catch(error => {
            console.log("exception in the post request of Inventory Dashboard ", error.response);
            alert("Error in Capture");
          })
    }

    return (
        <Paper className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label="All" />
                <Tab label="Available" />
                <Tab label="ALlocated" />
                <Tab label="Shipped" />
                <Tab label="In-Transit" />
                <Tab label="Delivered" />
            </Tabs>
            <TabPanel value={value} index={0}>
                <CustomTable/>
            </TabPanel>
            <TabPanel value={value} index={1}>
            <CustomTable/>
            </TabPanel>
            <TabPanel value={value} index={2}>
            <CustomTable/>
            </TabPanel>
            <TabPanel value={value} index={3}>
            <CustomTable/>
            </TabPanel>
            <TabPanel value={value} index={4}>
            <CustomTable/>
            </TabPanel>
            <TabPanel value={value} index={5}>
            <CustomTable/>
            </TabPanel>
        </Paper>
    );
}