function setup() 
{
   createCanvas(800, 800);
   
}

function draw()
{
	background(0);
	noFill();
    stroke(255,255,255);

	if(mouseX<50) {
	stroke(247,7,20);
	ellipse(50,400,100,100);
} else if(mouseX<100) {
    stroke(255,111,90);
	ellipse(100,400,90,90);
} else if(mouseX<150) {
    stroke(253,254,52);
	ellipse(150,400,80,80);
} else if(mouseX<200) {
    stroke(22,146,11);
	ellipse(200,400,70,70);
} else if(mouseX<250) {
    stroke(19,44,255);
    ellipse(250,400,60,60);
} else if(mouseX<300) {
    stroke(6,13,81);
	ellipse(300,400,50,50);
} else if(mouseX<350) {
    stroke(109,0,255);
	ellipse(350,400,40,40);
} else if(mouseX<400) {
	ellipse(400,400,30,30);
} else if(mouseX<450) {
    stroke(109,0,255);
	ellipse(450,400,40,40);
} else if(mouseX<500) {
    stroke(6,13,81);
	ellipse(500,400,50,50);
} else if(mouseX<550) {
    stroke(19,44,255);
	ellipse(550,400,60,60);
} else if(mouseX<600) {
    stroke(22,146,11);
	ellipse(600,400,70,70);
} else if(mouseX<650) {
    stroke(253,254,52);
	ellipse(650,400,80,80);
} else if(mouseX<700) {
    stroke(255,111,90);
	ellipse(700,400,90,90);
} else if(mouseX<800) {
	stroke(247,7,20);
	ellipse(750,400,100,100);
}
}