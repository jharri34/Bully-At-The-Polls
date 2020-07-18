import React from 'react';
import Link from '@material-ui/core/Link';
import './voter.css';
function VoterCandidates({ candidate }) {
	return (
		<div className="candidate-container">
			{candidate.candidates.map((candid, item) => (
				<div key={item} className="candidate-item-wrapper">
					<div>{candid.name}</div>
					<div>{candid.party}</div>
					<Link className="url" href={candid.candidateUrl} target="_blank" rel="noopener">
						{candid.candidateUrl}
					</Link>
					<div>{candid.phone}</div>
				</div>
			))}
		</div>
	);
}

export default VoterCandidates;
