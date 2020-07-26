import React, { useState } from 'react';
import Elections from '../elections/Elections';
import Voters from '../voters/Voters';
import BullySearch from '../search/bully-search';
import { makeStyles } from '@material-ui/core/styles';
import './main.css';
import { useStoreActions, useStoreState } from 'easy-peasy';


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

function Main() {
	const { showVoter, showElection, address } = useStoreState((state) => ({
		showVoter: state.showVoter,
		showElection: state.showElection,
		address: state.address
	}));
	

	return (
		<div className="main">
			<img
				src="https://images.unsplash.com/photo-1571609549239-bf07fb79f702?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80"
				alt="polling station poster on bench"
			/>

			<BullySearch />
			{showElection ? <Elections address={address} /> : <div />}

			{showVoter ? <Voters address={address} /> : <div />}
		</div>
	);
}

export default Main;
