import React from 'react';
import { useHistory } from "react-router-dom";

function Header() {
	
	let history = useHistory();


	const handleOnClick = () => {
		history.push("/");
	  };
	

	return (
		<div className="header">
			<a onClick={() => handleOnClick()}>BULLY AT THE POLLS</a>
		</div>
	);
}

export default Header;