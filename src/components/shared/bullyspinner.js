import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

function BullySpinner() {
	return (
		<div className="spinner">
			<Spinner animation="border" role="status">
				<span className="sr-only">Loading...</span>
			</Spinner>
		</div>
	);
}

export default BullySpinner;
