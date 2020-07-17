import React, { useState } from 'react';
import Elections from '../elections/Elections';
import Voters from '../voters/Voters';
import ParseAddress from 'parse-address'
import { useForm, ErrorMessage } from "react-hook-form";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './main.css';
import { useStoreActions, useStoreState } from 'easy-peasy';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	  '& .MuiTextField-root': {
		margin: theme.spacing(1),
		width: '25ch',
	  }, paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	  },
	},
  }));


function Main() {
	const { showVoter } = useStoreState((state) => ({
		showVoter: state.showVoter
	}));
	const setAddress = useStoreActions((actions) => actions.setAddress);
	const [ showElection, setShowElection ] = useState(false);
	const [ mainAddress, setMainAddress ] = useState('');
	const { register, handleSubmit, errors, setError, clearError } = useForm();
	const classes = useStyles();

	const isValidAddress = (mainAddress) => {
	
		if (mainAddress !== null || mainAddress !== '') {
			//Validate address here
			
			return validateAddress(mainAddress)
		}
		return false;
	};
	const validateAddress = (mainAddress) =>{
		let validKeys = ["number", "street", "type", "city", "state", "zip"]
		let validAddress = ParseAddress.parseLocation(mainAddress)

		if(JSON.stringify(validKeys) === JSON.stringify(Object.keys(validAddress))){
			return true
		}
		setError("address", "notMatch", "Please Enter a Valid Address");
		return false;
		

	}
	const handleAddress = () => {
		if (isValidAddress(mainAddress)) {
			setAddress(mainAddress)
			setShowElection(true);
			return
		}
		setShowElection(false)
	};

	const onSubmit = (data, e) => {

		if (data == null|| data === ""){
			setAddress("");
		}

		e.preventDefault();
		setAddress(e.target.value);
		handleAddress(mainAddress);
	};


	const handleChange = (e) => {
		setMainAddress(e.target.value);
	};


	return (
		<div className="main">
			<img
				src='https://images.unsplash.com/photo-1571609549239-bf07fb79f702?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80'	
				alt='polling station poster on bench' />
			
			<div noValidate autoComplete="off" className="main-form">
				<form
					onSubmit={handleSubmit(onSubmit)}>
					<div>
					<ErrorMessage errors={errors} name="address" />
					</div>

					<TextField required id="standard-required"
						 label="Required"
						value={mainAddress || ''}
						onChange={(e) => handleChange(e)}
						fullWidth
						margin="normal"
						style={{ margin: 8 }}
						placeholder="123 Test Address City, Zip Code"
						name="address"
						InputLabelProps={{
							shrink: true,
						  }}
						ref={register}
					/>
				</form>

				
			
			</div>
			{
			
			showElection ? (
				
				<Elections address={mainAddress} />
			) : (
				<div />
				) }
			
			{ showVoter ?
				<Voters address={ mainAddress } />
				: <div /> }
		</div>
	);
}

export default Main;
