import React, { useState } from 'react';
import Elections from '../elections/Elections';
import Voters from '../voters/Voters';
import Form from "react-bootstrap/Form";
function Main() {
	const [ showElection, setShowElection ] = useState(false);
	const [ showVoter, setShowVoter ] = useState(false);
	const [ address, setAddress ] = useState("");
    

	const isValidAddress = (address) => {
        if(address !== null || address !== '' ){
            //Validate address here
            return true;
        }
	};

	const handleAddress = () => {
        if(isValidAddress){
        setShowElection(true)
        setShowVoter(true)
        }
	};

	const handleSubmit = (e) => {
		e.preventDefault();
        setAddress(e.target.value)
        handleAddress(address)
	};

	const handleKeyPress = (e) => {
		if (e.key === 'Enter') {
            setAddress(e.target.value)
            handleAddress(address)
        }
        
	};

	const handleChange = (e) => {
        setAddress(e.target.value)
	};

	return (
		<div className="main">

			<Form onSubmit={(e) => handleSubmit(e)} onKeyPress={(e) => handleKeyPress(e)} >
				<Form.Control type="text" value={address || ""} onChange={(e) => handleChange(e)} placeholder="123 Test Address" />
			</Form>
			{showElection ? <Elections address={address}/> : <div />}
			{showVoter ? <Voters address={address} /> : <div />}
		</div>
	);
}

export default Main;
