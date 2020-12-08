const express = require('express')
const server = express()
const studentsRoutes = require('./students')
const cors = require('cors')

//CONFIG
//enable cors
server.use(cors())
//going to make express able to read the bodu
server.use(express.json()) 
//I'm saying use the routes at in students/index.js for any path /students
server.use('/students',studentsRoutes)

const PORT = 3001
server.listen(PORT,()=>console.log('connected at',PORT))