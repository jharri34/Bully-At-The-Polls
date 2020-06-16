import React, { useEffect,useState } from 'react';
import BullyStore from '../shared/bullystore'
import VoterDetails from './Voter-Details'

function Voters(address) {
	// eslint-disable-next-line	
	const { voters,voterIsLoading,elections,electionIsLoading } = BullyStore.useStoreState(state => ({
		voters:state.voters,
		voterIsLoading:state.voterIsLoading,
		elections:state.elections,
		electionIsLoading:state.elections

	}));
	
	const [electionIds, setElectionIds] = useState([])

	const getElectionId = (elections) =>{
		let temp = []
		if(elections.length > 0){
			elections.map(election => {
				console.log(election.id)
			temp = [...temp, election.id]
				setElectionIds(election.id)
			});
		}
	}
	console.log(elections)
	const getVoters   = BullyStore.useStoreActions((actions) => actions.getVoters)
	

	
	useEffect(() => {
		
		getVoters(address,elections);
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
		<div key={item}><VoterDetails voter={voter}  /></div>
		))

)}
		</>
	)
}
export default Voters;
