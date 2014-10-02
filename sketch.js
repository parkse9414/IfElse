function setup() 
{
   createCanvas(900, 900);
   
}

function draw()
{
	background(0);
	noFill();
    stroke(255,255,255);

	if(mouseX<400){
	ellipse(300,450,100,100);
} else {
	ellipse(600,450,100,100)
}
}