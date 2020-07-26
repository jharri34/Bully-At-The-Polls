import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import ParseAddress from 'parse-address';
import { useForm, ErrorMessage } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import { useStoreActions, useStoreState } from 'easy-peasy';
import statesData from '../shared/states.json';

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

function BullySearch() {
	const { showVoter, showElection, address } = useStoreState((state) => ({
		showVoter: state.showVoter,
		showElection: state.showElection,
		address: state.address
	}));
	const setAddress = useStoreActions((actions) => actions.setAddress);
	const setShowVoter = useStoreActions((actions) => actions.setShowVoter);
    const setShowElection = useStoreActions((actions) => actions.setShowElection);
    const setStateOfElection = useStoreActions((actions)=>actions.setStateOfElection);


	const [ mainAddress, setMainAddress ] = useState('');
	const [ addressFlag, setAddressFlag ] = useState(false);
	const { register, handleSubmit, errors, setError, clearError } = useForm();
	const classes = useStyles();

	const handleState = (address) => {
		let state = address.state;
		let selectedState  ={}
		Object.values(statesData).map((states) => {
			if ((states.name.toLowerCase() === state.toLowerCase()) || (states.abbrev.toLowerCase() === state.toLowerCase())) {
                
                selectedState = states.abbrev.toLowerCase()
			}
        });
        setStateOfElection(selectedState)
	};
	const isValidAddress = (mainAddress) => {
		if (mainAddress !== null || mainAddress !== '') {
			//Validate address here

			return validateAddress(mainAddress);
		}
		return false;
	};
	const validateAddress = (mainAddress) => {
		let validKeys = [ 'number', 'street', 'type', 'city', 'state', 'zip' ];
		let validAddress = ParseAddress.parseLocation(mainAddress);

		if (JSON.stringify(validKeys) === JSON.stringify(Object.keys(validAddress))) {
			setAddressFlag(true);
			setShowElection(false);
			setShowVoter(false);
			handleState(validAddress);
			return true;
		}
		setError('address', 'notMatch', 'Please Enter a Valid Address');
		return false;
	};
	const handleAddress = () => {
		if (isValidAddress(mainAddress)) {
			setAddress(mainAddress);
			setMainAddress('');
			setShowElection(true);
			setAddressFlag(false);
			
			return;
		}
		setShowElection(false);
		setShowVoter(false);
	};

	const onSubmit = (data, e) => {
	
		if ((data == null || data === '') && addressFlag == true) {
			setAddress('');
		}

		e.preventDefault();
		setAddress(e.target.value);
		handleAddress(mainAddress);
	};

	const handleChange = (e) => {
		setMainAddress(e.target.value);
	};

	return (
		<div noValidate autoComplete="off" className="main-form">
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<ErrorMessage errors={errors} name="address" />
				</div>

				<TextField
					required
					id="standard-required"
					label="Required"
					value={mainAddress || ''}
					onChange={(e) => handleChange(e)}
					fullWidth
					margin="normal"
					style={{ margin: 8 }}
					placeholder="123 Test Address City, State, Zip Code"
					name="address"
					InputLabelProps={{
						shrink: true
					}}
					ref={register}
				/>
			</form>
		</div>
	);
}

export default BullySearch;
