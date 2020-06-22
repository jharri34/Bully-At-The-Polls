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
					<h1>BULLY AT THE POLL</h1>
				</div>
				<Link to='/about'>About Us</Link>
				<div className='footer-about'>
				<div>About Us</div>
				<div>This is a tool for looking up who your elected representatives are, upcoming elections, and histrically infomation about these representatives across the United States. Based on your address, we can find all the federal, state, county and local officials, elections, polling location,officals who represent you in government. <br />
				Knowing who these representatives are and contacting their offices directly is the most effective way to change how our government work. <br />
				Have an issue you care about? Find your rep and tell them!</div>
				</div>
			</div>
			{/* <a href="#" onClick={handleOnClick}></a> */}
			
		</footer>
	);
}

export default Footer;