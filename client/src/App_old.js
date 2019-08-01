import React, { Component } from 'react';
//import AppBar from './components/Drawer/AppBar';
//import Drawer from './components/Drawer/Drawer';

//import Layout from './components/Layout/Layout';
import AppBar from 'material-ui/AppBar';
//import { Paper, Typography } from '@material-ui/core';
//import MenuItem from 'material-ui/MenuItem';
//import Paper from 'material-ui/Paper';
//import {Toolbar, ToolbarTitle} from 'material-ui/Toolbar';
import './App.css';
import color from '@material-ui/core/colors/deepPurple';


// const paperStyle = {
// 	height: '85%',
// 	width: '85%',
// 	margin: '7%',
// 	textAlign: 'center',
// 	display: 'inline-block',

// };

class App extends Component {



	render() {


		return (
			<div className="App">

				<AppBar />
{/* 
				<Paper >
					<Typography variant="h5" component="h3">
						This is a sheet of paper.
					</Typography>
					<Typography component="p">
						Paper can be used to build surface or other elements for your application.
       			 </Typography>
				</Paper> */}
			</div>

		);
	}
}

export default App;
