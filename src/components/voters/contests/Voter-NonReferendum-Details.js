import React from 'react';
import VoterCandidates from './Voter-Candidates';

function VoterNonReferendumDetails({ contest }) {
	console.log(contest)
	return (
		<div className='nonreferendum-container'>
			<div className='nonreferendum-items'>
				{/* <div>{ contest.type }</div> */}
				<div className='contest-office'>{ contest.office }</div>
				{/* <div> { contest.roles.map((role, item) => <div>{ role }</div>) }</div>
				<div> { contest.level.map((levels, item) => <div>{ levels }</div>) }</div> */}
				<div className='contest-district-items'>
					<div className='contest-name'>{ contest.district.name }</div>
					<div className='contest-scope'>{ contest.district.scope }</div>
					{/* <div>{ contest.district.id }</div> */}
				</div>
			</div>
			{ <VoterCandidates candidate={ contest } /> }

			{/* <div>
				<div>
					{contest.sources.map((source, item) => (
						<React.Fragment>
							<div>{source.name}</div>
							<div>{source.official}</div>
						</React.Fragment>
					))}
				</div>
			</div> */}
		</div>
	);
}

export default VoterNonReferendumDetails;
