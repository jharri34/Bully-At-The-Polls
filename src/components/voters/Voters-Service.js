// eslint-disable-next-line
import config from '../shared/config';

export const getVotersSvc = async (electionIds) => {
	let url = config.VOTER_URL + config.QUERY_KEY + config.API_KEY + config.ADDRESS_KEY;
	return await fetch(url);
}

