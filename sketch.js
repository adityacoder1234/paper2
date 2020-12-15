
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var papers,ground1;
var paperobject;
var rect1,box2,box3;



function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	papers = new paper(200,400,70)
	papers.shapeColor=("pink")


	ground1 = new ground(width/2,670,width,20);

	rect1 = new dustbins(1200,480,90,20);

	box2 = new dustbins(1250,445,20,90);

	box3 = new dustbins(1150,445,20,90);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  papers.display();
  ground1.display();
  rect1.display();
   box2.display();
   box3.display();
  
  drawSprites();
}
function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(papers.body,papers.body.position,{x:85,y:-85});
	}
}



