const express = require('express')
const server = express()
const usersRoutes = require('./users') //I've a collection of routes at this path  which I'm importing to use

const port = 3001
server.use(express.json())

//to use the routues i do the following. I'm saying that for the route /users (prefix) i want to use the routes wich are in the file /users/index.js
server.use("/users",usersRoutes)

server.listen(port, () => {
    console.log('server created',port)
})