import React from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import './election.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import ErrorBoundary from '../shared/errorboundary';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

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
	const { stateOfElection } = useStoreState((state) => ({
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
		let removeElections = [];
		elections.map((elect, index) => {
			if (elect.ocdDivisionId.split('state:')[1]) {
				removeElections.push(elect);
			}
		});
		return removeElections;
	};

	const filterState = (elections, stateOfElection) => {
		return elections.filter((el) => {
			if (el.ocdDivisionId.split('state:')[1] === stateOfElection) return el;
		});
	};

	let santiziedElections = santizieElections(elections);
	elections = filterState(santiziedElections, stateOfElection);
	console.log(elections)
	return (
		<div className={classes.root}>
			<Grid container direction="column" justify="cente" alignItems="center">
			<ErrorBoundary>
				<div className="election-wrapper">
				{(() => {
				if (
					Object.keys(elections).length !== 0
				) { return (
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
					</ButtonGroup>)
							} else {
								return (
									<div>
										<Typography>No Election Data Available</Typography>
									</div>
								);
							}
						})()}
				</div>
			</ErrorBoundary>
			</Grid>
		</div>
	);
};

export default ElectionDetails;
