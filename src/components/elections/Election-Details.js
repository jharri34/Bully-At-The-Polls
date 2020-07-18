import React from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import './election.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import ErrorBoundary from '../shared/errorboundary'
const useStyles = makeStyles((theme) => ({
	root: {
	  display: 'flex',
	  flexDirection: 'column',
	  alignItems: 'center',
	  '& > *': {
		margin: theme.spacing(1),
	  },
	},
  }))





const ElectionDetails = ({ elections }) => {
	const classes = useStyles();
	const setShowVoter =
 useStoreActions((actions) => actions.setShowVoter);
 const setElectionId =
 useStoreActions((actions) => actions.setElectionId);

const handleClick = (e,election) =>{
	console.log('in election-details',election)
	e.preventDefault();
	if(election !== undefined && election !== null){
	setElectionId(election.id)
	setShowVoter(true)
	}

}


	return (
		<div className={classes.root}>
			<ErrorBoundary>
			<div className="election-wrapper">
			<ButtonGroup variant="text" color="primary" aria-label="text primary button group">
			
				{elections.map((election,index) => (

					<Button key={index}  onClick={(e) => { handleClick(e,election) }}>
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
