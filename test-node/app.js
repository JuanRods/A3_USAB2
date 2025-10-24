/*const http = require("http");

http

    .createServer(function(request, response){

        response.writeHead(200, {"Content-Type": "text/plain"});

        response.end("Ola Mundo\n")

    })  
    .listen(8000, "127.0.0.1");

    console.log("Servidor está rodando em http//127.0.0.1:8000/")
*/


const express = require("express");
const app = express();


app.get("/", function(req, res){
    res.send("Olá Mundo");
})

app.listen(3000, function(){
    console.log("App rodando na porta 3000!")
})