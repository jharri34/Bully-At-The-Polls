import React from 'react';
import { useHistory } from "react-router-dom";

function Footer() {
	
	let history = useHistory();


	const handleOnClick = () => {
		history.push("/");
	  };
	

	return (
		<div className="footer">
			<a onClick={handleOnClick}>Footer</a>
		</div>
	);
}

export default Footer;