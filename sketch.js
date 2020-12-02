
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bg;
function preload()
{
	bg = loadImage("Ancr.gif");
}

function setup() {
	createCanvas(1500,650);


	engine = Engine.create();
	world = engine.world;



	Engine.run(engine);
  paper = new Paper(50,550,50,50);
  line1 = new Line(1000,565,10,150);
  line2 = new Line(1250,565,10,150);
  line3 = new Line(1125,630,235,20);
  line4 = new Line(1125,630,235,10);
  ground = new Ground(750,630,1600,200);
  ground2 = new Ground2(750,690,1600,70);
  uni1 = new uni(1125,555,235,125);
}


function draw() {
  background(bg);
Engine.update(engine);
line1.display();
 line2.display();
 line3.display();
 line4.display();
paper.display();
ground.display();
ground2.display();
uni1.display();
}
function keyPressed(){
  if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper.body,paper.body.position,{x:180,y:-550});
	}
}





