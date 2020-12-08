const express = require('express')
const router = express.Router()
const fs = require('fs')//core module
const path = require('path') //core module to deal with paths

                
//I use router because let's us create a collection of endpoints that I can then import in the main server.js and use them

// 1. get all users url --> localhost:3001/users
// 2. get singe user --> locahost:3001/users/:id
// 3. create singe user  --> locahost:3001/users
// 4. modify a singe user --> locahost:3001/users/:id
// 5. delete a singe user --> locahost:3001/users/:id

router.get('/', (req, res) => { //that's the handler. First one is the path
    const usersFilePath = path.join(__dirname, "users.json")
    const file = fs.readFileSync(usersFilePath)
    const text = file.toLocaleString()
    const userArray = JSON.parse(text)
    res.send(JSON.parse(text))
    //retrive the user list from a file on disk
    //want to send it a response
})

router.get("/:id", (req, res) => {
    res.send('single user route')
    console.log(req.params.id)
})

router.post("/", (req, res) => {
  res.send("post single user route");
  console.log(req.body);
});


router.put("/:id", (req, res) => {
  res.send("modify single user route");
  console.log(req);
});

router.delete("/:id", (req, res) => {
  res.send("delete single user route");
  console.log(req);
});

module.exports = router