import React, { Component } from 'react';
import Body from './scenes/Body/Body';
import { Route, Switch } from "react-router-dom";
//import { Redirect } from 'react-router'
import Dashboard from './scenes/Dashboard/Dashboard';
import NotAuthorized from './scenes/NotAuthorized/NotAuthorized';
import HomePage from './scenes/HomePage/HomePage';

class App extends Component {

	render() {

		return (
			//<Body />
			// 			
				<Body>
					<Switch>
						<Route exact path='/' component={HomePage} />
						<Route path='/dashboard' component={Dashboard} />
						<Route path='/notAuthorized' component={NotAuthorized} />
					</Switch>
				</Body>


		);
	}
}

export default App;
