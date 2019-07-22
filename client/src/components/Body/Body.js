//import React, {Component} from 'react';
import React from 'react';
import './Body.css';
import Dashboard from './../Dashboard/Dashboard';
import SideDrawer from './../SideDrawer/SideDrawer';

const body = props => {

	let typeVar=undefined;
	if (props.type === true) {
		typeVar = <Dashboard/>;
	} else {
		typeVar = undefined;
	}

	return (
		//<bodysection className="bodystyle">
				<div className="bodystyle">
					<ul>
						<SideDrawer show={'false'} />
						{typeVar}
					</ul>
				</div>
		//</bodysection>
	);
};

export default body; 
/*
class Body extends Component {
	render() {
		return (
			<bodyForm className="body">
				<div className="body_div">
					<ul> Welcome!!</ul>
				</div>
		</bodyForm>
		);
	}
}

export default Body;*/
