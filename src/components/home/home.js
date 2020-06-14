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
			<div className="about">
				<h3>About</h3>
				<p>
					This is a tool for looking up who your elected representatives are, upcoming elections, and histrically infomation about these representatives across the United States. Based on your address, we can find all the federal, state, county and local officials, elections, polling location,officals who represent you in government.

					Knowing who these representatives are and contacting their offices directly is the most effective way to change how our government works.

					Have an issue you care about? Find your rep and tell them!
				</p>
			</div>
		</div>
	);
}

export default Home;
