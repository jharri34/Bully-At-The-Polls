import React from 'react'
import { useHistory } from 'react-router-dom';

 function Contact() {
    let history = useHistory();

    const handleOnClick = () => {
		history.push('/main');
	};

    return (
        <div>
            
        </div>
    )
}
export default Contact;