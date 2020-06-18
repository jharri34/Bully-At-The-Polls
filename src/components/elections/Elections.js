import React, { useEffect } from 'react';
import BullyStore from '../shared/bullystore';
import ElectionDetails from './Election-Details';
import BullySpinner from '../shared/bullyspinner';

const Elections = (address) => {
	// eslint-disable-next-line
	const { elections, electionIsLoading } = BullyStore.useStoreState((state) => ({
		elections: state.elections,
		electionIsLoading: state.electionIsLoading
	}));

	const getElections = BullyStore.useStoreActions((actions) => actions.getElections);
	const setElectionIsLoading = BullyStore.useStoreActions((actions) => actions.setElectionIsLoading);
	//The Effect Hook lets you perform side effects in function components:
	//https://reactjs.org/docs/hooks-effect.html
	useEffect(
		() => {
			getElections(address);
			if (elections) {
				setElectionIsLoading(true);
			}

			// eslint-disable-next-line
		},
		[  ]
	);
	return (
		<div className='election-container'>
			{(() => {
				if (electionIsLoading === true && electionIsLoading !== undefined && elections !== undefined) {
					return <ElectionDetails elections={elections} />;
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
};
export default Elections;
