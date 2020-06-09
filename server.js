//intailizing the packages
const express= require('express');
const path =require('path');
const http=require('http');
const hbs=require('hbs');
const fs=require('fs');
const socket=require('socket.io');
var app=express();



app.set('view engine','hbs');
app.use(express.static(__dirname+ '/client'));

const server = require('http').createServer(app);
const io = require('socket.io')(server);


const port=process.env.PORT || 3000;


app.get('/', (req, res) => {
  res.sendFile(__dirname + 'public/index.html');
});

io.on('connection', (socket) => {

  console.log('Client connected');
   socket.on('disconnect', () => console.log('Client disconnected'));
});
setInterval(() => io.emit('time', new Date().toTimeString()), 1000);
// Create gradient
/*var grd = ctx.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10, 10, 150, 80);

*/



app.use((req,res,next)=>{
  var now = new Date().toString();
  var log = now
  fs.appendFile('server.log',log+'\n',(err)=>{
    if(err){
      console.log('unable to append file')
    }
  })
  next()
});
/*
app.use((req,res,next)=>{
  res.render('maintenance.hbs',{

  })
});*/

server.listen(port,()=>{
  console.log("server is up on port"+port)
});
