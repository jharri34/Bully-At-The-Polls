import React from 'react';
import VoterContest from '../voters/contests/Voter-Contest';
import VoterState from './Voter-State';
import VoterEarlyVote from './earlyvote/Voter-EarlyVote'
import VoterDropOff from './dropoff/Voter-DropOff'
import ErrorBoundary from '../shared/errorboundary';
import './contests/voter.css';

const VoterDetails = ({ voters }) => {
	console.log(voters)
	return (
		<div>
			<ErrorBoundary>
				<div className="voter-detail-container">
					<div className="voter-state-container">
						{(typeof voters.state === 'undefined') ? <div /> :( <VoterState voterstate={voters.state} />)}
					</div>
				</div>
				{(typeof voters.dropOffLocations === 'undefined') ? <div /> : (<VoterDropOff dropOff={voters.dropOffLocations} />)}
				{(typeof voters.earlyVoteSites === 'undefined') ? <div /> : (<VoterEarlyVote earlyVote={voters.earlyVoteSites} />)}
				{(typeof voters.contests === 'undefined') ? <div /> : (<VoterContest contests={voters.contests} />)}
				
			</ErrorBoundary>
		</div>
	);
};

export default VoterDetails;
