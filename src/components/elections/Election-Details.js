import React from 'react';
// import Table from 'react-bootstrap/Table';

import './election.css'

const ElectionDetails = ({ elections }) => {
	return (
		<div className='election-wrapper'>
			{elections.map((election,item) => (
			<div className='election-item-wrapper'>
				{/* <div>{election.id}</div> */}
				<div className='name'>{election.name}</div>
				<div className='date'>{election.electionDay}</div>
				{/* <div>{election.ocdDivisionId}</div> */}
			</div>
			))}
		
		</div>
	);
};

export default ElectionDetails;
