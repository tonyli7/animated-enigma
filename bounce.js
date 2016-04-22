

var make = document.getElementById("make");


var makeBall = function (){
    var radius=Math.random()*100;
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

    drawBall();

    return {
	setRad: function(r){radius = r;},
	setSpeed: function(s){speed = s},
	setColor: function(c){color = c},
	radius: getRad,
	speed: getSpeed,
	color: getColor
    }
}

var intervalID
var drawBall = function(){
    var ball = document.getElementById("bouncey");
    var c = document.createElementNS("http://www.w3.org/2000/svg","circle");

    console.log(radius);
    var x_dir=Math.random()*3+1;
    var y_dir=Math.random()*3+1;
    var ballX=Math.random()*438;
    var ballY=Math.random()*438;
    var radius=Math.random()*75+25;

    c.setAttribute("cx", ballX);
    c.setAttribute("cy", ballY);
    c.setAttribute("r", radius);
    c.setAttribute("fill","blue");
    c.setAttribute("stroke","black");
  
    var dvdgo = function(){
	ballX += x_dir;
	ballY += y_dir;
	if ( ballX >= (500 - c.getAttribute("r")) || ballX <= c.getAttribute("r") ) {
            x_dir = -x_dir;
	} 
	if ( ballY >= (500 - c.getAttribute("r")) || ballY <= c.getAttribute("r") ) {
	    y_dir = -y_dir;
	}


	c.setAttribute("cx", ballX);
	c.setAttribute("cy", ballY);
	ball.appendChild(c);
	console.log(ball.getAttribute("width"));
    }
    intervalID=window.setInterval(dvdgo,30);
    console.log(intervalID)
}

make.addEventListener("click", makeBall)
