const express = require('express');
const notes = require('./data/notes')
const connectDB = require('./config/db');
const dotenv = require("dotenv");
const userRoutes = require('./routes/userRoutes')

const app = express();
dotenv.config();
connectDB();
app.use(express.json())

app.get('/', (req, res) => {
    res.send('API is running...')
})

// frontend
app.get('/api/notes', (req, res) => {
    res.send(notes)
})

app.use('/api/users', userRoutes)

// app.get('/api/notes/:id', (req, res) => {
//     const note = notes.find((n) => n._id === req.params.id)
//     res.send(note)
// })

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`SERVER STARTED ON PORT ${PORT}`))