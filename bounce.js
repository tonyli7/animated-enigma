var c = document.getElementById("bouncey");//canvas object
var ctx = c.getContext("2d");
ctx.strokeRect(0,0,538,538);

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

function drawBall(radius, color){
    randX=Math.random()*450+50
    randY=Math.random()*450+50
    ctx.beginPath();
    ctx.fillStyle=color;
    ctx.arc(randX,randY,radius,0,2*Math.PI);
    ctx.stroke();
    ctx.fill();
   
}
