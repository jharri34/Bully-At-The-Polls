import React, { useEffect } from 'react';
import ElectionDetails from './ElectionDetails';
import ElectionStore from './elections-store';

import { useStoreState } from 'easy-peasy';

function Elections() {
	
	const { elections,error,isLoading } = ElectionStore.useStoreState(state => state);
	const { getElections  } = ElectionStore.useStoreActions((actions) => actions);
	console.log(elections)
	useEffect(() => {
		getElections();
	}, []);
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
