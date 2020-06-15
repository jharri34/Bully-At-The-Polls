import { action, createContextStore, thunk } from 'easy-peasy';
import { getElections } from './Elections-Service';

const ElectionStore = createContextStore({
	elections:[],
	error: '',
	isLoading: false,

	/*actions thunk side effects*/
	getElections: thunk(async (actions,address) => {
		actions.setIsLoading();
		try {
			const  data  = await getElections(address)
			actions.setElections(data);
		} catch (e) {
			actions.setError(e);
		}
		actions.setIsLoading();
	}),
	/*actions*/
	setElections: action((state, elections) => {
		
		state.elections = elections.elections;
	}),
	setError: action((state, error) => {
		state.error = error.message;
		alert(error.message);
	}),
	setIsLoading: action((state) => {
		state.isLoading = !state.isLoading;
	})
});

export default ElectionStore;
