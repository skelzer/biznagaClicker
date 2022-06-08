const express = require("express")
const app = express()
const port = 8085
const http = require("http").Server(app)
const io = require("socket.io")(http)
const server = http.listen(port)

const playerStatus = {cookies:0, primillos:0}


app.use(express.static(__dirname+"/1/"))

app.get('/', function (req, res) {
    res.sendFile('index.html');
})

function hiringFunction(kind){

}

io.on("connection", function (s){
    s.on("clickMain", function (){
        playerStatus.cookies++
        s.emit("refresh", playerStatus)
    })
    s.on("hire", hiringFunction)
})