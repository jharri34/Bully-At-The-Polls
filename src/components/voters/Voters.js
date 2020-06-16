import React, { useEffect } from 'react';
import BullyStore from '../shared/bullystore'
import VoterDetails from './Voter-Details'

function Voters() {
	// eslint-disable-next-line	
	const { voters,voterIsLoading } = BullyStore.useStoreState(state => ({
		voters:state.voters,
		voterIsLoading:state.voterIsLoading,

	}));
	
	const getVoters   = BullyStore.useStoreActions(actions => actions.getVoters)
	
	useEffect(() => {
		getVoters();
	// eslint-disable-next-line	
	}, []);

	
	return(
		<>
		{voterIsLoading ? (
        <div>
			Testing
        </div>
		
) : (
	voters.map((voter,item) => (
		<div><VoterDetails voter={voter} key={voter.id} /></div>
		))

)}
		</>
	)
}
export default Voters;
