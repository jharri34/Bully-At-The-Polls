import React from 'react';
import { useHistory } from "react-router-dom";

import './header.css'

function Footer() {
	
	let history = useHistory();


	const handleOnClick = () => {
		history.push("/");
	  };
	

	return (
		<div className="footer">
			<div>Footer</div>
			<a href="#" onClick={handleOnClick}></a>
			
		</div>
	);
}

export default Footer;