import React from 'react';

import "./SideDrawer.css";
import Menu from './MenuList'

const sideDrawer = props => {
		
	let drawerClasses = ['side-drawer'];
	if (props.show) {
		drawerClasses = ['side-drawer open'];
	}
    
	return(
		<nav className={drawerClasses}>
			<Menu/>
		</nav>
	);
};

export default sideDrawer;