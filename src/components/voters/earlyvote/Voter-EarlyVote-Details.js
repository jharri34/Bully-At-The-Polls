import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import formatAddress from '../../shared/common'
import './earlyvote.css'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
	table: {
		minWidth: 650
	}
});


const Accordion = withStyles({
	root: {
		border: '1px solid rgba(0, 0, 0, .125)',
		boxShadow: 'none',
		'&:not(:last-child)': {
			borderBottom: 0
		},
		'&:before': {
			display: 'none'
		},
		'&$expanded': {
			margin: 'auto'
		}
	},
	expanded: {}
})(MuiAccordion);

const AccordionSummary = withStyles({
	root: {
		backgroundColor: 'rgba(0, 0, 0, .03)',
		borderBottom: '1px solid rgba(0, 0, 0, .125)',
		marginBottom: -1,
		minHeight: 56,
		'&$expanded': {
			minHeight: 56
		}
	},
	content: {
		'&$expanded': {
			margin: '12px 0'
		}
	},
	expanded: {}
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
	root: {
		padding: theme.spacing(2)
	}
}))(MuiAccordionDetails);


function VoterEarlyVoterDetails({ earlyVote }) {
	const classes = useStyles();
	return (
		<div>
			<Grid container direction="column" justify="center" alignItems="center">
			<TableContainer component={Paper}>
				<Table className={classes.table} size="small" aria-label="a dense table">
					<TableHead>
						<TableRow>
							<TableCell>Name</TableCell>
							<TableCell align="right">Address</TableCell>
							<TableCell align="right">Hours</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{earlyVote.map((vote, item) => (
							<TableRow key={item}>
								<TableCell component="th" scope="row">
									{vote.name}
								</TableCell>
								<TableCell align="right">{formatAddress(vote.address)}</TableCell>
								<TableCell align="right">{vote.pollingHours}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			</Grid>
		</div>
	);
}

export default VoterEarlyVoterDetails;
