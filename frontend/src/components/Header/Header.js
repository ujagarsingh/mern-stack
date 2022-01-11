import React from 'react'
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'

function Header() {
	const navigate = useNavigate()
	return (
		<>
			<Navbar bg="light" expand="sm">
				<Container fluid>
					<Navbar.Brand >
						<NavLink to="/">
							Note Zipper
						</NavLink>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarScroll" />
					<Navbar.Collapse id="navbarScroll">
						<Nav className="my-auto">
							<Form className="d-flex">
								<FormControl
									type="search"
									placeholder="Search"
									className="me-2"
									aria-label="Search"
								/>
							</Form>
						</Nav>
						<Nav
							className="me-auto my-2 my-lg-0"
							style={{ maxHeight: '100px' }}
							navbarScroll>
							<NavLink className={"nav-link"} to="/mynotes">My Notes</NavLink>
							<NavDropdown title="User Name" id="navbarScrollingDropdown">
								<NavLink className={"dropdown-item"} to="/myprofile">My Profile</NavLink>
								<NavDropdown.Item onClick={() => {
									window.localStorage.removeItem("userInfo");
									navigate("/")
								}}>Logout</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	)
}

export default Header
