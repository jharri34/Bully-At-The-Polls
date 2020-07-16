import React from 'react'
import { useHistory } from 'react-router-dom';
import { FormControl, Form } from 'react-bootstrap'

function Contact() {
    let history = useHistory();

    const handleOnClick = () => {
        history.push('/main');
    };

    return (
        <div>
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput2">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="name@email.com" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Enter Text</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                </Form.Group>
            </Form>
        </div >
    )
}
export default Contact;