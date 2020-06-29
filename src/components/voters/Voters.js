import React, { useEffect } from 'react';
import BullyStore from '../shared/bullystore';
import VoterDetails from './Voter-Details';
import BullySpinner from '../shared/bullyspinner';

function Voters(address) {
	// eslint-disable-next-line
	const { voters, voterIsLoading, elections } = BullyStore.useStoreState((state) => ({
		voters: state.voters,
		voterIsLoading: state.voterIsLoading,
		elections: state.elections
	}));

	const setAddress = BullyStore.useStoreActions((actions) => actions.setAddress);
	const getVoters = BullyStore.useStoreActions((actions) => actions.getVoters);
	const setElectionIds = BullyStore.useStoreActions((actions) => actions.setElectionIds);
	const setVoterIsLoading = BullyStore.useStoreActions((actions) => actions.setVoterIsLoading);

	useEffect(() => {
		setAddress(address);
		setElectionIds(elections);
		getVoters(address);
		if (voters) {
			setVoterIsLoading(true);
		}
		// eslint-disable-next-line
	}, []);

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
