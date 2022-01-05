import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function LandingPage() {
    return (
        <Container>
            <h1>Landing Page</h1>
            <NavLink to="/login" className={"btn btn-primary"}>Login</NavLink>{' '}
            <NavLink to="/register" className={"btn btn-warning"}>Signup</NavLink>
        </Container>
    )
}

export default LandingPage
