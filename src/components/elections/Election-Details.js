import React from 'react';

const ElectionDetails = ({ election }) => {
	
	return (
		<div>
			<div>election id {election.id}</div>
			<div>election name {election.name}</div>
			<div>election electionDay {election.electionDay}</div>
			<div>election ocdDivisionId {election.ocdDivisionId}</div>
		</div>
	);
};

export default ElectionDetails;
