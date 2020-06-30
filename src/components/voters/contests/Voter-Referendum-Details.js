import React from 'react';
function VoterReferendumDetails({ contest }) {
	return (
		<div className='referendum-container'>
			{/* <div>
				{contest.sources.map((source, item) => (
					<React.Fragment>
						<div>{source.name}</div>
						<div>{source.official}</div>
					</React.Fragment>
				))}
			</div> */}
			<div className='type'>{ contest.type }</div>
			<div className='title'>{ contest.referendumTitle }</div>
			<div className='url'>{ contest.referendumUrl }</div>
			{/* <div>
				<div>{contest.district.name}</div>
				<div>{contest.district.scope}</div>
				<div>{contest.district.id}</div>
			</div> */}

		</div>
	);
}

export default VoterReferendumDetails;
