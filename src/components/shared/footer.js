import React from 'react';
import { useHistory, Link } from "react-router-dom";

import './header.css'

function Footer() {
	
	let history = useHistory();


	const handleOnClick = () => {
		history.push("/");
	  };
	

	return (
		<footer className="footer">
			<div className='footer-info-wrapper'>
				<div className='footer-title'>
					<div>BULLY AT THE POLLS</div>
				</div>
				<Link to='/about'>About Us</Link>
			
			</div>
			
			
		</footer>
	);
}

export default Footer;