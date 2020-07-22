import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import './home.css';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	paper: {
		margin: `${theme.spacing(1)}px auto`,
		padding: theme.spacing(1)
	},
	img: {}
}));

function Home() {
	let history = useHistory();
	const classes = useStyles();
	const message =
		'"Voting is not only our right, it is our power. When we vote, we take back our power to choose, to speak up, and to stand with those who support us and each other". - Loung Ung';
	const handleOnClick = () => {
		history.push('/main');
	};

	return (
		<div className={classes.root}>
			<Grid container wrap="nowrap" spacing={2} direction="column" justify="center">
				<Grid item>
					<img
						className={classes.img}
						src="https://images.unsplash.com/photo-1591590980481-de90461443fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
						alt="power to the people"
					/>
				</Grid>
			</Grid>
			<Grid container wrap="nowrap" spacing={2}>
				<Grid item xs>
					<Typography variant="overline">{message}</Typography>
				</Grid>
			</Grid>

			<Grid container wrap="nowrap" spacing={2}>
				<Grid item xs sm lg xl>
					<Button id='button' variant="contained" color="primary" onClick={handleOnClick}>
						Locate Election
					</Button>
				</Grid>
			</Grid>
		</div>
	);
}

export default Home;
