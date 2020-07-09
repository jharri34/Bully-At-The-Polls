import React,{useState,useEffect} from 'react';
import VoterContestDetails from './Voter-Contest-Details';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import config from '../../shared/config';
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		'& .MuiTextField-root': {
			margin: theme.spacing(1),
			width: '25ch'
		},
		paper: {
			padding: theme.spacing(2),
			textAlign: 'center',
			color: theme.palette.text.secondary
		}
	}
}));


function VoterContest({ contests }) {


  const nonReferendum = [].concat(...contests.map(contest => {
      if(contest.type !== config.REFERENDUM){
        return contest
      }
  }))


    
  const referendum = [].concat(...contests.map(contest => {
    if(contest.type === config.REFERENDUM){
      return contest
    }
}))

    
  
	const classes = useStyles();
	return (
		<div >
			<Grid container  spacing={2} direction="row" justify="center">
				{contests.map((contest) => (
					<Grid item >
						<VoterContestDetails contest={contest} />
					</Grid>
				))}
			</Grid>
		</div>
	);
}

export default VoterContest;
