import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ErrorBoundary from '../shared/errorboundary';
import VoterDropOffDetails from './Voter-DropOff-Details'

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


function VoterDropOff({dropOff}){
    const classes = useStyles();
    return (
        <div>
			<ErrorBoundary>
				<Grid container spacing={2} direction="row" justify="center">
					{dropOff.map((drop, item) => (
						<Grid key={item} item>
							<VoterDropOffDetails drop={drop} />
						</Grid>
					))}
				</Grid>
			</ErrorBoundary>
        </div>
    )
}

export default VoterDropOff;