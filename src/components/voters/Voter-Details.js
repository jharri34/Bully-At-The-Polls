import React from 'react';

const VoterDetails = ({ voters }) => {
	// console.log(kind)
	// console.log(election)
	// console.log(normalizedInput)
	// console.log(contests)
	// console.log(state)
	console.log(voters.kind)
	console.log(voters.contests)
	return (
		
		

			voters.contests.map((contest,item) => (
				<div>
					{contest.type}
				</div>
			))
			
		
	);
};

export default VoterDetails;
