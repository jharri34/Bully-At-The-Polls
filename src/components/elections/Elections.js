import React, { useEffect } from 'react';
import ElectionStore from './Elections-Store';
import ElectionDetails from './Election-Details'

const Elections = () => {
	// eslint-disable-next-line	
	const { elections,isLoading } = ElectionStore.useStoreState(state => ({
		elections:state.elections,
		isLoading:state.isLoading
	}));
	
	const getElections   = ElectionStore.useStoreActions(actions => actions.getElections)
	//The Effect Hook lets you perform side effects in function components:
	//https://reactjs.org/docs/hooks-effect.html
	useEffect(() => {
		getElections();
	// eslint-disable-next-line	
	}, []);

	
	return(
		<>
		{isLoading ? (
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
