import React from 'react';
import { useHistory } from "react-router-dom";

function Home() {
	
	let history = useHistory();


	const handleOnClick = () => {
		history.push("/main");
	  };
	

	return (
		<div className="home">
			<button onClick={handleOnClick}>Locate Election</button>
		</div>
	);
}

export default Home;
