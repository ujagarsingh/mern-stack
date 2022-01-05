import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function MainScreen({ title, children }) {
	return (
		<Container style={{height : "85vh"}}>
			<Row>
				<Col>
					{title && <h3>{title}</h3>}
				<hr />
				</Col>
			</Row>
			{children}
		</Container>
	)
}

export default MainScreen
