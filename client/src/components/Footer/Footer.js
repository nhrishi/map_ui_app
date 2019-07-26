import React from 'react';
import './Footer.css';
import novartisIcon from './novartis.png';


const footer = props => (
	<footer className="footer">
		<div className="footer_logo">
			<ul>
				<li><img src={novartisIcon} alt="NovartisLogo" /></li>
			</ul>
		</div>

	</footer>

);

export default footer;