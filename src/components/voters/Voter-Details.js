import React from 'react';

const VoterDetails = ({ kind,election,normalizedInput,contests,state }) => {
	console.log(kind)
	console.log(election)
	console.log(normalizedInput)
	console.log(contests)
	console.log(state)
	return (
		<>
		<div>
            Voter
			<div>
			Election
			<br/>
			Election Name: {election.name}	
			Election Day: {election.electionDay}
			</div>
			<div>
			Location
			<br/>
			Address: {normalizedInput.line1} 
			City: {normalizedInput.city} 
			State: {normalizedInput.state}
			Zip: {normalizedInput.zip}
			</div>
			<div>
			Contests
			<br/>
			Type: {contests.type}
			Office: {contests.office}
	
			</div>
		</div>
		</>
	);
};

export default VoterDetails;
