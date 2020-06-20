import React from 'react';

function VoterState({ voterstate }) {

	return (
		<div>
			<div>
				{voterstate.map((vstate, item) => (
					<React.Fragment>
						<div>{vstate.name}</div>
						<div>
							<div>{vstate.electionAdministrationBody.name}</div>
							<div>{vstate.electionAdministrationBody.electionInfoUrl}</div>
							<div>{vstate.electionAdministrationBody.ballotInfoUrl}</div>
						</div>
						<div>
							<div>{vstate.electionAdministrationBody.correspondenceAddress.line1}</div>
							<div>{vstate.electionAdministrationBody.correspondenceAddress.city}</div>
							<div>{vstate.electionAdministrationBody.correspondenceAddress.state}</div>
							<div>{vstate.electionAdministrationBody.correspondenceAddress.zip}</div>
						</div>

						<div>
							{vstate.sources.map((source, item) => (
								<React.Fragment>
									<div>{source.name}</div>
									<div>{source.official}</div>
								</React.Fragment>
							))}
						</div>
					</React.Fragment>
				))}
			</div>
		</div>
	);
}

export default VoterState;
