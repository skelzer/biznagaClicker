const express = require("express")
const app = express()
const port = 8085
const http = require("http").Server(app)
const io = require("socket.io")(http)
const server = http.listen(port)


app.use(express.static(__dirname+"/1/"))

app.get('/', function (req, res) {
    res.sendFile('index.html');
})