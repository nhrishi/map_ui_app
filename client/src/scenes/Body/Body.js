import React, {Component} from 'react';
import './Body.css';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

class Body extends Component {
	render() {
		return (
			<div className="bodyStyle">
				<SideDrawer />
				<Header />
				<Footer />
			</div>
		);
	}

}

export default Body;