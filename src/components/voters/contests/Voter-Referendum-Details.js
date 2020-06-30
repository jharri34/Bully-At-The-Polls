import React from 'react';
function VoterReferendumDetails({ contest }) {
	return (
		<div className='referendum-container'>
			<div className='type'>{ contest.type }</div>
			<div className='title'>{ contest.referendumTitle }</div>
			<div className='url'>{ contest.referendumUrl }</div>
			{/* <div>
				<div>{contest.district.name}</div>
				<div>{contest.district.scope}</div>
			</div> */}

		</div>
	);
}

export default VoterReferendumDetails;
