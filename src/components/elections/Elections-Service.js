// eslint-disable-next-line
import config from '../shared/config';
import withQuery from 'with-query';
export const getElections = async () => {
	const url = withQuery(config.ELECTION_URL, {
		key: config.API_KEY
  });
  
	return await fetch(url);
};
