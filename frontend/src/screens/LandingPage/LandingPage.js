import React from 'react'
import { Button, Container } from 'react-bootstrap'

function LandingPage() {
    return (
        <Container>
            <h1>Landing Page</h1>
            <Button variant={"primary"}>Login</Button>{' '}
            <Button variant={"warning"}>Signup</Button>
        </Container>
    )
}

export default LandingPage
