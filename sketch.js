function setup() 
{
   createCanvas(800, 800);
   
}

function draw()
{
	background(0);
	noFill();
    stroke(255,255,255);
	ellipse(400,400,mouseX,mouseY);
}