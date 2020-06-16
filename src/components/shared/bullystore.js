import { action, createContextStore, thunk } from 'easy-peasy';
import { getVoters } from '../voters/Voters-Service'
import { getElections } from '../elections/Elections-Service';

const BullyStore = createContextStore({
    voters:[],
    elections:[],
	electionError: '',
    electionIsLoading: false,
    voterError: '',
    voterIsLoading:'',

    /*actions thunk side effects*/
    
    /*actions thunk side effects*/
	getElections: thunk(async (actions) => {
		actions.setElectionIsLoading();
		try {
			const  data  = await getElections()
			actions.setElections(data);
		} catch (e) {
			actions.setError(e);
		}
		actions.setElectionIsLoading();
	}),
	getVoters: thunk(async (actions,address) => {
		actions.voterIsLoading();
		try {
			const  data  = await getVoters(address)
			actions.setVoters(data);
		} catch (e) {
			actions.setVoterError(e);
		}
		actions.setVoterIsLoading();
	}),
    /*actions*/
    setElections: action((state, elections) => {
		
		state.elections = elections.elections;
	}),
	setVoters: action((state, voters) => {
		
		state.voters = [...state.voters,voters];
    }),
    setElectionError: action((state, error) => {
		state.electionError = error.message;
		alert(error.message);
	}),
	setElectionIsLoading: action((state) => {
		state.electionIsLoading = !state.electionIsLoading;
	}),
	setVoterError: action((state, error) => {
		state.error = error.message;
		alert(error.message);
	}),
	setVoterIsLoading: action((state) => {
		state.voterIsLoading = !state.voterIsLoading;
	})
});

export default BullyStore;
