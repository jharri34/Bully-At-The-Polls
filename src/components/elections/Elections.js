import React, { useEffect } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import ElectionDetails from './Election-Details';
import BullySpinner from '../shared/bullyspinner';

const Elections = (address) => {
	// eslint-disable-next-line
	const { elections, electionIsLoading } = useStoreState((state) => ({
		elections: state.elections,
		electionIsLoading: state.electionIsLoading
	}));

	const getElections = useStoreActions((actions) => actions.getElections);
	const setElectionIsLoading = useStoreActions((actions) => actions.setElectionIsLoading);
	//The Effect Hook lets you perform side effects in function components:
	//https://reactjs.org/docs/hooks-effect.html
	useEffect(() => {
		getElections(address);
		if (elections) {
			setElectionIsLoading(true);
		}

		// eslint-disable-next-line
	}, [getElections,setElectionIsLoading]);
	return (
		<div className="election-container">
			{(() => {
				if (
					electionIsLoading === true &&
					electionIsLoading !== undefined &&
					elections !== undefined &&
					Object.keys(elections).length !== 0
				) {
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
