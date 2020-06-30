import React from 'react';

import './voter.css'
function VoterCandidates({ candidate }) {
	return (
		<div className='candidate-container'>
			{ candidate.candidates.map((candid, item) => (
				<div className='candidate-item-wrapper'>
					<div>{ candid.name }</div>
					<div>{ candid.party }</div>
					<div>{ candid.candidateUrl }</div>
					<div>{ candid.phone }</div>
					{/* map through channels array and print out social medial handle(type) and url(id)) */ }
					{/* bug- map undefined */}
					{/* <div>{ candid.channels.map((channel, item) =>
						<div>
							<div>{ channel.type }</div>
							<div>{ channel.id }</div>
						</div>
					) }</div> */}
				</div>
			)) }

		</div>
	);
}

export default VoterCandidates;