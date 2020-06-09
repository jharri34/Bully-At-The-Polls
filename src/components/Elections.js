import React from 'react';
import ElectionDetails from './ElectionDetails';
import { useStoreState } from 'easy-peasy';

const Elections = () => {
	const elections = useStoreState((state) => state.elections);
	return <div>{elections.map((election) => <ElectionDetails election={election} key={election.id} />)}</div>;
};
export default Elections;
