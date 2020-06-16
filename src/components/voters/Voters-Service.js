// eslint-disable-next-line
import config from '../shared/config';

export async function getVoters(address,electionIds) {
	let url = config.ELECTION_URL + config.QUERY_KEY + config.API_KEY + config.ADDRESS_KEY + address;

	return await fetch(url);
}
