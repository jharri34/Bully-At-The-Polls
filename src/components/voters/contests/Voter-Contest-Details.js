import React from 'react';
import VoterReferendumDetails from './Voter-Referendum-Details';
import VoterNonReferendumDetails from './Voter-NonReferendum-Details';
import config from '../../shared/config';

function VoterContestDetails({ contest }) {
	const showContest = (contest) => {
		if (contest.type !== config.REFERENDUM) {
			return <VoterNonReferendumDetails contest={contest} />;
		} else if (contest.type === config.REFERENDUM) {
			return <VoterReferendumDetails contest={contest} />;
		}
	};

	return (
		<div>
			{showContest(contest)}
		</div>
	);
}

export default VoterContestDetails;
