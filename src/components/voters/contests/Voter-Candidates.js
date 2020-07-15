import React from 'react';

import './voter.css'
function VoterCandidates({ candidate }) {
	return (
		<div className='candidate-container'>
			{ candidate.candidates.map((candid, item) => (
				<div key={item} className='candidate-item-wrapper'>
					<div>{ candid.name }</div>
					<div>{ candid.party }</div>
					<div>{ candid.candidateUrl }</div>
					<div>{ candid.phone }</div>
				</div>
			)) }

		</div>
	);
}

export default VoterCandidates;