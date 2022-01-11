import React, { useState } from 'react'
import MainScreen from '../../components/MainScreen'
import Loading from '../../components/Loading'
import ErrorMessage from '../../components/ErrorMessage';
import { Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [pic, setPic] = useState("https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg");
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState(null)
    const [picMessage, setPicMessage] = useState(null)
    const [error, setError] = useState(false);


    const submitHandler = async (e) => {
        e.preventDefault();
        // console.log(email, password)
        if (password !== confirmpassword) {
            setMessage("Password Do not Match")
        } else {
            setMessage(null)
            try {
                const config = { headers: { "Content-type": "application/json" } };
                setLoading(true);
                const { data } = await axios.post('/api/users', { email, password, name, pic }, config);
                // console.log(data)
                localStorage.setItem("userInfo", JSON.stringify(data))
                setLoading(false);
            } catch (error) {
                setError(error.response.data.message);
                setLoading(false);
            }
        }
    }
    const postDetails = (pics) => {
        debugger
        if (!pics) {
            return setPicMessage("Please Select an Image");
        }
        setPicMessage(null)
        if (pics.type === 'image/jpeg' || pics.type === 'image/png') {
            const data = new FormData();
            data.append("file", pics);
            data.append("upload_preset", 'noteZipper');
            data.append("cloud_name", 'ujagarsingh');
            fetch("cloudinary://686493152165691:FTdYAleFTD1Eayr3ypT8oQRmPj8@ujagarsingh", {
                method: "post", body: data
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    setPic(data.url.tostring());
                })
                .catch((err) => {
                    console.log(err)
                })
        } else {
            return setPicMessage("Please Select an Image");
        }
    }
    return (
        <MainScreen title="Register">
            <div className='registerContainer' style={{ overflowX: "hidden", height: "87%" }}>
                {loading && <Loading />}
                {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
                {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
                <Form onSubmit={submitHandler}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            value={name}
                            type="name"
                            onChange={(e) => { setName(e.target.value) }}
                            placeholder="Enter name" />
                        <Form.Text className="text-muted">
                            We'll never share your name with anyone else.
                        </Form.Text>
                    </Form.Group>

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

                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            value={confirmpassword}
                            type="password"
                            onChange={(e) => { setConfirmPassword(e.target.value) }}
                            placeholder="Confirm Password" />
                    </Form.Group>
                    {/* {picMessage && (
                        <ErrorMessage varient="danger">{picMessage}</ErrorMessage>
                    )}
                    <Form.Group className="mb-3" >
                        <Form.Label>Profile Picture</Form.Label>
                        <Form.Control
                            onChange={(e)=> postDetails(e.target.files[0])}
                            id="custom-file"
                            type="file"
                            placeholder="Upload Profile Picture" />
                    </Form.Group> */}
                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                </Form>
                <Row className='py-3'>
                    <Col>
                        Already Register ? <Link to="/login">Login</Link>
                    </Col>
                </Row>
            </div>
        </MainScreen>
    )
}

export default RegisterPage
