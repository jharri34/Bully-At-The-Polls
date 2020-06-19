import React from 'react';
import VoterContest from './Voter-Contest'
import VoterState from './Voter-State'
import VoterReferendum from './Voter-Referendum'
import VoterElectionData from './Voter-ElectionData'

const VoterDetails = ({ voters }) => {
	// console.log(kind)
	// console.log(election)
	// console.log(normalizedInput)
	// console.log(contests)
	// console.log(state)
	console.log(voters)
	return (
		<div>
			<VoterState voterstate={ voters.state } />
			<VoterReferendum contests={ voters.contests } />
			<VoterElectionData election={ voters.election } />
			<VoterContest contests={ voters.contests } />
		</div>
	)
};

export default VoterDetails;
