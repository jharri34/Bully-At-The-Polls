import React from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import './election.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import ErrorBoundary from '../shared/errorboundary';
const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		'& > *': {
			margin: theme.spacing(1)
		}
	}
}));

const ElectionDetails = ({ elections }) => {
	const { stateOfElection} = useStoreState((state) => ({
		stateOfElection: state.stateOfElection
	}));


	const classes = useStyles();
	const setShowVoter = useStoreActions((actions) => actions.setShowVoter);
	const setElectionId = useStoreActions((actions) => actions.setElectionId);

	const handleClick = (e, election) => {
		e.preventDefault();
		if (election !== undefined && election !== null) {
			setElectionId(election.id);
			setShowVoter(true);
		}
	};
	

	const santizieElections = (elections) => {
		let removeElections = []
		elections.map((elect, index) => {
			if(!elect.ocdDivisionId.split("state:")[1] ) {
				removeElections.push(elect)
			}
		})
		return removeElections;
	}

	const filterState = (elections, stateOfElection) => {
		return elections.filter((el)=>{
			if(el.ocdDivisionId.split("state:")[1] === stateOfElection)
			return el
		})
	}

	let santiziedElections = santizieElections(elections)
	// elections = filterState(santiziedElections, stateOfElection)
	// removeElectionsNotApplicable(elections,removeElections);




	

	return (
		<div className={classes.root}>
			<ErrorBoundary>
				<div className="election-wrapper">
					<ButtonGroup variant="text" color="primary" aria-label="text primary button group">
						{elections.map((election, index) => (
							<Button
								key={index}
								onClick={(e) => {
									handleClick(e, election);
								}}
							>
								<div className="election-item-wrapper">
									<div className="name">{election.name}</div>
									<div className="date">{election.electionDay}</div>
								</div>
							</Button>
						))}
					</ButtonGroup>
				</div>
			</ErrorBoundary>
		</div>
	);
};

export default ElectionDetails;
