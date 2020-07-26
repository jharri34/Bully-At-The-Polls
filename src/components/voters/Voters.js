import React, { useEffect } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import VoterDetails from './Voter-Details';
import BullySpinner from '../shared/bullyspinner';

function Voters(address) {
	// eslint-disable-next-line

	const { voters, voterIsLoading, elections,electionId,showVoter } = useStoreState((state) => ({
		voters: state.voters,
		voterIsLoading: state.voterIsLoading,
		elections: state.elections,
		electionId: state.electionId,
		showVoter: state.showVoter,
		
	}));


	const getVoters = useStoreActions((actions) => actions.getVoters);
	const setElectionIds = useStoreActions((actions) => actions.setElectionIds);
	const setVoterIsLoading = useStoreActions((actions) => actions.setVoterIsLoading);

	useEffect(
		
		() => {
		
			getVoters(address);
			setElectionIds(elections);
			if (voters) {

				setVoterIsLoading(true);
			}
			// eslint-disable-next-line
		},
		[ voterIsLoading, electionId]
	);

	return (
		<div>
			{(() => {
				if (
					voterIsLoading === true &&
					voterIsLoading !== undefined &&
					voters !== undefined &&
					Object.keys(voters).length !== 0
				) {
					return (
						<div>
							<VoterDetails voters={voters} />
						</div>
					);
				} else {
					return (
						<div>
							<BullySpinner />
						</div>
					);
				}
			})()}
		</div>
	);
}
export default Voters;
