import React from 'react';
import VoterCandidates from './Voter-Candidates';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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

function VoterNonReferendumDetails({ contest }) {
	const [ expanded, setExpanded ] = React.useState('false');

	const handleChange = (panel) => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false);
	};

	return (
		<div className="nonreferendum-container">
			<Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
				<AccordionSummary aria-controls="panel1d-content" id="panel1d-header"  expandIcon={<ExpandMoreIcon />}>

						{' '}
						<div className="nonreferendum-items">
							<div className="contest-office">{contest.office}</div>
							<div className="contest-district-items">
								<div className="contest-name">{contest.district.name}</div>
								<div className="contest-scope">{contest.district.scope}</div>
							</div>
						</div>
					
				</AccordionSummary>
				<AccordionDetails>
					{<VoterCandidates candidate={contest} />}
				</AccordionDetails>
			</Accordion>
		</div>
	);
}

export default VoterNonReferendumDetails;
