import React from 'react';
import Table from "react-bootstrap/Table";

const ElectionDetails = ({ election }) => {


	
	return (
			<tr>
				<td>{election.id}</td>
				<td>{election.name}</td>
				<td>{election.electionDay}</td>
				<td>{election.ocdDivisionId}</td>
			</tr>
	);
};

export default ElectionDetails;
