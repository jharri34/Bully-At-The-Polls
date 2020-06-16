import React from 'react';
import { useHistory } from "react-router-dom";
import Footer from "../shared/footer";
import Header from "../shared/header";
import Button from 'react-bootstrap/Button';

function Home() {
	
	let history = useHistory();


	const handleOnClick = () => {
		history.push("/main");
	  };
	

	return (
		<div className="home">
			<Button onClick={handleOnClick}>Locate Election</Button>
		</div>
	);
}

export default Home;
