
let socket = io();
let el;
function function1(){
		console.log("connected to server")
}

function function2(timeString){

		el = document.getElementById('server-time');
		el.innerHTML = 'Server time: '+ timeString;
		console.log(el)
}
/*function imageReady(){
	image(bernard,0,0,width,height);
}*/

function setup() {



	socket.on('connect', function1);
	//bernard= createCapture('images/st-bernard-dog-alps.jpg',imageReady);
	socket.on('time', function2);}
