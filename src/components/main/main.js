import React, { useState } from 'react';
import Elections from '../elections/Elections';
import Voters from '../voters/Voters';
function Main() {
	const [ showElection, setShowElection ] = useState(false);
	const [ showVoter, setShowVoter ] = useState(false);
    const [ address, setAddress ] = useState('');
    

    
	const isValidAddress = (address) => {
        if(address !== null || address !== '' ){
            //Validate address here
            return true;
        }
	};

	const handleAddress = () => {
        if(isValidAddress){
        setShowElection(true)
        setShowVoter(false)
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
			<form onSubmit={handleSubmit} onKeyPress={handleKeyPress} >
				<input type="text" value={address} onChange={handleChange} placeholder="123 Test Address" />
			</form>
			{showElection ? <Elections address={address}/> : <div />}
			{showVoter ? <Voters /> : <div />}
		</div>
	);
}

export default Main;
