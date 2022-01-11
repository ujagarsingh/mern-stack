import React, { useEffect } from 'react'
import { Button, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function LandingPage({history}) {

    // useEffect(() => {
    //     const userInfo = window.localStorage.getItem("userInfo");
    //     if (userInfo) {
    //         debugger;
    //         console.log(history);
    //         //history.push("/mynotes");
    //     }
    // }, [history])
    return (
        <Container>
            <h1>Landing Page</h1>
            <NavLink to="/login" className={"btn btn-primary"}>Login</NavLink>{' '}
            <NavLink to="/register" className={"btn btn-warning"}>Signup</NavLink>
        </Container>
    )
}

export default LandingPage
