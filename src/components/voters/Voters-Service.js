// eslint-disable-next-line
import config from '../shared/config';
import withQuery from 'with-query'

export const getVotersSvc = async (addr, electionId) => {

	const { address } = addr;
	const url = withQuery(config.VOTER_URL,{
		address: address,
		electionId:electionId,
		key:config.API_KEY,
		
	})

	return await fetch(url);
};


