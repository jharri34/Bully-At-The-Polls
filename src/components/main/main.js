import React, { useState } from 'react';
import Elections from '../elections/Elections';
import Voters from '../voters/Voters';
import ParseAddress from 'parse-address'
import { useForm, ErrorMessage } from "react-hook-form";

import './main.css';

function Main() {
	const [ showElection, setShowElection ] = useState(false);
	const [ showVoter, setShowVoter ] = useState(false);
	const [ address, setAddress ] = useState('');
	const { register, handleSubmit, errors, setError, clearError } = useForm();
	
	const isValidAddress = (address) => {
	
		if (address !== null || address !== '') {
			//Validate address here
			
			return validateAddress(address)
		}
		return false;
	};
	const validateAddress = (address) =>{
		let validKeys = ["number", "street", "type", "city", "state", "zip"]
		let validAddress = ParseAddress.parseLocation(address)

		if(JSON.stringify(validKeys) === JSON.stringify(Object.keys(validAddress))){
			return true
		}
		setError("address", "notMatch", "Please Enter a Valid Address");
		return false;
		

	}
	const handleAddress = () => {
		if (isValidAddress(address)) {
			setShowElection(true);
			setShowVoter(true);
			return
		}
		setShowElection(false)
		setShowVoter(false)
	};

	const onSubmit = (data, e) => {

		if (data == null|| data === ""){
			setAddress("");
		}

		e.preventDefault();
		setAddress(e.target.value);
		handleAddress(address);
	};


	const handleChange = (e) => {
		setAddress(e.target.value);
	};

	return (
		<div className="main">
			<img
				src='https://images.unsplash.com/photo-1571609549239-bf07fb79f702?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80'	
				alt='polling station poster on bench' />
			
			<div className="main-form">
				<form
					onSubmit={handleSubmit(onSubmit)}>
					<div>
					<ErrorMessage errors={errors} name="address" />
					</div>
					<input
						type="text"
						value={address || ''}
						onChange={(e) => handleChange(e)}
						placeholder="123 Test Address City, Zip Code"
						name="address"
						ref={register}
					/>
				</form>

				
			
			</div>
			
			{showElection ? (
				<Elections address={address} />
			) : (
				<div />
				) }
			
			{ showVoter ?
				<Voters address={ address } />
				: <div /> }
		</div>
	);
}

export default Main;
