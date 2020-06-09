import React, { useState, useEffect } from 'react';
import data from '../data/state.json';

const States = () => {
    
    const [value, setValue] =useState();
	const [ stateOptions, setStatesData ] = useState([]);

	useEffect(() => {
		setStatesData(data);
    }, []);
    
    const handleChange = (e)=> {
        console.log(e.currentTarget.value)
        setValue(e.currentTarget.value)
       
    }

	return (
		<div>
            <select value={value} 
            onChange={e => handleChange(e)}>
			{stateOptions.map((statedata) => (
				<option key={statedata.abbrev} value={statedata.name}>
					{statedata.name}
				</option>
			))}
			</select>
		</div>
	);
};

export default States;
