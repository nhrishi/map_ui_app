import React from 'react';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//import Dashboard from './../Dashboard/Dashboard';
import "./SideDrawer.css";
import Body from './../Body/Body';

//export default function MenuListComposition() {
const MenuListComposition = props => {

	return (
		<Router>
			<div className="side-drawer_list">
				<Paper className="side-drawer_paper">
					<MenuList>
						<MenuItem><Link to={{pathname:'/dashboard', state: {type: true}, className:"nav-link"}}>Dashboard</Link></MenuItem>
						<MenuItem><Link to={'/inventory'} className="nav-link">Inventory Management</Link></MenuItem>
						<MenuItem><Link to={'/map'} className="nav-link">MAP Requests</Link></MenuItem>
					</MenuList>
				</Paper>
				<Switch>
					<Route exact path='/dashboard' component={Body}/>
				</Switch>

			</div>
		</Router>
	);
};

export default MenuListComposition;