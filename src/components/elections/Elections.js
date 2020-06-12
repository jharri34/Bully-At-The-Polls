import React, { useEffect } from 'react';
import ElectionStore from './Elections-Store';
import ElectionDetails from './ElectionDetails'

function Elections() {
	// eslint-disable-next-line	
	const { elections,isLoading } = ElectionStore.useStoreState(state => ({
		elections:state.elections,
		isLoading:state.isLoading
	}));
	
	const getElections   = ElectionStore.useStoreActions(actions => actions.getElections)
	
	useEffect(() => {
		getElections();
	// eslint-disable-next-line	
	}, []);

	
	console.log(elections.elections)
	
	return(
		<>
		{isLoading ? (
        <div>
			Testing
        </div>
		
) : (
	
	elections.map((election,item) => (
		<div><ElectionDetails election={elections} key={item} /></div>
		))
)}
		</>
	)
}
export default Elections;
