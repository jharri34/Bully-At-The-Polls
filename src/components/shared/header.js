import React from 'react';
import { useHistory } from "react-router-dom";

import './header.css'

function Header() {
	
	let history = useHistory();


	const handleOnClick = () => {
		history.push("/");
	  };
	

	return (
		<div className="header">
			<a onClick={handleOnClick}s>BULLY AT THE POLLS</a>
		</div>
	);
}

export default Header;