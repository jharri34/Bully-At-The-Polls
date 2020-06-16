import React, { useEffect } from 'react';
import BullyStore from '../shared/bullystore'
import ElectionDetails from './Election-Details'

const Elections = () => {
	// eslint-disable-next-line	
	const { elections,electionIsLoading } = BullyStore.useStoreState(state => ({
		elections:state.elections,
		electionIsLoading:state.electionIsLoading
	}));
	
	const getElections   = BullyStore.useStoreActions(actions => actions.getElections)
	//The Effect Hook lets you perform side effects in function components:
	//https://reactjs.org/docs/hooks-effect.html
	useEffect(() => {
		getElections();
	// eslint-disable-next-line	
	}, []);

	
	return(
		<>
		{electionIsLoading ? (
        <div>
			Testing
        </div>
		
) : (
	
		elections.map((election,item) => (
		<div><ElectionDetails election={election} key={election.id} /></div>
		))
)}
		</>
	)
};
export default Elections;
