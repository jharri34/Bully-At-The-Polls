// eslint-disable-next-line
import config from '../shared/config';
import withQuery from 'with-query'

export const getVotersSvc = async (addr, electionId) => {

	const { address } = addr;
	const url = withQuery(config.VOTER_URL,{
		key:config.API_KEY,
		address: encodeURI(address),
		electionId:electionId,
		
	})


	return await fetch(url);
};


