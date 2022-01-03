import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Row, Accordion, Badge, Button, Card, NavLink } from 'react-bootstrap'
import MainScreen from '../../components/MainScreen'
// import notes from '../../data/notes'

function MyNotes() {

	const [notes, setNotes] = useState([])

	useEffect(() => {
		fetchNotes()
	}, [])

	const fetchNotes = async () => {
		const {data} = await Axios
			.get('/api/notes')
			.catch((error) => {
				console.log("Error", error)
			})
		setNotes(data)
	}

	const deleteHandler = (event, _id) => {
		event.preventDefault();
		if (window.confirm('Are you sure!!!')) {
			console.log(`Delete function Called ${_id}`)
		}
	}

	const notesElement = notes.map((note, index) => {
		const { _id, title, content, category } = note;
		return (
			<Card key={_id}>
				<Card.Header>
					<span className='d-flex justify-content w-100'>
						{index + 1} {title}
						<span className='ml-auto d-flex'>
							<NavLink to={`/mynote/${_id}`} className="btn btn-primary mr-2">Edit</NavLink>
							<NavLink onClick={(event) => deleteHandler(event, _id)} className="btn btn-danger">Delete</NavLink>
						</span>
					</span>
				</Card.Header>
				<Card.Body>
					<Badge bg="primary">{category}</Badge>
					<Row>{content}</Row>
				</Card.Body>
			</Card>)
	})


	return (
		<MainScreen title={"My Notes"}>
			<Button>Add New Notes</Button>
			<Accordion defaultActiveKey="0" flush>
				{notesElement}
			</Accordion>
		</MainScreen>
	)
}

export default MyNotes
