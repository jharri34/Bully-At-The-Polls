import React from 'react'
import { useHistory, Link } from 'react-router-dom';
import { Form } from 'react-bootstrap'

function Contact() {
    let history = useHistory();

    const handleOnClick = () => {
        history.push('/main');
    };

    return (
        <div>
            <h1>Let's Chat</h1>
            <p>We would love to hear your thoughts, concerns or problems with anything so we can improve</p>
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput2">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="name@email.com" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput3">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Enter Text</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                </Form.Group>
            </Form>

            <a href="mailto:bullyatthepolls@gmail.com" target="_blank">Email</a>
        </div >
    )
}
export default Contact;