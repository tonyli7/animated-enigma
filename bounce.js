

var make = document.getElementById("make");
var red = document.getElementById("redify");
var shrink_btn = document.getElementById("shrink")
var list_balls = [];

var intervalID;
var makeBall = function(){
    var ball = document.getElementById("bouncey");
    var c = document.createElementNS("http://www.w3.org/2000/svg","circle");

    console.log(radius);
    var x_dir=Math.random()*3+1;
    var y_dir=Math.random()*3+1;
    var ballX=Math.random()*400+50;
    var ballY=Math.random()*400+50;
    var radius=Math.random()*75+25;
    var color='#'+Math.floor(Math.random()*16777215).toString(16);

    c.setAttribute("cx", ballX);
    c.setAttribute("cy", ballY);
    c.setAttribute("r", radius);
    c.setAttribute("fill",color);
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

    var getX = function(){
        return x;
    }

    var getY = function(){
        return y;
    }

    var setColor = function (color){
	c.setAttribute("fill", color);
    }

    var setRad = function(rad){
	c.setAttribute("r", rad);
    }

    return {
	dvdgo: dvdgo,
	getX: getX,
	getY: getY,
	setColor: setColor,
	setRad: setRad,
	radius: radius,
	color: color , 
	ball: c
    }
    
    console.log(intervalID)
}

var intervalID;
var drawBall = function (){
    var b = makeBall();
    list_balls.push(b);
    intervalID=setInterval(b.dvdgo,10);
}

var redify = function (){
    var newList = list_balls.map( function (b){	
	b.setColor("red");
	return b;
    });
    list_balls=newList;
}

var shrink = function(){
    var newList = list_balls.map(function (b){
	b.setRad(b.radius/2);
	return b;
    });
}

make.addEventListener("click", drawBall)
red.addEventListener("click", redify)
shrink_btn.addEventListener("click", shrink)
