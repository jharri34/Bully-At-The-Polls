import React from 'react';
import Link from '@material-ui/core/Link';

function VoterState({ voterstate }) {
	console.log('voterstate', voterstate)
	return (
		<div>
			<div>
				{ voterstate.map((vstate, item) => (
					<React.Fragment key={item} >
						<div className='voter-state-name'>
							<div>{ vstate.electionAdministrationBody.name }</div>
						</div>
						<div className='voter-address'>
							<>
							{(typeof vstate.electionAdministrationBody.correspondenceAddress === 'undefined')? <div/>: (
								<div>
							<div>{ vstate.electionAdministrationBody.correspondenceAddress.line1 }</div>
							<div>{ vstate.electionAdministrationBody.correspondenceAddress.city }</div>
							<div>{ vstate.electionAdministrationBody.correspondenceAddress.state }</div>
							<div>{ vstate.electionAdministrationBody.correspondenceAddress.zip }</div>
							</div>
							)}
							</>
	</div>

						<div className='voter-url'>
							<div><Link className="url" href={vstate.electionAdministrationBody.electionInfoUrl} target="_blank" rel="noopener">{ vstate.electionAdministrationBody.electionInfoUrl }</Link></div>
							<div><Link className="url" href={vstate.electionAdministrationBody.ballotInfoUrl} target="_blank" rel="noopener">{ vstate.electionAdministrationBody.ballotInfoUrl }</Link></div>
						</div>

						<div>
							{ vstate.sources.map((source, item) => (
								<React.Fragment key={item}>
									<div>{ source.name }</div>
									<div>{ source.official }</div>
								</React.Fragment>
							)) }
						</div>
					</React.Fragment>
				)) }
			</div>
		</div>
	);
}

export default VoterState;
