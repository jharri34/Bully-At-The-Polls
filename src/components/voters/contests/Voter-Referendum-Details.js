import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Link from '@material-ui/core/Link';
import { Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		paper: {
			height: 140,
			width: 100
		},
		'& > * + *': {
			marginLeft: theme.spacing(2)
		}
	}
}));

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
		minHeight: '100%',
		'&$expanded': {
			minHeight: '100%'
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

function VoterReferendumDetails({ contest }) {
	const [ expanded, setExpanded ] = React.useState('false');
	const classes = useStyles();
	const preventDefault = (event) => event.preventDefault();
	const handleChange = (panel) => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false);
	};

	return (
		<div>
			<Grid
				container
				className={classes.root}
				spacing={2}
				direction="row"
				justify="flex-start"
				alignItems="center"
			>
				<Paper>
					<Grid item>
						<Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
							<AccordionSummary
								aria-controls="panel1d-content"
								id="panel1d-header"
								expandIcon={<ExpandMoreIcon />}
							>
								<Typography className="title">
				{contest.referendumTitle}
								</Typography>
							</AccordionSummary>

							<AccordionDetails>
								<Typography>
									<Link className="url" href={contest.referendumUrl} target="_blank" rel="noopener">
										{contest.referendumUrl}
									</Link>
								</Typography>
							</AccordionDetails>
						</Accordion>
					</Grid>
				</Paper>
			</Grid>
		</div>
	);
}

export default VoterReferendumDetails;
