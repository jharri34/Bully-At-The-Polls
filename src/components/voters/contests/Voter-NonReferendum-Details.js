import React from 'react';
import VoterCandidates from './Voter-Candidates';

function VoterNonReferendumDetails({ contest }) {
	console.log(contest)
	return (
		<div className='nonreferendum-container'>
			<div className='nonreferendum-items'>
				<div className='contest-office'>{ contest.office }</div>
				<div className='contest-district-items'>
					<div className='contest-name'>{ contest.district.name }</div>
					<div className='contest-scope'>{ contest.district.scope }</div>
				</div>
			</div>
			{ <VoterCandidates candidate={ contest } /> }
		</div>
	);
}

export default VoterNonReferendumDetails;
