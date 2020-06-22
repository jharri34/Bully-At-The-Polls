import React from 'react';
import { useHistory } from 'react-router-dom';

import './about.css'

function About() {
	let history = useHistory();

	

	return (
        <div class='about'>
            <div>About Us</div>
            <div>This is a tool for looking up who your elected representatives are, upcoming elections, and histrically infomation about these representatives across the United States. Based on your address, we can find all the federal, state, county and local officials, elections, polling location,officals who represent you in government. <br />
			Knowing who these representatives are and contacting their offices directly is the most effective way to change how our government work. <br />
			Have an issue you care about? Find your rep and tell them!</div>
			
			
		</div>
	);
}

export default About;
