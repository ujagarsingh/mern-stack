import axios from 'axios';
import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import MainScreen from '../../components/MainScreen'

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false)

    const submitHandler = async (e) => {
        e.preventDefault();
        // console.log(email, password)
        try {
            const config = { headers: { "Content-type": "application/json" } };
            setLoading(true);
            const { data } = await axios.post('/api/users/login', { email, password }, config);
            console.log(data)
            localStorage.setItem("userInfo", JSON.stringify(data))
            setLoading(false);
        } catch (error) {
            setError(error.response.data.message)
        }
    }
    return (
        <MainScreen title="Login">
            <div className='loginContainer'>
                <Form onSubmit={submitHandler}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            value={email}
                            type="email"
                            onChange={(e) => { setEmail(e.target.value) }}
                            placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            value={password}
                            type="password"
                            onChange={(e) => { setPassword(e.target.value) }}
                            placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <Row className='py-3'>
                    <Col>
                        New Customer ? <Link to="/register">Register Here</Link>
                    </Col>
                </Row>
            </div>
        </MainScreen>
    )
}

export default LoginPage
