import React, { useEffect,useState } from 'react';
import BullyStore from '../shared/bullystore'
import VoterDetails from './Voter-Details'
import Table from "react-bootstrap/Table";

function Voters(address) {
	// eslint-disable-next-line	
	const { voters,voterIsLoading,elections } = BullyStore.useStoreState(state => ({
		voters:state.voters,
		voterIsLoading:state.voterIsLoading,
		elections:state.elections,


	}));

	const setAddress   = BullyStore.useStoreActions((actions) => actions.setAddress)
	const getVoters   = BullyStore.useStoreActions((actions) => actions.getVoters)
	const setElectionIds = BullyStore.useStoreActions((actions) => actions.setElectionIds)
	

	
	useEffect(() => {
		setAddress(address)
		setElectionIds(elections)
		getVoters(address);
	// eslint-disable-next-line	
	}, []);

	
	return(
		<>
		{voterIsLoading ? (
        <div>
				{/* Spinner goes here */}
			Testing
        </div>
		
) : (
	Object.keys(voters).map((voter,item) => (
			
		<Table striped bordered hover key={item}>
		<VoterDetails 
		kind={voters["kind"]}
		election={voters["election"]}
		normalizedInput={voters["normalizedInput"]}
		contests={voters["contests"]}
		state={voters["state"]}
		  />
	</Table>
	  
	)))

}
		</>
	)
}
export default Voters;
