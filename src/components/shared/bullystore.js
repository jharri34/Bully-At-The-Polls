import { action, createContextStore, thunk } from 'easy-peasy';
import { getVotersSvc } from '../voters/Voters-Service'
import { getElections } from '../elections/Elections-Service';

const BullyStore = createContextStore({
	address:'',
	voters:{},
	electionIds: {"id":2000},
    elections:[],
	electionError: '',
    electionIsLoading: false,
    voterError: '',
    voterIsLoading:false,


    /*actions thunk side effects*/
	getElections: thunk(async (actions,address) => {
        
		try {
			
            const data  = await getElections(address)
            const resp = await data.json()
            actions.setElections(resp);
			
		} catch (e) {
			actions.setElectionError(e);
        }
        
		
	}),
	getVoters: thunk(async (actions,electionIds) => { 
	
		try {
         const data  = await getVotersSvc(actions.electionIds)
         const resp = await data.json()
         actions.setVoters(resp);
		} catch (e) {
			actions.setVoterError(e);
        }

	}),
    /*actions*/
    setElections: action((state, elections) => {
		state.elections = elections.elections;
	}),
	setVoters: action((state, voters) => {
		state.voters =voters;
    }),
    setElectionError: action((state, error) => {
		state.electionError = error.message;
		alert(error.message);
	}),
	setElectionIds: action((state,electionId) =>{
		state.electionIds = {...state.electionIds,electionId}	
	
	}),
	setAddress: action((state,address) => {
		state.address = address;
	}),
	setElectionIsLoading: action((state,electionIsLoading) => {
		console.log(`in setElection is Loading ${state.electionIsLoading}`)
		state.electionIsLoading = electionIsLoading;
	}),
	setVoterError: action((state, error) => {
		state.error = error.message;
		alert(error.message);
	}),
	setVoterIsLoading: action((state,voterIsLoading) => {
		state.voterIsLoading = voterIsLoading;
	})
});

export default BullyStore;
