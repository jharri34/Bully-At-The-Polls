import React from 'react';
import VoterContest from '../voters/contests/Voter-Contest'
import VoterState from './Voter-State'
import VoterElectionData from './Voter-ElectionData'

const VoterDetails = ({ voters }) => {
	
	return (
		<div>
			<VoterState voterstate={ voters.state } />
			<VoterElectionData election={ voters.election } />
			<VoterContest contests={ voters.contests } />
		</div>
	)
};

export default VoterDetails;
