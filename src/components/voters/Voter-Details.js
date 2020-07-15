import React from 'react';
import VoterContest from '../voters/contests/Voter-Contest'
import VoterState from './Voter-State'
import VoterElectionData from './Voter-ElectionData'

import './contests/voter.css'

const VoterDetails = ({ voters }) => {
	return (
		<div>
			<div className='voter-detail-container'>
				<div className='voter-state-container'>
					<VoterState voterstate={ voters.state } />
				</div>
			</div>
			<VoterContest contests={ voters.contests } />
		</div>
	)
};

export default VoterDetails;
