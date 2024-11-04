const http=require('http');
const express=require('express')

const app=express();
var WebSocketServer=require('websocket').server;

const httpserver=http.createServer(app)

const websocket=new WebSocketServer({
    "httpServer":httpserver   
})

websocket.on('request',(request)=>{
    const connection=request.accept(null,request.origin)

    connection.send("hello my client ")
    connection.on('message',()=>{
        console.log("mesage is",data.utf8Data);

    })
    connection.on('close',()=>{
        console.log("connection is closed")

    })
})

httpserver.listen(3000,()=>{
    console.log("server is running");
})


