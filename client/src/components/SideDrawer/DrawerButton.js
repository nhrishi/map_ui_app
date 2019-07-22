import React from 'react';

import "./DrawerButton.css";

const drawerButton = props => (
	<button className="toggle-button" onClick={props.click}>
		<div className="toggle-button__line"></div>
		<div className="toggle-button__line"></div>
		<div className="toggle-button__line"></div>
	</button>

);

export default drawerButton;