import React from 'react';
import Table from 'react-bootstrap/Table';

const ElectionDetails = ({ elections }) => {
	return (
		<div>
		<Table striped bordered hover >
			{elections.map((election,item) => (
			<tr>
				<td>{election.id}</td>
				<td>{election.name}</td>
				<td>{election.electionDay}</td>
				<td>{election.ocdDivisionId}</td>
			</tr>
			))}
		</Table>
		</div>
	);
};

export default ElectionDetails;
