import React from 'react';
import Table from "react-bootstrap/Table";

const ElectionDetails = ({ election }) => {


	
	return (
			<div>
				<div>{election.id}</div>
				<div>{election.name}</div>
				<div>{election.electionDay}</div>
				<div>{election.ocdDivisionId}</div>
			</div>
	);
};

export default ElectionDetails;
