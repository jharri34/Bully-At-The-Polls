import React from 'react';
import Table from 'react-bootstrap/Table';

function VoterCandidates({ candidate }) {
	return (
		<div>
		<Table striped bordered hover >
			{candidate.candidates.map((candid,item) => (
			<tr>
				<td>{candid.name}</td>
				<td>{candid.party}</td>
				<td>{candid.candidateUrl}</td>
				<td>{candid.phone}</td>
			</tr>
			))}
		</Table>
		</div>
	);
}

export default VoterCandidates;