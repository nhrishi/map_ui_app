//import React, { Component } from 'react';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from "prop-types";
import axios from 'axios';


import EnhancedTable from './InventoryDashboardGrid';


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

//const [value] = React.useState(0);

export default function CenteredTabs() {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  var jsonData = "[{'Cupcake', 305, 3.7, 67, 4.3, 'India', 'GCS', 'PLS'}]";
  //class CenteredTabs extends Component {

  // constructor() {

  //   super() 

  //   this.state = {
  //     selectionValue: '0',
  //     rows: ''
  //   };

  //   this.handleChange = this.handleChange.blind(this);

  // }

  function handleChange(event, newValue) {
    setValue(newValue);
    console.log("New Value", newValue);
    //event.preventDefault();
    if (newValue === 0) {
      newValue = '{"selector":{"objectType":"ASSET", "activeInd":"A"}}';
    } else if (newValue === 1) {
      alert("Not good choice!!");
    }
    
    console.log("Your data here : ", newValue);
    axios.post(`http://localhost:5000/api/inventoryDashboard`, { newValue })
      .then(res => {
        //console.log("Query output -->", res);
        //console.log(res);
        alert(`You Submitted \n\n ${JSON.stringify(res.data)}`);
        jsonData = JSON.stringify(res.data);
      })
      .catch(error => {
        console.log("exception in the post request of Inventory Dashboard ", error.response);
        alert("Error in Capture");
      })
  }

  // function handleChange(event, newValue) {
  //   setValue(newValue);

  // }


  // handleChange = (event) => {
  //   //setValue(newValue);
  //   event.preventDefault();
  //   this.setState({selectionValue: this.event.value})

  //   let newValue = '{"selector":{"objectType":"ASSET", "activeInd":"A"}}';
  //  //console.log("Your data here : ", this.state.selectionValue);    
  //   axios.post(`http://localhost:5000/api/inventoryDashboard`, newValue)
  //     .then(res => {
  //       console.log("Query output -->", res);
  //       console.log(res);
  //       alert(`You Submitted \n\n ${JSON.stringify(res.data)}`);
  //      // this.setState({rows:res.data});

  //     })
  //     .catch(error => {
  //       console.log("exception in the post request of Inventory Dashboard ", error.response);
  //       alert("Error in Capture");
  //     })
  // }


  // render() {
  return (
    <Paper className={classes.root} >
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
        <EnhancedTable rows={jsonData} /> 
       </TabPanel>
      <TabPanel value={value} index={1}>
        <EnhancedTable />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <EnhancedTable />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <EnhancedTable />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <EnhancedTable />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <EnhancedTable />
      </TabPanel>
    </Paper>
  );

  //}


}

// export default CenteredTabs;