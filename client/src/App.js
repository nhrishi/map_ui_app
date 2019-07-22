import React, { Component } from 'react';
import Header from './components/Header/Header';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Footer from './components/Footer/Footer';
import Body from './components/Body/Body';

class App extends Component {

	state = {
		sideDrawerOpen: false
	};

	drawerToggleClickHandler = () => {
		this.setState((prevState) => {
			return { sideDrawerOpen: !prevState.sideDrawerOpen };

		});
	};

	backdropClickHandler = () => {
		this.setState({ sideDrawerOpen: false });
	}

	render() {
		let backdropVar;

		if (this.state.sideDrawerOpen) {
			backdropVar = <Backdrop click={this.backdropClickHandler} />;
		}

		
		return (
			<div style={{ height: '100%', width: '100%' }}>

				<Header drawerClickHandler={this.drawerToggleClickHandler} />
				<Footer />
				<SideDrawer show={this.state.sideDrawerOpen} />
				{backdropVar}
				<Body />
			</div>
		);
	}
}

export default App;
