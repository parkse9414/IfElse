function setup() 
{
   createCanvas(800, 800);
   
}

function draw()
{
	background(0);
	noFill();
    stroke(255,255,255);

	if(mouseX<50){
	ellipse(50,400,100,100);
} else if(mouseX<100) {
	ellipse(100,400,90,90);
} else if(mouseX<150) {
	ellipse(150,400,80,80);
} else if(mouseX<200) {
	ellipse(200,400,70,70);
} else if(mouseX<250) {
    ellipse(250,400,60,60);
} else if(mouseX<300) {
	ellipse(300,400,50,50);
} else if(mouseX<350) {
	ellipse(350,400,40,40);
} else if(mouseX<400) {
	ellipse(400,400,30,30);
} else if(mouseX<450) {
	ellipse(450,400,40,40);
} else if(mouseX<500) {
	ellipse(500,400,50,50);
} else if(mouseX<550) {
	ellipse(550,400,60,60);
} else if(mouseX<600) {
	ellipse(600,400,70,70);
} else if(mouseX<650) {
	ellipse(650,400,80,80);
} else if(mouseX<700) {
	ellipse(700,400,90,90);
} else if(mouseX<750) {
	ellipse(750,400,100,100);
}
}