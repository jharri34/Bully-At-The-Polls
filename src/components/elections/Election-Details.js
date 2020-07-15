import React from 'react';
// import Table from 'react-bootstrap/Table';
import { useStoreActions, useStoreState } from 'easy-peasy';
import './election.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

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

const handleClick = (e,election) =>{
	e.preventDefault();
	console.log(election)
	if(election !== undefined && election !== null){
	setShowVoter(true)
	}

}


	return (
		<div className={classes.root}>
			
			<div className="election-wrapper">
			<ButtonGroup variant="text" color="primary" aria-label="text primary button group">
			
				{elections.map((election,index) => (

					<Button onClick={(e) => { handleClick(e,election) }}>
					<div key={index} className="election-item-wrapper">
						{/* <div>{election.id}</div> */}
						<div className="name">{election.name}</div>
						<div className="date">{election.electionDay}</div>
						{/* <div>{election.ocdDivisionId}</div> */}
					</div>
					</Button>
				))}
				</ButtonGroup>
			</div>
			
		</div>
	);
};



export default ElectionDetails;
