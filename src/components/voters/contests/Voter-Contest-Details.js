import React from 'react';
import VoterReferendumDetails from './Voter-Referendum-Details';
import VoterNonReferendumDetails from './Voter-NonReferendum-Details';
import config from '../../shared/config';

import './voter.css'

function VoterContestDetails({ contest }) {
	const showContest = (contest) => {
		if (contest.type !== config.REFERENDUM) {
			return <div className='nonref'>
				<VoterNonReferendumDetails
					contest={ contest }
				/>
			</div>;
		} else if (contest.type === config.REFERENDUM) {
			return <div className='referendum'>
				<VoterReferendumDetails
					contest={ contest }
				/>
			</div>;
		}
	};

	return (
		<div className='soemsuff'>

			{ showContest(contest) }

		</div>
	);
}

export default VoterContestDetails;
