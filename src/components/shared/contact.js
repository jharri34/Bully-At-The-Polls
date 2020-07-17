import React, {useState} from 'react'
import { useHistory, Link } from 'react-router-dom';
import { Form, Col, Row, Button } from 'react-bootstrap'
import emailjs from "emailjs-com"

// const [ address, setAddress ] = useState('');
function Contact() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const handleChange = (e) => {
        setFirstName(e.target.value);
        setLastName(e.target.value);
        setEmail(e.target.value);
        setSubject(e.target.value);
        setMessage(e.target.value);
	};

    let history = useHistory();

    const handleOnClick = () => {
        history.push('/main');
    };

    return (
        <div>
            <h1>Let's Chat</h1>
            <p>We would love to hear your thoughts, concerns or problems with anything so we can improve</p>
            <div>
                <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Row>
                            <Col>
                                <Form.Control
                                    type="text"
                                    name="firstName"
                                    value={ firstName }
                                    onChange={(e) => handleChange(e)}
                                    placeholder="First name" />
                            </Col>
                            <Col>
                                <Form.Control
                                    type="text"
                                    placeholder="Last name" />
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
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
                    <Button variant="primary" type="submit">
                        Submit
                </Button>
                </Form>
            </div>
            <a href="mailto:bullyatthepolls@gmail.com" target="_blank">Email</a>
        </div >
    )
}
export default Contact;