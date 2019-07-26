import React from 'react';

import "./SideDrawer.css";
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { Link } from 'react-router-dom';
//import { Redirect } from 'react-router'
//import Dashboard from './scenes/Dashboard/Dashboard';
//import NotAuthorized from './../../scenes/NotAuthorized/NotAuthorized';
//import HomePage from './../../scenes/HomePage/HomePage';

const sideDrawer = props => {

	return (

		<div className="side-drawer">
			<nav>
					<MenuList>
						<MenuItem><Link to={'/'} className="nav-link">Home</Link></MenuItem>
						<MenuItem><Link to={'/dashboard'} className="nav-link">Dashboard</Link></MenuItem>
					</MenuList>
			</nav>
		</div>
	);
};

export default sideDrawer;