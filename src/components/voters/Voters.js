import React, { useEffect } from 'react';
import VotersStore from './Voters-Store';
import VoterDetails from './Voter-Details'

function Voters() {
	// eslint-disable-next-line	
	const { voters,isLoading } = VotersStore.useStoreState(state => ({
		voters:state.voters,
		isLoading:state.isLoading
	}));
	
	const getVoters   = VotersStore.useStoreActions(actions => actions.getVoters)
	
	useEffect(() => {
		getVoters();
	// eslint-disable-next-line	
	}, []);

	
	return(
		<>
		{isLoading ? (
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
