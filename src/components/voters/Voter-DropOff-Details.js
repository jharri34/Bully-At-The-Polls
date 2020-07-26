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

function VoterDropOffDetails({ drop }) {

    return (
        <div>
            
        </div>
    )
	// const classes = useStyles();
	// const [ expanded, setExpanded ] = React.useState('false');

	// const handleChange = (panel) => (event, newExpanded) => {
	// 	setExpanded(newExpanded ? panel : false);
	// };

	// const showContest = (nonReferendum, referendum) => {
	// 	return (
	// 		<div>
	// 			<Grid container spacing={2} direction="row" justify="center">
	// 				{nonReferendum.map((nonRef, index) => (
	// 					<Grid item>
	// 						<VoterNonReferendumDetails contest={nonRef} index={index} />
	// 					</Grid>
	// 				))}

	// 				<Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
	// 					<AccordionSummary
	// 						aria-controls="panel1d-content"
	// 						id="panel1d-header"
	// 						expandIcon={<ExpandMoreIcon />}
	// 					>
	// 						<Typography>
	// 							<div>
	// 								<Typography>Referendum</Typography>
	// 							</div>
	// 						</Typography>
	// 					</AccordionSummary>
	// 					<AccordionDetails>
	// 						{referendum.map((referen) => (
	// 							<Grid item>
	// 								<VoterReferendumDetails contest={referen} />
	// 							</Grid>
	// 						))}
	// 					</AccordionDetails>
	// 				</Accordion>
	// 			</Grid>
	// 		</div>
	// 	);
	// };

	// return <div>{showContest(nonReferendum, referendum)}</div>;
}

export default VoterDropOffDetails;
