import { action, createContextStore, thunk } from 'easy-peasy';
import { getVotersSvc } from '../voters/Voters-Service'
import { getElections } from '../elections/Elections-Service';

const BullyStore = createContextStore({
	address:'',
	voters:{},
	electionIds: {},
    elections:[],
	electionError: '',
    electionIsLoading: false,
    voterError: '',
    voterIsLoading:false,


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
	getVoters: thunk(async (actions) => { 
		actions.setVoterIsLoading(false);
		try {
		console.log('in getVoter')
         const data  = await getVotersSvc(actions.address,actions.electionIds)
         const resp = await data.json()
         actions.setVoters(resp);
         actions.setVoterIsLoading(true);
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
	setElectionIds: action((state,elections) =>{
		let electionId = []
		if(elections.length > 0){
			elections.map((election) => {			
				electionId = [...electionId,election]
			});
		}
		state.electionIds = {...state.electionIds,electionId}	
	
	}),
	setAddress: action((state,address) => {
		state.address = address;
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
