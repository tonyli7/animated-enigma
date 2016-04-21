var c = document.getElementById("bouncey");//canvas object
var ctx = c.getContext("2d");
ctx.strokeRect(0,0,538,538);
/*
var makeBall = function (r){
    var radius=r;
    var speed=1;
    var color="#ff0000";
    
    var getRad = function(){
	return radius;
    }

    var getSpeed = function(){
	return speed;
    }

    var getColor = function(){
	return color;
    }

    drawBall(radius, color);

    return {
	setRad: function(r){radius = r;},
	setSpeed: function(s){speed = s},
	setColor: function(c){color = c},
	radius: getRad,
	speed: getSpeed,
	color: getColor
    }
}
*/
var x_dir=1.5;
var y_dir=-1.5;
var ballX=Math.random()*450+50;
var ballY=Math.random()*450+50;
var drawBall = function(radius, color){
    console.log(radius);
    radius-=17
    ctx.clearRect(0,0,538,538);
    radius=20;
  
  /*
    var ballX=250;
    var ballY=250;
*/
    ctx.beginPath();
    ctx.fillStyle=color;
   

    if ( ballX >= (c.width - 60) || ballX <= 0 ) {
        x_dir = -x_dir;
    } 
    if ( ballY >= (c.height - 40) || ballY <= 0 ) {
	y_dir = -y_dir;
    }
    ballX += x_dir;
    ballY += y_dir;
    ctx.arc(ballX,ballY,radius,0,2*Math.PI);
    ctx.stroke();
    ctx.fill();
    requestID = window.requestAnimationFrame(drawBall);
    
   
}
drawBall(2,"#ff0000")
