import React from 'react';
import VoterContest from '../voters/contests/Voter-Contest';
import VoterState from './Voter-State';
import ErrorBoundary from '../shared/errorboundary';
import './contests/voter.css';

const VoterDetails = ({ voters }) => {
	
	return (
		<div>
			<ErrorBoundary>
				<div className="voter-detail-container">
					<div className="voter-state-container">
						{(typeof voters.state === 'undefined') ? <div /> :( <VoterState voterstate={voters.state} />)}
					</div>
				</div>
				{(typeof voters.contests === 'undefined') ? <div /> : (<VoterContest contests={voters.contests} />)}
			</ErrorBoundary>
		</div>
	);
};

export default VoterDetails;
