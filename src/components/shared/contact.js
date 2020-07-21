import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { Form, Col, Row, Button } from 'react-bootstrap'
import emailjs from "emailjs-com"
import config from './config'

function Contact() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const { register, reset } = useForm();

    const handleSubmit = (evt) => {
        evt.preventDefault() 
        console.log('am i being clicked');

        setFirstName(evt.target.value)
        setLastName(evt.target.value)
        setEmail(evt.target.value)
        setSubject(evt.target.value)
        setMessage(evt.target.value)

        let templateParams = {
            from_name: email,
            to_name: 'bullyatthepolls@gmail.com',
            subject: subject,
            message_html: message,
        }

        emailjs.send(
            'gmail',
            'template_E8o5hEfv',
            templateParams,
            'user_x4DCXAHqhldniEI0cQ2Lj'
        )

        evt.target.reset()
    }


    let history = useHistory();

    // const handleOnClick = () => {
    //     history.push('/main');
    // };

    return (

        <div >
            <h1>Let's Chat</h1>

            <p>We would love to hear your thoughts, concerns or problems with anything so we can improve</p>

            <div class="">
                <Form onSubmit={ handleSubmit }>
                    <Form.Group controlId="formBasicName">
                        <Form.Row>
                            <Col>
                                <Form.Control
                                    type="text"
                                    name="firstName"
                                    value={ firstName }
                                    onChange={ e => setFirstName(e.target.value) }
                                    placeholder="First Name" />
                            </Col>
                            <Col>
                                <Form.Control
                                    type="text"
                                    name="lastName"
                                    value={ lastName }
                                    onChange={ e => setLastName(e.target.value) }
                                    placeholder="Last Name" />
                            </Col>
                        </Form.Row>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={ email }
                            onChange={ e => setEmail(e.target.value) }
                            placeholder="name@email.com" />
                    </Form.Group>

                    <Form.Group controlId="formBasicSubject">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control
                            type="text"
                            name="subject"
                            value={ subject }
                            onChange={ e => setSubject(e.target.value) } />
                    </Form.Group>

                    <Form.Group controlId="formBasicMessage">
                        <Form.Label>Enter Text</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows="3"
                            name="message"
                            value={ message }
                            onChange={ e => setMessage(e.target.value) } />
                    </Form.Group>

                    <Button variant="primary" type="submit" >Submit</Button>
                </Form>
            </div>
            {/* <a href="mailto:bullyatthepolls@gmail.com" target="_blank">Email</a> */}
        </div >
    )
}
export default Contact;