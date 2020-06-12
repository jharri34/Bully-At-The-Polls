import React, { useEffect } from 'react';
import ElectionStore from './Elections-Store';


function Elections() {
	
	const { elections,isLoading } = ElectionStore.useStoreState(state => state);
	const { getElections  } = ElectionStore.useStoreActions((actions) => actions);
	
	useEffect(() => {
		getElections();
	// eslint-disable-next-line	
	}, []);

	console.log(elections,isLoading)
	return(
		<>
		{isLoading ? (
        <div>
			Testing
        </div>
) : (<div>Not Testing</div>)}
		</>
	)
}
export default Elections;
