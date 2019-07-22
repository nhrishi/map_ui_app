import React from 'react';
import './Header.css';
import DrawerButton from './../SideDrawer/DrawerButton';
import logoutIcon from './logout.png';

const header = props => (
	<header className="header_top">
		<nav className="header_navigation">
			<div>
				<DrawerButton click={props.drawerClickHandler} />
			</div>
			<div className="header_logo"><a href="/">MAP Distributed Ledger</a></div>
			<div className="spacer" />
			<div className="header_navigation_items">
				<ul>
					<li>hrishikesh.nashikkar@novartis.com</li>
					<li>|</li>
					<li>PLS</li>
					<li><img src={logoutIcon} alt="Logo" /></li>
				</ul>
			</div>
		</nav>
	</header>
);

export default header;