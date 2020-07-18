import { action, createStore, thunk } from 'easy-peasy';
import { getVotersSvc } from '../voters/Voters-Service'
import { getElections } from '../elections/Elections-Service';

const BullyStore = createStore({
	address:'',
	voters:{},
	electionIds: {},
	electionId:{},
    elections:[],
	electionError: '',
    electionIsLoading: false,
    voterError: '',
	voterIsLoading:false,
	currentVoterSelection: {},
	showVoter:false,
	

    /*actions thunk side effects*/
	getElections: thunk(async (actions,address) => {
        
		try {
			
			const data  = await getElections(address)
			
			const resp = await data.json()
			console.log(resp)
			actions.setElections(resp);
			
			
		} catch (e) {
			actions.setElectionError(e);
        }
        
		
	}),
	getVoters: thunk(async (actions) => { 
		console.log('getVoters actions', actions)
		try {
         const data  = await getVotersSvc(BullyStore.getState().address, BullyStore.getState().electionId)
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
	setCurrentVoterSelection: action((state,currentVoterSelection) =>{
		state.currentVoterSelection = currentVoterSelection
	
	}),
	setElectionId: action((state,electionId) =>{
		state.electionId = electionId
	 
	}),
	setShowVoter: action((state,showVoter) =>{
		state.showVoter = showVoter
	 
	}),
	setElectionIds: action((state,electionId) =>{
		state.electionIds = {...state.electionIds,electionId}	
	
	}),
	getAddress: action((state) => {
		return state.address;
	}),
	setAddress: action((state,address) => {
		state.address = address;
	}),
	setElectionIsLoading: action((state,electionIsLoading) => {
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
