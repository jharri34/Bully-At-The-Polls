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
	getElections: thunk(async (actions) => {
        actions.setElectionIsLoading(false);
		try {
            const data  = await getElections()
            const resp = await data.json()
            actions.setElections(resp);
            actions.setElectionIsLoading(true);
			
		} catch (e) {
			actions.setElectionError(e);
        }
        
		
	}),
	getVoters: thunk(async (actions,address,elections) => {
        let data
		actions.setVoterIsLoading(false);
		try {
        console.log(address)
        console.log( elections)
         const data  = await getVoters(address)
         const resp = await data.json()
         actions.setVoters(resp);
         actions.setVoterIsLoading(true);
		} catch (e) {
			actions.setVoterError(e);
        }

	}),
    /*actions*/
    setElections: action((state, elections) => {
		console.log(elections)
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
