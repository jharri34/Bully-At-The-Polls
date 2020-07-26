import React from 'react';
import VoterContestDetails from './Voter-Contest-Details';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ErrorBoundary from '../../shared/errorboundary';

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

	// const nonReferendum = (contests) => {
	// 	if (contests) {
	// 		[].concat(
	// 			...contests.map((contest) => {
	// 				if (contest.type !== config.REFERENDUM) {
	// 					return contest;
	// 				}
	// 			})
	// 		);
	// 	}
	// };

	// const referendum = (contests) => {

	// 	if (contests) {
	// 		[].concat(
	// 			...contests.map((contest) => {
	// 				if (contest.type === config.REFERENDUM) {
	// 					return contest;
	// 				}
	// 			})
	// 		);
	// 	}
	// };
	const classes = useStyles();
	return (
		<div>
			<ErrorBoundary>
				<Grid container spacing={2} direction="row" justify="center">
					{contests.map((contest, item) => (
						<Grid key={item} item>
							<VoterContestDetails contest={contest} />
						</Grid>
					))}
				</Grid>
			</ErrorBoundary>
		</div>
	);
}

export default VoterContest;
