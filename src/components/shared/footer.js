import React from 'react';
import { useHistory, Link} from "react-router-dom";

import './header.css'

function Footer() {

	// let history = useHistory();


	// const handleOnClick = () => {
	// 	history.push('/about');
	// };


	return (
		<footer className='footer'>
			<div className='footer-info-wrapper'>

				<Link to='/about'>About Us</Link>
				
			</div>


		</footer>
	);
}

export default Footer;