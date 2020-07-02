import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import './home.css';

function Home() {
	let history = useHistory();

	const handleOnClick = () => {
		history.push('/main');
	};

	return (
		<div className="home">
			<h1 className="quote">
				"Voting is not only our right, it is our power. <br /> When we vote, we take back our power to choose,
				to speak up, and to stand with those who support us and each other." <br />
				- Loung Ung
			</h1>
			<Button variant="contained" color="primary" onClick={handleOnClick}>Locate Election</Button>
		</div>
	);
}

export default Home;
