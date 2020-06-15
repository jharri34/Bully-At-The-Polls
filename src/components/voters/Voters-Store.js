import { action, createContextStore, thunk } from 'easy-peasy';
import { getVoters } from './Voters-Service';

const VotersStore = createContextStore({
	voters:[],
	error: '',
	isLoading: false,

	/*actions thunk side effects*/
	getVoters: thunk(async (actions,address) => {
		actions.setIsLoading();
		try {
			const  data  = await getVoters(address)
			actions.setVoters(data);
		} catch (e) {
			actions.setError(e);
		}
		actions.setIsLoading();
	}),
	/*actions*/
	setVoters: action((state, voters) => {
		
		state.voters = [...state.voters,voters];
	}),
	setError: action((state, error) => {
		state.error = error.message;
		alert(error.message);
	}),
	setIsLoading: action((state) => {
		state.isLoading = !state.isLoading;
	})
});

export default VotersStore;
